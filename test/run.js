/**
 * test/run.js — hashkit 测试运行器
 *
 *   node test/run.js            运行全部测试
 *   node test/run.js --quick    跳过 64MB 大文件与百万字符用例
 *
 * 退出码：0 = 全部通过；1 = 有失败；2 = 测试自身异常
 */
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');
const { execFileSync, spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const HashKit = require(path.join(ROOT, 'src', 'hashkit.js'));
const V = require('./vectors.js');

const QUICK = process.argv.includes('--quick');
const results = [];
const pending = [];
let curGroup = '';

function group(name) { curGroup = name; log('\n## ' + name); }
function log(s) { process.stdout.write(s + '\n'); }

function verdict(v) {
  if (v === true || v === undefined) return { ok: true, detail: '' };
  if (v && typeof v === 'object' && 'ok' in v) {
    return { ok: !!v.ok, detail: v.detail == null ? '' : String(v.detail) };
  }
  return { ok: false, detail: String(v) };
}

function emit(r) {
  log(`  ${r.ok ? 'PASS' : 'FAIL'}  ${r.id}  ${r.name}${r.detail ? '  — ' + r.detail : ''}${r.ms > 200 ? '  (' + r.ms + 'ms)' : ''}`);
}

function check(id, name, fn) {
  const t0 = Date.now();
  // 必须在声明时把分组"钉住"：异步用例是在同步流程跑完之后才 resolve 的，
  // 那时 curGroup 已经推进到最后一组了，用它打标签会把真实文件用例
  // 错误地记到「网页静态门禁」名下 —— 取证标签错位比没有标签更糟。
  const g0 = curGroup;
  let r;
  try {
    r = fn();
  } catch (e) {
    const rec = { group: g0, id, name, ok: false, ms: Date.now() - t0,
                  detail: '抛错：' + (e && e.message ? e.message : String(e)) };
    results.push(rec); emit(rec); return false;
  }
  if (r && typeof r.then === 'function') {
    const idx = results.length;
    results.push({ group: g0, id, name, ok: null, ms: 0, detail: '运行中…' });
    pending.push(
      r.then((v) => {
        const vd = verdict(v);
        const rec = { group: g0, id, name, ok: vd.ok, ms: Date.now() - t0, detail: vd.detail };
        results[idx] = rec; emit(rec);
      }, (e) => {
        const rec = { group: g0, id, name, ok: false, ms: Date.now() - t0,
                      detail: '拒绝：' + (e && e.message ? e.message : String(e)) };
        results[idx] = rec; emit(rec);
      })
    );
    return true;
  }
  const vd = verdict(r);
  const rec = { group: g0, id, name, ok: vd.ok, ms: Date.now() - t0, detail: vd.detail };
  results.push(rec); emit(rec);
  return vd.ok;
}

function eq(actual, expected) {
  if (actual === expected) return true;
  return { ok: false, detail: '期望 ' + expected + '，实际 ' + actual };
}

const nodeHash = (algo, data) =>
  crypto.createHash(algo).update(data).digest('hex');

/* ================================================================== *
 * 1. 已知答案向量（KAT）
 * ================================================================== */
group('1. 已知答案向量（KAT，判据来自公开标准/RFC）');
for (const [algo, desc, input, expected] of V.KNOWN_ANSWERS) {
  if (input === null && QUICK) continue;
  const data = input === null ? V.millionA() : input;
  check('KAT-' + algo + '-' + desc.slice(0, 12), `${algo}(${desc})`, () => {
    const got = HashKit.hash(data, algo);
    return eq(got, expected);
  });
}

/* ================================================================== *
 * 2. 长度字段 / 分组边界（逐字节 update，压测缓冲逻辑）
 * ================================================================== */
group('2. 分组与长度字段边界（逐字节喂入）');
for (const n of V.BOUNDARY_LENGTHS) {
  check('BND-' + n, `长度 ${n} 逐字节 update 与一次性结果一致`, () => {
    const data = V.randomBytes(n, 1234 + n);
    for (const algo of ['md5', 'sha1', 'sha256']) {
      const oneShot = HashKit.hash(data, algo);
      const h = HashKit.createHasher(algo);
      for (let i = 0; i < data.length; i++) h.update(data.subarray(i, i + 1));
      const streamed = HashKit.toHex(h.digestBytes());
      if (oneShot !== streamed) {
        return { ok: false, detail: `${algo} 长度${n}: 一次性${oneShot} != 逐字节${streamed}` };
      }
      const nc = nodeHash(algo, Buffer.from(data));
      if (oneShot !== nc) {
        return { ok: false, detail: `${algo} 长度${n}: 本库${oneShot} != node crypto${nc}` };
      }
    }
    return true;
  });
}

/* ================================================================== *
 * 3. 与 Node / OpenSSL 独立实现交叉校验（随机数据）
 * ================================================================== */
group('3. 与 Node crypto(OpenSSL) 交叉校验（确定性随机数据）');
{
  const lengths = [];
  for (let i = 0; i < 60; i++) lengths.push(V.BOUNDARY_LENGTHS[i % V.BOUNDARY_LENGTHS.length]);
  const rnd = V.makePrng(777);
  for (let i = 0; i < 120; i++) lengths.push(Math.floor(rnd() * 200000));
  let mismatches = 0;
  check('XCHK-random', `${lengths.length} 组随机数据 × 3 算法 = ${lengths.length * 3} 次比对`, () => {
    for (let i = 0; i < lengths.length; i++) {
      const data = V.randomBytes(lengths[i], 90000 + i);
      const buf = Buffer.from(data);
      for (const algo of ['md5', 'sha1', 'sha256']) {
        const mine = HashKit.hash(data, algo);
        const theirs = nodeHash(algo, buf);
        if (mine !== theirs) { mismatches++; }
      }
    }
    return mismatches === 0
      ? true
      : { ok: false, detail: mismatches + ' 处不一致' };
  });
}

/* ================================================================== *
 * 4. 流式分片等价性（模拟大文件的不同 chunk 划分）
 * ================================================================== */
group('4. 流式分片等价性（不同 chunk 划分必须同结果）');
{
  const data = V.randomBytes(40000, 4242);
  const blob = new Blob([Buffer.from(data)]);
  const splits = [1, 63, 64, 65, 4096, 39999, 40000, 4194304];
  check('STRM-splits', `同一数据按 ${splits.length} 种 chunk 划分计算结果一致`, () => {
    const ref = HashKit.hashAll(data, ['md5', 'sha1', 'sha256']);
    const jobs = splits.map((cs) =>
      HashKit.hashBlob(blob, { algorithms: ['md5', 'sha1', 'sha256'], chunkSize: cs, yieldToEventLoop: false })
        .then((r) => {
          for (const a of ['md5', 'sha1', 'sha256']) {
            if (r.hashes[a] !== ref[a]) {
              throw new Error(`chunk=${cs} ${a}: ${r.hashes[a]} != ${ref[a]}`);
            }
          }
          if (r.chunks !== Math.ceil(data.length / cs)) {
            throw new Error(`chunk=${cs} 分片数 ${r.chunks} != 期望 ${Math.ceil(data.length / cs)}`);
          }
          return true;
        })
    );
    return Promise.all(jobs).then(() => true, (e) => ({ ok: false, detail: e.message }));
  });
}

/* ================================================================== *
 * 5. UMD 浏览器分支（无 module 环境下应挂到全局）
 * ================================================================== */
group('5. UMD 浏览器分支（vm 沙箱模拟无 require 环境）');
check('UMD-global', '在无 module 的沙箱中加载后 window.HashKit 可用且结果正确', () => {
  const src = fs.readFileSync(path.join(ROOT, 'src', 'hashkit.js'), 'utf8');
  const sandbox = {
    TextEncoder: TextEncoder,
    Uint8Array, Int32Array, ArrayBuffer, Promise, Math, Date, setTimeout, Error, TypeError,
    String, Array, Object, Number
  };
  sandbox.globalThis = sandbox;
  sandbox.self = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox, { filename: 'hashkit.js' });
  if (!sandbox.HashKit) return { ok: false, detail: '沙箱里没有 HashKit 全局变量' };
  const got = sandbox.HashKit.hash('abc', 'sha256');
  const exp = 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad';
  return eq(got, exp);
});

/* ================================================================== *
 * 6. API 行为与错误处理
 * ================================================================== */
group('6. API 行为与错误处理');
check('API-version', '导出 version === 1.0.0', () => eq(HashKit.version, '1.0.0'));
check('API-algos', '导出算法清单 = sha256/sha1/md5', () =>
  eq(HashKit.ALGORITHMS.join(','), 'sha256,sha1,md5'));
check('API-unknown-algo', '未知算法必须抛错（不得静默降级）', () => {
  try { HashKit.hash('abc', 'sha512'); return { ok: false, detail: '未抛错' }; }
  catch (e) { return /不支持/.test(e.message) ? true : { ok: false, detail: e.message }; }
});
check('API-digest-twice', 'digest 之后 update 必须抛错（防止静默错误结果）', () => {
  const h = HashKit.createHasher('sha256');
  h.update('abc'); h.digestBytes();
  try { h.update('x'); return { ok: false, detail: '未抛错' }; }
  catch (e) { return true; }
});
check('API-empty-null', 'null / undefined 输入按空输入处理', () => {
  const a = HashKit.hashAll(null, ['sha256']).sha256;
  const b = HashKit.hashAll(new Uint8Array(0), ['sha256']).sha256;
  return eq(a, b);
});
check('API-utf8', 'UTF-8 字符串与 Node Buffer 结果一致（含 emoji）', () => {
  const s = '知办库 🔐 hash 校验';
  return eq(HashKit.hash(s, 'sha256'), nodeHash('sha256', Buffer.from(s, 'utf8')));
});
check('API-hex-normalize', 'normalizeHex 去掉前缀/空格/连字符/冒号并小写', () => {
  const t = ' SHA256: ba78 16bf-8f01:CFEA414140DE5DAE2223B00361A396177A9CB410FF61F20015AD ';
  return eq(HashKit.normalizeHex(t),
    'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
});
check('API-detect', 'detectAlgorithm 按长度识别 32/40/64', () => {
  const r = [HashKit.detectAlgorithm('a'.repeat(32)), HashKit.detectAlgorithm('a'.repeat(40)),
             HashKit.detectAlgorithm('a'.repeat(64)), HashKit.detectAlgorithm('a'.repeat(20))];
  return eq(r.join(','), 'md5,sha1,sha256,');
});

/* ================================================================== *
 * 7. compare() 的四种状态
 * ================================================================== */
group('7. 期望值比对语义（MATCH / MISMATCH / NOT_CHECKED / INVALID）');
{
  const hashes = HashKit.hashAll('abc', ['md5', 'sha1', 'sha256']);
  check('CMP-match-sha256', '正确 SHA-256 → MATCH', () =>
    eq(HashKit.compare(hashes, hashes.sha256).status, 'MATCH'));
  check('CMP-match-md5-upper', '大写 MD5 → MATCH（大小写不敏感）', () =>
    eq(HashKit.compare(hashes, hashes.md5.toUpperCase()).status, 'MATCH'));
  check('CMP-match-sha1-prefix', '带 "sha1:" 前缀的 SHA-1 → MATCH', () =>
    eq(HashKit.compare(hashes, 'sha1: ' + hashes.sha1).status, 'MATCH'));
  check('CMP-mismatch', '错误 SHA-256 → MISMATCH', () =>
    eq(HashKit.compare(hashes, '0'.repeat(64)).status, 'MISMATCH'));
  check('CMP-not-checked', '期望值留空 → NOT_CHECKED', () =>
    eq(HashKit.compare(hashes, '   ').status, 'NOT_CHECKED'));
  check('CMP-invalid', '长度非 32/40/64 → INVALID（不得误判为 MISMATCH）', () =>
    eq(HashKit.compare(hashes, 'abcdef').status, 'INVALID'));
  check('CMP-algo-not-computed', '期望值为 MD5 但只算了 SHA-256 → NOT_CHECKED', () =>
    eq(HashKit.compare({ sha256: hashes.sha256 }, hashes.md5).status, 'NOT_CHECKED'));
}

/* ================================================================== *
 * 8. 真实文件（空 / 二进制 / 中文文件名 / 大文件）
 * ================================================================== */
group('8. 真实文件端到端（hashBlob + 磁盘文件）');
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'hashkit-test-'));

function blobOfFile(p) {
  return new Blob([fs.readFileSync(p)]);
}

check('FILE-empty', '空文件（0 字节）三算法结果与 node crypto 一致', () => {
  const p = path.join(TMP, 'empty.bin');
  fs.writeFileSync(p, Buffer.alloc(0));
  return HashKit.hashBlob(blobOfFile(p), { algorithms: ['md5', 'sha1', 'sha256'] }).then((r) => {
    for (const a of ['md5', 'sha1', 'sha256']) {
      const nc = nodeHash(a, Buffer.alloc(0));
      if (r.hashes[a] !== nc) return { ok: false, detail: a + ' 不一致' };
    }
    if (r.chunks !== 0) return { ok: false, detail: '空文件分片数应为 0，实际 ' + r.chunks };
    if (r.bytes !== 0) return { ok: false, detail: 'bytes 应为 0' };
    return true;
  });
});

check('FILE-binary', '二进制文件（含 0x00/0xFF，大小 1MiB+37）与 node crypto 一致', () => {
  const data = V.randomBytes(1048576 + 37, 5150);
  const p = path.join(TMP, 'binary.dat');
  fs.writeFileSync(p, Buffer.from(data));
  return HashKit.hashBlob(blobOfFile(p), { algorithms: ['md5', 'sha1', 'sha256'] }).then((r) => {
    for (const a of ['md5', 'sha1', 'sha256']) {
      const nc = nodeHash(a, Buffer.from(data));
      if (r.hashes[a] !== nc) return { ok: false, detail: a + ' 不一致' };
    }
    return eq(r.bytes, data.length);
  });
});

check('FILE-chinese-name', '中文文件名（哈希校验器.exe）可正常读取且结果一致', () => {
  const name = '哈希校验器 v1.0.0 安装包.exe';
  const p = path.join(TMP, name);
  const data = V.randomBytes(300000, 8899);
  fs.writeFileSync(p, Buffer.from(data));
  if (!fs.existsSync(p)) return { ok: false, detail: '中文文件名写入失败' };
  return HashKit.hashBlob(blobOfFile(p), { algorithms: ['sha256'] }).then((r) => {
    const nc = nodeHash('sha256', Buffer.from(data));
    return r.hashes.sha256 === nc
      ? true
      : { ok: false, detail: '期望 ' + nc + ' 实际 ' + r.hashes.sha256 };
  });
});

check('FILE-large-64MiB', QUICK ? '（--quick 跳过）' : '64 MiB 大文件：与 node crypto 一致 + 分片数正确 + 堆内存不随文件增长', () => {
  if (QUICK) return true;
  const size = 64 * 1024 * 1024;
  const chunk = 1024 * 1024;
  const blocks = [];
  for (let i = 0; i < size / chunk; i++) {
    blocks.push(Buffer.from(V.randomBytes(chunk, 31337 + i)));
  }
  const p = path.join(TMP, 'large-64m.bin');
  fs.writeFileSync(p, Buffer.concat(blocks));
  const expected = {};
  for (const a of ['md5', 'sha1', 'sha256']) expected[a] = nodeHash(a, fs.readFileSync(p));
  fs.unlinkSync(p);

  const t0 = Date.now();
  const memBefore = process.memoryUsage().heapUsed;
  let peak = memBefore;
  const timer = setInterval(() => {
    const m = process.memoryUsage().heapUsed;
    if (m > peak) peak = m;
  }, 5);
  if (timer.unref) timer.unref();

  return HashKit.hashBlob(new Blob(blocks), {
    algorithms: ['md5', 'sha1', 'sha256'],
    chunkSize: 4 * 1024 * 1024
  }).then((r) => {
    clearInterval(timer);
    const memDelta = (peak - memBefore) / 1048576;
    for (const a of ['md5', 'sha1', 'sha256']) {
      if (r.hashes[a] !== expected[a]) {
        return { ok: false, detail: a + ' 不一致：' + r.hashes[a] + ' != ' + expected[a] };
      }
    }
    if (r.chunks !== 16) return { ok: false, detail: '分片数应为 16，实际 ' + r.chunks };
    const secs = (Date.now() - t0) / 1000;
    return {
      ok: true,
      detail: `三算法一致 · 16 片 × 4 MiB · ${secs.toFixed(2)}s · ${(64 / secs).toFixed(0)} MiB/s · 峰值堆增量 ${memDelta.toFixed(1)} MiB（远小于 64 MiB，证明未整文件驻留）`
    };
  });
});

/* ================================================================== *
 * 9. CLI 端到端
 * ================================================================== */
group('9. Node CLI 端到端（cli/hashkit-cli.js）');
const CLI = path.join(ROOT, 'cli', 'hashkit-cli.js');
const cliFile = path.join(TMP, 'cli-sample.bin');
const cliData = V.randomBytes(123456, 606);
fs.writeFileSync(cliFile, Buffer.from(cliData));
const cliExpected = {
  md5: nodeHash('md5', Buffer.from(cliData)),
  sha1: nodeHash('sha1', Buffer.from(cliData)),
  sha256: nodeHash('sha256', Buffer.from(cliData))
};

function runCli(args) {
  const r = spawnSync(process.execPath, [CLI].concat(args), { encoding: 'utf8' });
  return { code: r.status, out: r.stdout || '', err: r.stderr || '' };
}

check('CLI-default', '默认输出 SHA-256，退出码 0', () => {
  const r = runCli([cliFile]);
  if (r.code !== 0) return { ok: false, detail: 'exit ' + r.code + ' ' + r.err };
  return r.out.includes(cliExpected.sha256)
    ? { ok: true, detail: r.out.trim().split('\n').pop() }
    : { ok: false, detail: r.out };
});
check('CLI-algo-all', '-a all 输出三种算法且全部正确', () => {
  const r = runCli([cliFile, '-a', 'all']);
  for (const a of ['md5', 'sha1', 'sha256']) {
    if (!r.out.includes(cliExpected[a])) return { ok: false, detail: a + ' 未命中' };
  }
  return eq(r.code, 0);
});
check('CLI-expect-ok', '--expect 正确值 → 打印 MATCH 且退出码 0', () => {
  const r = runCli([cliFile, '--expect', cliExpected.sha256]);
  if (r.code !== 0) return { ok: false, detail: 'exit ' + r.code };
  return r.out.includes('MATCH') ? true : { ok: false, detail: r.out };
});
check('CLI-expect-bad', '--expect 错误值 → 打印 MISMATCH 且退出码 1', () => {
  const r = runCli([cliFile, '--expect', '0'.repeat(64)]);
  if (r.code !== 1) return { ok: false, detail: 'exit ' + r.code + '（应为 1）' };
  return r.out.includes('MISMATCH') ? true : { ok: false, detail: r.out };
});
check('CLI-expect-auto-algo', '--expect 32 位值自动选 MD5 算法', () => {
  const r = runCli([cliFile, '--expect', cliExpected.md5]);
  if (r.code !== 0) return { ok: false, detail: 'exit ' + r.code + ' ' + r.out + r.err };
  return r.out.includes('MATCH') ? true : { ok: false, detail: r.out };
});
check('CLI-json', '--json 输出可被 JSON.parse 且字段正确', () => {
  const r = runCli([cliFile, '--json']);
  let j;
  try { j = JSON.parse(r.out); } catch (e) { return { ok: false, detail: 'JSON 解析失败：' + r.out }; }
  if (j.result !== undefined) j = j.result;
  const item = Array.isArray(j) ? j[0] : (j.files ? j.files[0] : j);
  if (!item || !item.hashes) return { ok: false, detail: JSON.stringify(j).slice(0, 200) };
  return eq(item.hashes.sha256, cliExpected.sha256);
});
check('CLI-missing-file', '文件不存在 → 退出码 2 且给出错误信息', () => {
  const r = runCli([path.join(TMP, 'no-such-file.bin')]);
  if (r.code !== 2) return { ok: false, detail: 'exit ' + r.code + '（应为 2）' };
  return /不存在|not found|ENOENT/i.test(r.out + r.err) ? true : { ok: false, detail: r.out + r.err };
});
check('CLI-no-args', '无参数 → 退出码 2 并打印用法', () => {
  const r = runCli([]);
  if (r.code !== 2) return { ok: false, detail: 'exit ' + r.code };
  return /用法|usage/i.test(r.out + r.err) ? true : { ok: false, detail: r.out + r.err };
});
check('CLI-certutil-cross', '与 Windows certutil 独立交叉校验（若平台可用）', () => {
  if (process.platform !== 'win32') return true;
  let out;
  try {
    out = execFileSync('certutil', ['-hashfile', cliFile, 'SHA256'], { encoding: 'utf8' });
  } catch (e) { return { ok: false, detail: 'certutil 调用失败：' + e.message }; }
  const m = out.replace(/\r/g, '').split('\n').map((s) => s.trim())
    .find((s) => /^[0-9a-f]{64}$/i.test(s));
  if (!m) return { ok: false, detail: '未能从 certutil 输出解析哈希' };
  return eq(m.toLowerCase(), cliExpected.sha256);
});

/* ================================================================== *
 * 10. 网页（T-01）静态门禁
 * ================================================================== */
group('10. T-01 网页静态门禁（不上传 / 无外部依赖 / 可访问性）');
const PAGE = path.join(ROOT, 'web', 'file-hash-checker.html');
let pageSrc = null;
check('WEB-exists', 'web/file-hash-checker.html 存在且非空', () => {
  if (!fs.existsSync(PAGE)) return { ok: false, detail: '文件不存在' };
  pageSrc = fs.readFileSync(PAGE, 'utf8');
  return pageSrc.length > 5000 ? true : { ok: false, detail: '长度异常 ' + pageSrc.length };
});
if (pageSrc) {
  // 只扫描"可执行脚本正文"：type 为空或为 javascript 的 <script>。
  // 说明文案（HTML 文本）与 JSON-LD 里的字符串不算代码，
  // 例如 FAQ 里写"本页没有 fetch / XMLHttpRequest"是在陈述事实，不应被判为违规。
  const executable = [];
  const sre = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let sm;
  while ((sm = sre.exec(pageSrc))) {
    const tm = /type\s*=\s*["']([^"']+)["']/i.exec(sm[1] || '');
    const type = tm ? tm[1].toLowerCase() : '';
    if (type === '' || /javascript|ecmascript/.test(type)) executable.push(sm[2]);
  }
  const code = executable.join('\n');
  check('WEB-exec-extract', `提取到 ${executable.length} 段可执行脚本正文（≥2 才说明提取有效）`, () =>
    executable.length >= 2 ? true : { ok: false, detail: '仅提取到 ' + executable.length + ' 段' });

  const banned = [
    ['fetch(', 'fetch 调用'],
    ['XMLHttpRequest', 'XHR 对象'],
    ['new WebSocket', 'WebSocket 对象'],
    ['WebSocket(', 'WebSocket 构造'],
    ['sendBeacon', 'sendBeacon'],
    ['importScripts', 'Worker 外部脚本'],
    ['new Worker', 'Web Worker'],
    ['<form', '表单标签'],
    ['action=', '表单 action'],
    ['http://', '明文 http 地址'],
    ['unpkg.com', 'CDN unpkg'],
    ['jsdelivr', 'CDN jsdelivr'],
    ['cdnjs', 'CDN cdnjs'],
    ['google-analytics', '第三方统计'],
    ['hm.baidu.com', '第三方统计（百度统计）'],
    ['gtag(', '第三方统计（gtag）'],
    ['localStorage', '本地存储'],
    ['indexedDB', '本地数据库']
  ];
  for (const [needle, label] of banned) {
    check('WEB-nonet-' + needle.replace(/[^a-z0-9]/gi, '') + '-' + label,
      `可执行脚本中不得出现「${label}」`, () => {
        const idx = code.indexOf(needle);
        if (idx === -1) return true;
        const ctx = code.slice(Math.max(0, idx - 50), idx + 50).replace(/\s+/g, ' ');
        return { ok: false, detail: '命中：…' + ctx + '…' };
      });
  }
  check('WEB-ext-res', '无任何外部可加载资源（script/link/img/iframe/source 的 src|href）', () => {
    const bad = [];
    const re = /<(script|link|img|iframe|source)\b([^>]*)>/gi;
    let m;
    while ((m = re.exec(pageSrc))) {
      const tag = m[1].toLowerCase();
      const attrs = m[2];
      const um = /\b(src|href)\s*=\s*["']([^"']+)["']/i.exec(attrs);
      if (!um) continue;
      const url = um[2];
      if (!/^https?:/i.test(url)) continue;
      // <link rel="canonical|alternate"> 只是声明式元数据，浏览器不会去加载它，
      // 因此不算"外部可加载资源"。
      if (tag === 'link' && /\brel\s*=\s*["'](canonical|alternate)["']/i.test(attrs)) continue;
      bad.push(tag + '→' + url);
    }
    return bad.length === 0 ? true : { ok: false, detail: bad.join(' ; ') };
  });
  check('WEB-self-contained-crypto', '内联包含 SHA-256 / SHA-1 / MD5 三个实现（离线可用）', () => {
    const need = ['unction Sha256', 'unction Sha1', 'unction Md5'];
    const miss = need.filter((n) => pageSrc.indexOf(n) === -1);
    return miss.length === 0 ? true : { ok: false, detail: '缺少：' + miss.join(', ') };
  });
  check('WEB-hashkit-sync', '页面内嵌的哈希实现与 src/hashkit.js 一致（防止两处漂移）', () => {
    const lib = fs.readFileSync(path.join(ROOT, 'src', 'hashkit.js'), 'utf8');
    const core = lib.slice(lib.indexOf('var K256'), lib.indexOf('/* ------------------------------------------------------------------ *\n   * 公共 API'));
    if (!core || core.length < 2000) return { ok: false, detail: '未能从库中提取核心段' };
    return pageSrc.includes(core) ? true
      : { ok: false, detail: '页面内嵌实现与库不一致（已漂移）' };
  });
  check('WEB-a11y', '可访问性基础：lang / viewport / aria-label / 按钮 type / 键盘可达', () => {
    const need = ['lang="zh-CN"', 'name="viewport"', 'aria-label', 'aria-live',
                  '<button', 'type="button"', '<label'];
    const miss = need.filter((n) => pageSrc.indexOf(n) === -1);
    return miss.length === 0 ? true : { ok: false, detail: '缺少：' + miss.join(', ') };
  });
  check('WEB-jsonld', '结构化数据：WebApplication + FAQPage，且不含虚构字段', () => {
    const blocks = pageSrc.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || [];
    if (blocks.length < 2) return { ok: false, detail: 'JSON-LD 块数 ' + blocks.length };
    const raw = blocks.join('\n');
    if (!/"WebApplication"/.test(raw) || !/"FAQPage"/.test(raw)) {
      return { ok: false, detail: '缺少 WebApplication 或 FAQPage' };
    }
    const banned = ['aggregateRating', 'reviewCount', 'ratingValue', 'award', 'SoftwareApplication'];
    const hit = banned.filter((b) => raw.indexOf(b) !== -1);
    return hit.length === 0 ? true
      : { ok: false, detail: '含不可证明字段：' + hit.join(', ') };
  });
  check('WEB-no-fake-claims', '文案不含「绝对安全 / 官方验证 / 100% 准确」等无法证明的宣称', () => {
    const bad = ['绝对安全', '官方验证', '官方认证', '100%准确', '100% 准确', '绝对可靠', '永不失效',
                 '银行级', '军事级', '已通过权威', '国家认证'];
    const hit = bad.filter((b) => pageSrc.indexOf(b) !== -1);
    return hit.length === 0 ? true : { ok: false, detail: '命中：' + hit.join(', ') };
  });
  check('WEB-md5-warning', '页面明确标注 MD5 不适用于安全校验', () => {
    return /MD5[^。]{0,60}(不(得|应|适用)|已.{0,10}碰撞|不安全)/.test(pageSrc)
      ? true : { ok: false, detail: '未找到 MD5 安全警示' };
  });
  check('WEB-no-upload-claim-guard', '若声明「不上传」，页面必须同时给出可自证方法', () => {
    if (pageSrc.indexOf('不上传') === -1) return { ok: false, detail: '未声明不上传' };
    return /(断网|离线|开发者工具|Network)/.test(pageSrc)
      ? true : { ok: false, detail: '声明了不上传但未给出自证方法' };
  });
}

/* ================================================================== *
 * 汇总（等待异步用例结束）
 * ================================================================== */
function summarize() {
  const total = results.length;
  const pass = results.filter((r) => r.ok).length;
  const fail = total - pass;
  const byGroup = {};
  for (const r of results) {
    byGroup[r.group] = byGroup[r.group] || { pass: 0, fail: 0 };
    byGroup[r.group][r.ok ? 'pass' : 'fail']++;
  }
  log('\n' + '='.repeat(72));
  for (const g of Object.keys(byGroup)) {
    log(`  ${byGroup[g].fail === 0 ? 'OK  ' : 'FAIL'}  ${byGroup[g].pass}/${byGroup[g].pass + byGroup[g].fail}  ${g}`);
  }
  log('='.repeat(72));
  log(`  TOTAL  ${pass}/${total} PASS   FAIL ${fail}`);

  const out = {
    generatedAt: new Date().toISOString(),
    node: process.version,
    platform: process.platform,
    arch: process.arch,
    quick: QUICK,
    total, pass, fail,
    verdict: fail === 0 ? 'ALL_PASS' : 'HAS_FAILURE',
    groups: byGroup,
    cases: results
  };
  const outPath = path.join(__dirname, 'last-run.json');
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8');
  log('  报告写入 ' + outPath);

  try { fs.rmSync(TMP, { recursive: true, force: true }); } catch (e) { /* 忽略清理失败 */ }
  process.exit(fail === 0 ? 0 : 1);
}

Promise.all(pending).then(summarize, (e) => {
  log('\n测试运行器异常：' + (e && e.stack ? e.stack : e));
  process.exit(2);
});
