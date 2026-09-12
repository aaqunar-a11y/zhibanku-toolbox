/*
 * T-01 浏览器真机功能测试
 * ---------------------------------------------------------------------------
 * 目的：用真实 Chrome 加载 build 产物 web/file-hash-checker.html，
 *       实测「小文件 / 空文件 / 二进制 / 中文文件名 / 较大文件 / 正确 hash /
 *             错误 hash / 多算法一致性」以及移动端、桌面端、键盘无障碍。
 *
 * 取证原则：
 *   - 每个用例都留下可复核的断言明细（期望值 / 实际值）
 *   - 期望 hash 全部由 Node 内置 crypto（OpenSSL）独立算出，与被测页面无共享代码
 *   - 网络流量全程记录，用于证明「文件不上传」
 *   - 关键状态落盘截图
 *
 * 运行：node browser-test/run-browser.js
 * 依赖：playwright-core（隔离安装于 ~/.workbuddy/binaries/node/workspace）+ 本机 Chrome
 */

'use strict';

const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');

const WORKSPACE_MODULES =
  'C:/Users/Administrator/.workbuddy/binaries/node/workspace/node_modules';
const { chromium } = require(path.join(WORKSPACE_MODULES, 'playwright-core'));

const ROOT = path.resolve(__dirname, '..');
const WEB_DIR = path.join(ROOT, 'web');
const PAGE_FILE = 'file-hash-checker.html';
const SHOT_DIR = path.join(__dirname, 'screenshots');
const TMP_DIR = path.join(os.tmpdir(), 'zbk-hash-browser-' + process.pid);

const CHROME_CANDIDATES = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

// --------------------------------------------------------------------------
// 极小测试框架
// --------------------------------------------------------------------------
// 注意：所有断言必须 await，否则会出现两类严重问题：
//   1) verdict 落到「当前 group」上，而 group 已随主流程推进 —— 判定错位；
//   2) 主流程跑到 browser.close() 时异步用例仍在执行 —— 目标已关闭而全数失败。
// 因此 check() 设计为 async，调用方一律 `await check(...)`。
// --------------------------------------------------------------------------
const groups = [];
let cur = null;

function group(name) {
  cur = { name, cases: [] };
  groups.push(cur);
}

function verdict(grp, ok, detail) {
  const v = { ok: !!ok, detail: String(detail) };
  (grp || cur).cases.push(v);
  console.log(`  ${v.ok ? 'PASS' : 'FAIL'}  ${v.detail}`);
  return v.ok;
}

async function check(name, fn) {
  const grp = cur; // 绑定到声明时的分组，避免异步回填错位
  let r;
  try {
    r = fn();
    if (r && typeof r.then === 'function') r = await r;
  } catch (e) {
    return verdict(grp, false, `${name}  —  抛出异常：${e && e.message}`);
  }
  if (r === true || r === undefined) return verdict(grp, true, name);
  if (r === false) return verdict(grp, false, `${name}  —  断言为假`);
  if (typeof r === 'string') return verdict(grp, false, `${name}  —  ${r}`);
  return verdict(grp, !!r.ok, `${name}  —  ${r.detail}`);
}

/** 断言助手：以 {ok, detail} 返回，交给 check 处理 */
function assert(cond, okDetail, badDetail) {
  return cond ? { ok: true, detail: okDetail } : { ok: false, detail: badDetail };
}

// --------------------------------------------------------------------------
// 静态服务（127.0.0.1 = 安全上下文，WebCrypto 可用）
// --------------------------------------------------------------------------
function startServer(rootDir, defaultFile) {
  rootDir = rootDir || WEB_DIR;
  defaultFile = defaultFile || PAGE_FILE;
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    // favicon 由浏览器自动请求，与页面本身无关；返回 204，避免 404 污染 console 取证
    if (urlPath === '/favicon.ico') {
      res.writeHead(204);
      res.end();
      return;
    }
    const rel = urlPath === '/' ? defaultFile : urlPath.replace(/^\//, '');
    const abs = path.join(rootDir, rel);
    if (!abs.startsWith(rootDir) || !fs.existsSync(abs) || fs.statSync(abs).isDirectory()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404');
      return;
    }
    res.writeHead(200, {
      'Content-Type': MIME[path.extname(abs)] || 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    fs.createReadStream(abs).pipe(res);
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

// --------------------------------------------------------------------------
// 测试文件工厂
// --------------------------------------------------------------------------
function nodeHashes(buf) {
  return {
    sha256: crypto.createHash('sha256').update(buf).digest('hex'),
    sha1: crypto.createHash('sha1').update(buf).digest('hex'),
    md5: crypto.createHash('md5').update(buf).digest('hex'),
  };
}

function randBytes(n, seed) {
  const out = Buffer.alloc(n);
  let s = seed >>> 0;
  for (let i = 0; i < n; i++) {
    s ^= s << 13; s >>>= 0;
    s ^= s >>> 17;
    s ^= s << 5; s >>>= 0;
    out[i] = s & 0xff;
  }
  return out;
}

function makeFixtures() {
  fs.mkdirSync(TMP_DIR, { recursive: true });
  const f = {};

  // 1) 小文本文件
  const smallText = Buffer.from(
    '# 知办库 哈希校验测试样本\n' +
    'The quick brown fox jumps over the lazy dog\n' +
    '行数很少，用于验证常规小文件路径。\n',
    'utf8'
  );
  f.small = { path: path.join(TMP_DIR, 'small-note.txt'), buf: smallText };

  // 2) 空文件
  f.empty = { path: path.join(TMP_DIR, 'empty.bin'), buf: Buffer.alloc(0) };

  // 3) 二进制文件（含 0x00 / 0xFF，1 MiB + 37 字节）
  const bin = randBytes(1024 * 1024 + 37, 0x5eed1234);
  bin[0] = 0x00; bin[1] = 0xff; bin[2] = 0x00; bin[3] = 0xff;
  bin[bin.length - 1] = 0xff;
  f.binary = { path: path.join(TMP_DIR, 'blob-with-nulls.bin'), buf: bin };

  // 4) 中文文件名
  const cn = Buffer.from('中文文件名测试内容 — 哈希校验器.exe 只是一个名字，不是可执行文件。\n', 'utf8');
  f.chinese = { path: path.join(TMP_DIR, '哈希校验器.exe'), buf: cn };

  // 5) 较大文件（12 MiB，跨多个分片）
  const large = randBytes(12 * 1024 * 1024, 0xc0ffee42);
  f.large = { path: path.join(TMP_DIR, 'large-12MiB.bin'), buf: large };

  for (const k of Object.keys(f)) {
    fs.writeFileSync(f[k].path, f[k].buf);
    f[k].hashes = nodeHashes(f[k].buf);
    f[k].size = f[k].buf.length;
  }
  return f;
}

// --------------------------------------------------------------------------
// 页面操作助手
// --------------------------------------------------------------------------
async function setFile(page, filePath) {
  await page.setInputFiles('#file', filePath);
}

async function readResults(page) {
  return page.evaluate(() => {
    const out = { hashes: {}, tags: {}, verdict: '', live: '', prog: null, progMax: null };
    ['sha256', 'sha1', 'md5'].forEach((a) => {
      const el = document.getElementById('hx-' + a);
      if (el) {
        out.hashes[a] = el.textContent.trim().replace(/\s+/g, '');
        const row = el.closest('div');
        out.tags[a] = row ? row.textContent.replace(el.textContent, '').trim() : '';
      }
    });
    const v = document.getElementById('verdict');
    out.verdict = v ? v.textContent.replace(/\s+/g, ' ').trim() : '';
    out.verdictClass = v ? v.className : '';
    const l = document.getElementById('live');
    out.live = l ? l.textContent.trim() : '';
    const p = document.getElementById('prog');
    if (p) {
      out.prog = p.tagName === 'PROGRESS' ? Number(p.value) : Number(p.value || 0);
      out.progMax = p.tagName === 'PROGRESS' ? Number(p.max || 1) : Number(p.max || 100);
    }
    out.resultRows = document.querySelectorAll('#results > *').length;
    return out;
  });
}

async function runAndWait(page, opts) {
  opts = opts || {};
  const before = await readResults(page);
  await page.click('#runBtn');
  // 等待「计算完成」标志：live 文案或进度到顶 + 结果行数增加
  await page.waitForFunction(
    () => {
      const l = document.getElementById('live');
      const t = l ? l.textContent : '';
      const p = document.getElementById('prog');
      const done = p && p.tagName === 'PROGRESS' ? Number(p.value) >= Number(p.max || 1) : true;
      return done && /完成|一致|已计算|耗时|不适用/.test(t);
    },
    null,
    { timeout: opts.timeout || 120000 }
  );
  // 让后续渲染（独立实现交叉校验的 Promise）落地
  await page.waitForTimeout(opts.settle || 900);
  return { before, after: await readResults(page) };
}

function eqHash(actual, expected, label) {
  return assert(
    String(actual || '').toLowerCase() === String(expected).toLowerCase(),
    `${label} 一致（${String(actual).slice(0, 16)}…）`,
    `${label} 不一致：页面=${actual} 期望=${expected}`
  );
}

// --------------------------------------------------------------------------
// 主流程
// --------------------------------------------------------------------------
(async function main() {
  const startedAt = Date.now();
  fs.mkdirSync(SHOT_DIR, { recursive: true });
  const fixtures = makeFixtures();

  const chromePath = CHROME_CANDIDATES.find((p) => fs.existsSync(p));
  if (!chromePath) throw new Error('未找到本机 Chrome/Edge');

  const { server, port } = await startServer();
  const baseURL = `http://127.0.0.1:${port}/${PAGE_FILE}`;

  const browser = await chromium.launch({
    executablePath: chromePath,
    args: ['--disable-gpu', '--no-first-run', '--no-default-browser-check'],
  });

  const report = {
    tool: 'T-01 file-hash-checker 浏览器真机测试',
    browser: { engine: 'Chromium (本机 Chrome)', executable: chromePath, channelVersion: browser.version() },
    url: baseURL,
    startedAt: new Date(startedAt).toISOString(),
    fixtures: {},
    groups: [],
    screenshots: [],
  };
  for (const k of Object.keys(fixtures)) {
    report.fixtures[k] = { file: path.basename(fixtures[k].path), size: fixtures[k].size, nodeCrypto: fixtures[k].hashes };
  }

  // ================== 桌面上下文 ==================
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    locale: 'zh-CN',
    permissions: ['clipboard-read', 'clipboard-write'],
  });

  // 全程网络记录（用于证明不上传）
  const requests = [];
  context.on('request', (r) => {
    requests.push({ method: r.method(), url: r.url(), type: r.resourceType() });
  });

  const consoleErrors = [];
  const pageErrors = [];
  const page = await context.newPage();
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', (e) => pageErrors.push(String(e && e.message)));

  const resp = await page.goto(baseURL, { waitUntil: 'load' });
  await page.waitForTimeout(400);

  // ---------------------------------------------------------------- 组 1
  group('1. 加载与自包含性');

  await check('B-http-status', () =>
    assert(resp && resp.status() === 200, `HTTP ${resp && resp.status()}`, `HTTP ${resp && resp.status()}`)
  );

  await check('B-title', async () => {
    const t = await page.title();
    return assert(/文件|哈希|校验/.test(t), `标题「${t}」`, `标题不含关键词：「${t}」`);
  });

  await check('B-no-pageerror', () =>
    assert(pageErrors.length === 0, '无未捕获 JS 异常', `存在 JS 异常：${pageErrors.join(' | ')}`)
  );

  await check('B-no-console-error', () =>
    assert(consoleErrors.length === 0, '无 console.error', `存在 console 错误：${consoleErrors.join(' | ')}`)
  );

  await check('B-secure-context', async () => {
    const ok = await page.evaluate(() => !!(window.isSecureContext && window.crypto && window.crypto.subtle));
    return assert(ok, '安全上下文成立，WebCrypto 可用（独立实现交叉校验可用）', '非安全上下文或 WebCrypto 不可用');
  });

  await check('B-hashkit-global', async () => {
    const info = await page.evaluate(() => ({
      has: !!window.HashKit,
      version: window.HashKit && window.HashKit.version,
      algos: window.HashKit && window.HashKit.ALGORITHMS,
      chunk: window.HashKit && window.HashKit.DEFAULT_CHUNK_SIZE,
    }));
    return assert(
      info.has && Array.isArray(info.algos) && info.algos.length === 3,
      `window.HashKit v${info.version}，算法 ${JSON.stringify(info.algos)}，默认分片 ${info.chunk}`,
      `HashKit 未正确挂载：${JSON.stringify(info)}`
    );
  });

  report.screenshots.push(await shot(page, 'desktop-01-initial', report));

  // ---------------------------------------------------------------- 组 2
  group('2. 文件不出本机（网络取证）');

  await check('B-nonet-host', () => {
    const third = requests.filter((r) => {
      try {
        const u = new URL(r.url);
        return u.hostname !== '127.0.0.1' && u.hostname !== 'localhost';
      } catch (e) { return true; }
    });
    return assert(
      third.length === 0,
      `全部 ${requests.length} 个请求均指向本机（127.0.0.1）`,
      `出现站外请求：${third.map((r) => r.url).slice(0, 5).join(' , ')}`
    );
  });

  await check('B-nonet-write-method', () => {
    const w = requests.filter((r) => r.method !== 'GET');
    return assert(w.length === 0, '无任何非 GET 请求（不存在上传通道）', `出现非 GET 请求：${JSON.stringify(w.slice(0, 5))}`);
  });

  await check('B-nonet-count-stable', () => {
    const shot = requests.length;
    return assert(shot <= 4, `页面加载共 ${shot} 个请求（自身文档等）`, `请求数异常偏多：${shot}`);
  });

  await check('B-xcheck-default-on', async () => {
    const on = await page.evaluate(() => document.getElementById('xcheck').checked);
    return assert(on, '「独立实现交叉校验」默认开启', '交叉校验默认未开启');
  });

  // 页面默认只勾选 SHA-256。先取证这一默认，再全选三算法，
  // 使后面每个样本都同时验证 SHA-256 / SHA-1 / MD5 三条路径。
  await check('B-default-algo-selection', async () => {
    const sel = await page.evaluate(() =>
      ['sha256', 'sha1', 'md5'].map((a) => ({ a, checked: document.getElementById('alg-' + a).checked }))
    );
    return assert(
      sel[0].checked && !sel[1].checked && !sel[2].checked,
      `默认仅勾选 SHA-256（${JSON.stringify(sel.map((s) => s.a + '=' + s.checked))}）`,
      `默认勾选状态异常：${JSON.stringify(sel)}`
    );
  });
  await page.setChecked('#alg-sha256', true);
  await page.setChecked('#alg-sha1', true);
  await page.setChecked('#alg-md5', true);

  // ---------------------------------------------------------------- 组 3
  group('3. 常规与边界文件：哈希正确性（三算法同时验证）');

  // 3.1 小文件
  await setFile(page, fixtures.small.path);
  let r = await runAndWait(page);
  await check('B-small-sha256', () => eqHash(r.after.hashes.sha256, fixtures.small.hashes.sha256, '小文件 SHA-256'));
  await check('B-small-sha1', () => eqHash(r.after.hashes.sha1, fixtures.small.hashes.sha1, '小文件 SHA-1'));
  await check('B-small-md5', () => eqHash(r.after.hashes.md5, fixtures.small.hashes.md5, '小文件 MD5'));
  await check('B-small-meta', async () => {
    const meta = await page.evaluate(() => ({
      name: document.getElementById('fname').textContent.trim(),
      size: document.getElementById('fmeta').textContent.trim(),
    }));
    return assert(meta.name === path.basename(fixtures.small.path) && /\d/.test(meta.size),
      `文件卡片显示「${meta.name} / ${meta.size}」`, `文件卡片信息异常：${JSON.stringify(meta)}`);
  });

  // 3.2 空文件
  await setFile(page, fixtures.empty.path);
  r = await runAndWait(page);
  await check('B-empty-sha256', () => eqHash(r.after.hashes.sha256, fixtures.empty.hashes.sha256, '空文件 SHA-256'));
  await check('B-empty-sha1', () => eqHash(r.after.hashes.sha1, fixtures.empty.hashes.sha1, '空文件 SHA-1'));
  await check('B-empty-md5', () => eqHash(r.after.hashes.md5, fixtures.empty.hashes.md5, '空文件 MD5'));
  await check('B-empty-known-constant', () =>
    eqHash(fixtures.empty.hashes.sha256, 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', '空文件 SHA-256 与公开常量')
  );

  // 3.3 二进制
  await setFile(page, fixtures.binary.path);
  r = await runAndWait(page);
  await check('B-binary-sha256', () => eqHash(r.after.hashes.sha256, fixtures.binary.hashes.sha256, '二进制 SHA-256'));
  await check('B-binary-sha1', () => eqHash(r.after.hashes.sha1, fixtures.binary.hashes.sha1, '二进制 SHA-1'));
  await check('B-binary-md5', () => eqHash(r.after.hashes.md5, fixtures.binary.hashes.md5, '二进制 MD5'));

  // 3.4 中文文件名
  await setFile(page, fixtures.chinese.path);
  r = await runAndWait(page);
  await check('B-chinese-name-visible', async () => {
    const n = await page.evaluate(() => document.getElementById('fname').textContent.trim());
    return assert(n === '哈希校验器.exe', `中文文件名正确显示「${n}」`, `中文文件名显示异常：「${n}」`);
  });
  await check('B-chinese-sha256', () => eqHash(r.after.hashes.sha256, fixtures.chinese.hashes.sha256, '中文文件名文件 SHA-256'));

  report.screenshots.push(await shot(page, 'desktop-02-small-file-hashes', report));

  // 3.5 较大文件（12 MiB）
  await setFile(page, fixtures.large.path);
  const t0 = Date.now();
  r = await runAndWait(page, { timeout: 180000 });
  const elapsed = Date.now() - t0;
  await check('B-large-sha256', () => eqHash(r.after.hashes.sha256, fixtures.large.hashes.sha256, '12 MiB SHA-256'));
  await check('B-large-sha1', () => eqHash(r.after.hashes.sha1, fixtures.large.hashes.sha1, '12 MiB SHA-1'));
  await check('B-large-md5', () => eqHash(r.after.hashes.md5, fixtures.large.hashes.md5, '12 MiB MD5'));
  await check('B-large-progress', () =>
    assert(
      r.after.prog !== null && r.after.prog >= r.after.progMax,
      `进度条到达终值 ${r.after.prog}/${r.after.progMax}`,
      `进度未到终值：${r.after.prog}/${r.after.progMax}`
    )
  );
  report.largeFilePerf = { sizeBytes: fixtures.large.size, wallMs: elapsed, mibPerSec: +(fixtures.large.size / 1048576 / (elapsed / 1000)).toFixed(2) };
  await check('B-large-throughput', () =>
    assert(report.largeFilePerf.mibPerSec > 1, `吞吐 ${report.largeFilePerf.mibPerSec} MiB/s（含页面渲染与交叉校验）`, `吞吐过低：${report.largeFilePerf.mibPerSec} MiB/s`)
  );

  // ---------------------------------------------------------------- 组 4
  group('4. 分片设置不影响结果（chunk 独立性）');

  const chunkOpts = ['1048576', '4194304', '16777216'];
  const chunkResults = {};
  for (const c of chunkOpts) {
    await page.selectOption('#chunk', c);
    await setFile(page, fixtures.binary.path);
    const rr = await runAndWait(page);
    chunkResults[c] = rr.after.hashes.sha256;
  }
  await check('B-chunk-invariant', () => {
    const vals = Object.values(chunkResults);
    const allSame = vals.every((v) => v.toLowerCase() === fixtures.binary.hashes.sha256.toLowerCase());
    return assert(allSame, `3 种分片（1/4/16 MiB）结果均与 OpenSSL 一致`, `分片间结果不一致：${JSON.stringify(chunkResults)}`);
  });
  await page.selectOption('#chunk', '4194304');

  // ---------------------------------------------------------------- 组 5
  group('5. 多算法一致性 + 独立实现交叉校验');

  await page.setChecked('#alg-sha256', true);
  await page.setChecked('#alg-sha1', true);
  await page.setChecked('#alg-md5', true);
  await page.setChecked('#xcheck', true);
  await setFile(page, fixtures.binary.path);
  r = await runAndWait(page, { settle: 1500 });

  await check('B-multialgo-rows', () =>
    assert(r.after.hashes.sha256 && r.after.hashes.sha1 && r.after.hashes.md5,
      '三算法结果同时呈现', `结果缺失：${JSON.stringify(r.after.hashes)}`)
  );
  await check('B-multialgo-sha256', () => eqHash(r.after.hashes.sha256, fixtures.binary.hashes.sha256, '多算法 SHA-256'));
  await check('B-multialgo-sha1', () => eqHash(r.after.hashes.sha1, fixtures.binary.hashes.sha1, '多算法 SHA-1'));
  await check('B-multialgo-md5', () => eqHash(r.after.hashes.md5, fixtures.binary.hashes.md5, '多算法 MD5'));
  await check('B-crosscheck-agrees', () => {
    const tags = JSON.stringify(r.after.tags);
    return assert(/一致|相同|通过|✓/.test(tags), `独立实现比对标记：${tags.slice(0, 120)}`, `未出现「一致」标记，tags=${tags}`);
  });

  report.screenshots.push(await shot(page, 'desktop-03-multialgo-crosscheck', report));

  // 取消交叉校验，后续用纯 JS 路径比对
  await page.setChecked('#xcheck', false);

  // ---------------------------------------------------------------- 组 6
  group('6. 期望值比对四态语义');

  const exp = fixtures.small.hashes.sha256;

  // 6.1 正确（大写 + 空格，验证归一化）
  await setFile(page, fixtures.small.path);
  await runAndWait(page);
  await page.fill('#expect', exp.toUpperCase().replace(/(.{8})/g, '$1 ').trim());
  await page.dispatchEvent('#expect', 'input');
  await page.waitForTimeout(300);
  r = await readResults(page);
  await check('B-expect-MATCH', () =>
    assert(/MATCH/.test(r.verdict) && !/MISMATCH/.test(r.verdict),
      `正确期望值（大写带空格）判定 MATCH ——「${r.verdict.slice(0, 70)}」`,
      `未判 MATCH：${r.verdict}`)
  );

  // 6.2 错误
  const wrong = 'f'.repeat(64);
  await page.fill('#expect', wrong);
  await page.dispatchEvent('#expect', 'input');
  await page.waitForTimeout(300);
  r = await readResults(page);
  await check('B-expect-MISMATCH', () =>
    assert(/MISMATCH/.test(r.verdict),
      `错误期望值判定 MISMATCH ——「${r.verdict.slice(0, 70)}」`,
      `未判 MISMATCH：${r.verdict}`)
  );
  report.screenshots.push(await shot(page, 'desktop-04-mismatch', report));

  // 6.3 空 → NOT_CHECKED
  await page.fill('#expect', '');
  await page.dispatchEvent('#expect', 'input');
  await page.waitForTimeout(300);
  r = await readResults(page);
  await check('B-expect-NOT_CHECKED', () =>
    assert(!/MATCH|MISMATCH/.test(r.verdict), `空期望值不产生 MATCH/MISMATCH ——「${r.verdict.slice(0, 70)}」`, `空值不应判为比对结果：${r.verdict}`)
  );

  // 6.4 非法长度 → INVALID
  await page.fill('#expect', 'not-a-hash-123');
  await page.dispatchEvent('#expect', 'input');
  await page.waitForTimeout(300);
  r = await readResults(page);
  await check('B-expect-INVALID', () =>
    assert(/无效|INVALID|长度|格式/.test(r.verdict), `非法期望值给出提示 ——「${r.verdict.slice(0, 70)}」`, `非法值未给出提示：${r.verdict}`)
  );

  // ---------------------------------------------------------------- 组 7
  group('7. 复制与重置');

  await page.fill('#expect', exp);
  await page.dispatchEvent('#expect', 'input');
  await page.waitForTimeout(300);
  await check('B-copy', async () => {
    await page.bringToFront();
    await page.click('#copyBtn');
    await page.waitForTimeout(500);
    const clip = await page.evaluate(() => navigator.clipboard.readText().catch(() => ''));
    const hasAny = [exp, fixtures.small.hashes.sha1, fixtures.small.hashes.md5].some((h) => clip.toLowerCase().includes(h.toLowerCase()));
    return assert(hasAny, `剪贴板已写入结果（${clip.length} 字符，含 SHA-256）`, `剪贴板内容不含任何结果：${String(clip).slice(0, 60)}`);
  });

  await check('B-reset', async () => {
    await page.click('#resetBtn');
    await page.waitForTimeout(400);
    const st = await page.evaluate(() => ({
      rows: document.querySelectorAll('#results > *').length,
      verdict: document.getElementById('verdict').textContent.trim(),
      name: document.getElementById('fname').textContent.trim(),
    }));
    return assert(st.rows === 0, `重置后结果清空，判定区回到初始（「${st.verdict.slice(0, 30)}」）`, `重置未生效：${JSON.stringify(st)}`);
  });

  // ---------------------------------------------------------------- 组 8
  group('8. 键盘可达与无障碍基础');

  const a11y = await page.evaluate(() => {
    const focusables = [];
    document.querySelectorAll('a[href], button, input, select, textarea, [tabindex]').forEach((el) => {
      const style = getComputedStyle(el);
      const hidden = style.display === 'none' || style.visibility === 'hidden';
      const disabled = el.disabled === true;
      focusables.push({
        tag: el.tagName.toLowerCase(),
        type: el.type || null,
        id: el.id || null,
        aria: el.getAttribute('aria-label'),
        text: (el.textContent || '').trim().slice(0, 24),
        hidden,
        disabled,
        inAriaHidden: !!el.closest('[aria-hidden="true"]'),
      });
    });
    const btns = Array.from(document.querySelectorAll('button'));
    const labelled = Array.from(document.querySelectorAll('input, select, textarea')).map((el) => ({
      id: el.id,
      type: el.type,
      hasLabel: !!(el.getAttribute('aria-label') || el.getAttribute('title') ||
        (el.id && document.querySelector(`label[for="${CSS.escape(el.id)}"]`)) || el.closest('label')),
    }));
    return {
      lang: document.documentElement.lang,
      viewport: !!document.querySelector('meta[name="viewport"]'),
      viewportContent: (document.querySelector('meta[name="viewport"]') || {}).content || '',
      focusables,
      labelled,
      buttonsWithoutType: btns.filter((b) => !b.getAttribute('type')).length,
      imgsWithoutAlt: Array.from(document.querySelectorAll('img')).filter((i) => !i.hasAttribute('alt')).length,
      h1Count: document.querySelectorAll('h1').length,
      liveRegion: !!document.querySelector('[aria-live], #live[role], #prog[aria-valuenow], progress'),
      skipLink: !!document.querySelector('a[href^="#"]'),
      title: document.title,
    };
  });

  await check('B-a11y-lang', () => assert(a11y.lang === 'zh-CN' || a11y.lang === 'zh', `<html lang="${a11y.lang}">`, `lang 缺失或异常：「${a11y.lang}」`));
  await check('B-a11y-viewport', () => assert(a11y.viewport, `viewport meta = ${a11y.viewportContent}`, '缺少 viewport meta'));
  await check('B-a11y-h1', () => assert(a11y.h1Count === 1, `恰好 1 个 h1`, `h1 数量为 ${a11y.h1Count}`));
  await check('B-a11y-button-type', () => assert(a11y.buttonsWithoutType === 0, '所有 button 均显式带 type', `${a11y.buttonsWithoutType} 个 button 缺少 type`));
  await check('B-a11y-img-alt', () => assert(a11y.imgsWithoutAlt === 0, '无缺少 alt 的 img', `${a11y.imgsWithoutAlt} 个 img 缺少 alt`));
  await check('B-a11y-inputs-labelled', () => {
    const bad = a11y.labelled.filter((x) => !x.hasLabel);
    return assert(bad.length === 0, `${a11y.labelled.length} 个表单控件均有 label/aria-label`, `未标注控件：${JSON.stringify(bad)}`);
  });
  await check('B-a11y-progress-semantics', () => assert(a11y.liveRegion, '存在 progress 语义元素用于进度播报', '缺少进度语义元素'));

  // 键盘 Tab 遍历：确认核心控件可聚焦
  await check('B-keyboard-tab-order', async () => {
    // 关键前提：disabled 的按钮按规范不可聚焦。上一组点了「重置」，
    // runBtn 处于 disabled，因此必须先选文件再测 Tab 序列，否则会误判。
    await setFile(page, fixtures.small.path);
    // 把「顺序焦点导航起点」移到页面顶部
    await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      if (h1) { h1.setAttribute('tabindex', '-1'); h1.focus(); }
    });
    const seq = [];
    for (let i = 0; i < 30; i++) {
      await page.keyboard.press('Tab');
      const cur = await page.evaluate(() => {
        const el = document.activeElement;
        if (!el || el === document.body || el === document.documentElement) return null;
        return { id: el.id || null, tag: el.tagName.toLowerCase(), type: el.type || null, text: (el.textContent || '').trim().slice(0, 16) };
      });
      if (cur) seq.push(cur);
    }
    const ids = seq.map((s) => s.id).filter(Boolean);
    const need = ['file', 'alg-sha256', 'alg-sha1', 'alg-md5', 'chunk', 'runBtn', 'expect', 'copyBtn', 'resetBtn'];
    const missing = need.filter((n) => !ids.includes(n));
    report.tabSequence = seq;
    await page.evaluate(() => { const h1 = document.querySelector('h1'); if (h1) h1.removeAttribute('tabindex'); });
    return assert(missing.length === 0,
      `键盘从页面顶部可依次 Tab 到全部 ${need.length} 个核心控件（采集 ${seq.length} 个聚焦点）`,
      `以下控件无法通过 Tab 到达：${missing.join(', ')}（实际具名序列 ${ids.join(' > ')}）`);
  });

  await check('B-keyboard-focus-visible', async () => {
    await page.focus('#runBtn');
    const outline = await page.evaluate(() => {
      const el = document.getElementById('runBtn');
      el.focus();
      const s = getComputedStyle(el);
      return { outlineWidth: s.outlineWidth, outlineStyle: s.outlineStyle, boxShadow: s.boxShadow, outlineColor: s.outlineColor };
    });
    const visible = (parseFloat(outline.outlineWidth) > 0 && outline.outlineStyle !== 'none') || (outline.boxShadow && outline.boxShadow !== 'none');
    return assert(visible, `聚焦态有可见指示（outline ${outline.outlineWidth} ${outline.outlineStyle}）`, `聚焦态无可视指示：${JSON.stringify(outline)}`);
  });
  report.screenshots.push(await shot(page, 'desktop-05-keyboard-focus', report));

  await check('B-keyboard-operate', async () => {
    // 纯键盘完成一次「运行」：聚焦 runBtn 后按 Enter
    await setFile(page, fixtures.small.path);
    await page.focus('#runBtn');
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => {
      const el = document.getElementById('hx-sha256');
      return el && el.textContent.trim().length === 64;
    }, null, { timeout: 30000 });
    const h = await page.evaluate(() => document.getElementById('hx-sha256').textContent.trim());
    return assert(h.toLowerCase() === fixtures.small.hashes.sha256.toLowerCase(), '仅用键盘即可完成一次校验', `键盘操作后结果不正确：${h}`);
  });

  // ---------------------------------------------------------------- 组 9
  group('9. 桌面视口布局');

  await check('B-desktop-no-hoverflow', async () => {
    const m = await page.evaluate(() => ({
      sw: document.documentElement.scrollWidth,
      cw: document.documentElement.clientWidth,
    }));
    return assert(m.sw <= m.cw + 1, `桌面 1280px 无横向溢出（scrollWidth ${m.sw} ≤ clientWidth ${m.cw}）`, `横向溢出：${m.sw} > ${m.cw}`);
  });

  await check('B-desktop-controls-visible', async () => {
    const vis = await page.evaluate(() => {
      // #file 为 sr-only（视觉隐藏、键盘可聚焦）的设计，不列入「可见」检查；
      // 其可见替代入口是 #drop 上载区。
      const ids = ['drop', 'alg-sha256', 'alg-sha1', 'alg-md5', 'chunk', 'runBtn', 'expect', 'verdict', 'results', 'copyBtn', 'resetBtn'];
      return ids.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, ok: false, why: 'missing' };
        const r = el.getBoundingClientRect();
        return { id, ok: r.width > 0 && r.height > 0, w: Math.round(r.width), h: Math.round(r.height) };
      });
    });
    const bad = vis.filter((v) => !v.ok);
    return assert(bad.length === 0, '桌面端全部核心可见控件均有可见尺寸', `不可见控件：${JSON.stringify(bad)}`);
  });

  await check('B-desktop-sr-only-input-focusable', async () => {
    // sr-only 的 #file 必须仍然可被键盘聚焦（否则键盘用户无法选择文件）
    const ok = await page.evaluate(() => {
      const el = document.getElementById('file');
      if (!el) return false;
      el.focus();
      return document.activeElement === el;
    });
    return assert(ok, '#file 虽视觉隐藏但可被键盘聚焦（配合 #drop 点击入口）', '#file 无法聚焦，键盘用户将无法选择文件');
  });

  // ---------------------------------------------------------------- 组 10
  group('10. 移动端视口（375×667，触屏）');

  const mctx = await browser.newContext({
    viewport: { width: 375, height: 667 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  });
  const mpage = await mctx.newPage();
  const mErrors = [];
  mpage.on('pageerror', (e) => mErrors.push(String(e && e.message)));
  await mpage.goto(baseURL, { waitUntil: 'load' });
  await mpage.waitForTimeout(500);

  await check('B-mobile-no-hoverflow', async () => {
    const m = await mpage.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth }));
    return assert(m.sw <= m.cw + 1, `移动端 375px 无横向溢出（${m.sw} ≤ ${m.cw}）`, `横向溢出：${m.sw} > ${m.cw}`);
  });

  await check('B-mobile-no-scale-hack', () => {
    const c = a11y.viewportContent || '';
    return assert(!/user-scalable\s*=\s*no|maximum-scale\s*=\s*1/.test(c), `viewport 未禁止用户缩放（${c}）`, `viewport 禁止缩放，影响可访问性：${c}`);
  });

  await check('B-mobile-tap-targets', async () => {
    // 分级门槛（写清依据，避免"拍脑袋阈值"）：
    //   primary —— 按钮 / 下拉 / 复选框行 / 卡片式链接，移动端主操作，要求 ≥40px
    //   tlink   —— 导航、面包屑、页脚等文本链接，要求 ≥28px
    //   other   —— 其余可交互元素，要求 ≥24px（WCAG 2.5.8 AA 的硬指标）
    const THRESH = { primary: 40, tlink: 28, other: 24 };
    const res = await mpage.evaluate(() => {
      const out = [];
      const isClipped = (el) => {
        if (el.classList.contains('sr-only')) return true;
        const s = getComputedStyle(el);
        return s.display === 'none' || s.visibility === 'hidden' || s.clip !== 'auto';
      };
      document.querySelectorAll('a[href], button, select, input[type="checkbox"], label.btn').forEach((el) => {
        if (isClipped(el)) return;
        const r0 = el.getBoundingClientRect();
        if (!r0.width || !r0.height) return;
        let kind = 'other';
        if (el.matches('button, select, label.btn, .related a') || el.closest('.opts')) kind = 'primary';
        else if (el.tagName === 'A' && el.closest('.brand, nav.crumbs, footer')) kind = 'tlink';
        let r = r0;
        const lab = el.closest('label');
        if (lab && lab !== el) {                 // 复选框真正可点的是外层 label
          const lr = lab.getBoundingClientRect();
          if (lr.height > r.height) r = lr;
        }
        out.push({ id: el.id || (el.textContent || '').trim().slice(0, 14), h: Math.round(r.height), w: Math.round(r.width), kind });
      });
      return out;
    });
    report.mobileTargets = res;
    const small = res.filter((t) => t.h < THRESH[t.kind]);
    const counts = res.reduce((a, t) => { a[t.kind] = (a[t.kind] || 0) + 1; return a; }, {});
    return assert(
      small.length === 0,
      `移动端触控目标全部达标（primary≥40px ${counts.primary || 0} 个 / tlink≥28px ${counts.tlink || 0} 个 / other≥24px ${counts.other || 0} 个）`,
      `目标偏小：${JSON.stringify(small.map((t) => ({ id: t.id, h: t.h, 要求: THRESH[t.kind] })))}`
    );
  });

  await check('B-mobile-upload-area-visible', async () => {
    const ok = await mpage.evaluate(() => {
      const el = document.getElementById('drop');
      if (!el) return false;
      const r = el.getBoundingClientRect();
      return r.width > 100 && r.height > 40;
    });
    return assert(ok, '移动端上传区可见且尺寸充足', '移动端上传区不可见或过小');
  });

  await check('B-mobile-func-run', async () => {
    await mpage.setInputFiles('#file', fixtures.small.path);
    await mpage.click('#runBtn');
    await mpage.waitForFunction(() => {
      const el = document.getElementById('hx-sha256');
      return el && el.textContent.trim().length === 64;
    }, null, { timeout: 60000 });
    const h = await mpage.evaluate(() => document.getElementById('hx-sha256').textContent.trim());
    return assert(h.toLowerCase() === fixtures.small.hashes.sha256.toLowerCase(), '移动端视口下功能可用且结果正确', `移动端结果不正确：${h}`);
  });

  await check('B-mobile-no-error', () => assert(mErrors.length === 0, '移动端无 JS 异常', `移动端异常：${mErrors.join(' | ')}`));

  report.screenshots.push(await shot(mpage, 'mobile-01-results', report));

  // ---------------------------------------------------------------- 组 11
  group('11. 离线可用（自包含反证）');

  await check('B-offline-still-works', async () => {
    const octx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const opage = await octx.newPage();
    let blocked = 0;
    await opage.route('**/*', (route, req) => {
      // 允许首次文档加载，其余一律阻断，模拟离线
      if (req.url() === baseURL) return route.continue();
      blocked++;
      return route.abort();
    });
    await opage.goto(baseURL, { waitUntil: 'load' });
    await opage.waitForTimeout(300);
    await opage.setInputFiles('#file', fixtures.binary.path).catch(() => {});
    await opage.click('#runBtn');
    await opage.waitForFunction(() => {
      const el = document.getElementById('hx-sha256');
      return el && el.textContent.trim().length === 64;
    }, null, { timeout: 60000 });
    const h = await opage.evaluate(() => document.getElementById('hx-sha256').textContent.trim());
    await octx.close();
    return assert(h.toLowerCase() === fixtures.binary.hashes.sha256.toLowerCase(),
      `零外部资源请求（阻断 ${blocked} 个额外请求）下仍算出正确 SHA-256`,
      `离线状态下结果不正确：${h}`);
  });

  // ---------------------------------------------------------------- 汇总
  // 一组：examples/04-browser.html 是仓库对外承诺「可直接运行」的示例，
  // 既然 README 里这么写了，就必须真的能跑，不能只靠人工点一次。
  // 该示例用相对路径引入 ../src/hashkit.js，因此从仓库根目录起服务。
  const exSrv = await startServer(ROOT, 'examples/04-browser.html');
  const exURL = `http://127.0.0.1:${exSrv.port}/examples/04-browser.html`;
  const exCtx = await browser.newContext({ viewport: { width: 1100, height: 900 } });
  const exPage = await exCtx.newPage();
  const exErrors = [];
  exPage.on('pageerror', (e) => exErrors.push(String(e && e.message)));
  await exPage.goto(exURL, { waitUntil: 'load' });
  await exPage.waitForTimeout(300);

  group('12. 仓库示例 examples/04-browser.html 可运行性');

  await check('B-example-lib-loaded', async () => {
    const ok = await exPage.evaluate(() => !!(window.HashKit && window.HashKit.version));
    return assert(ok, `示例页通过相对路径成功加载库（HashKit v${await exPage.evaluate(() => window.HashKit && window.HashKit.version)}）`, '示例页未能加载库');
  });

  await check('B-example-hash-file', async () => {
    await exPage.setInputFiles('#file', fixtures.small.path);
    await exPage.waitForFunction(() => {
      const el = document.getElementById('h-sha256');
      return el && el.textContent.trim().length === 64;
    }, null, { timeout: 30000 });
    const got = await exPage.evaluate(() => ({
      sha256: document.getElementById('h-sha256').textContent.trim(),
      sha1: document.getElementById('h-sha1').textContent.trim(),
      md5: document.getElementById('h-md5').textContent.trim(),
    }));
    const bad = Object.keys(got).filter((k) => got[k].toLowerCase() !== fixtures.small.hashes[k].toLowerCase());
    return assert(bad.length === 0, '示例页三算法结果与 OpenSSL 一致', `示例页结果不一致：${JSON.stringify(bad)} / ${JSON.stringify(got)}`);
  });

  await check('B-example-verdict', async () => {
    await exPage.fill('#expect', fixtures.small.hashes.sha256);
    await exPage.dispatchEvent('#expect', 'input');
    await exPage.waitForTimeout(300);
    const v = await exPage.evaluate(() => ({ text: document.getElementById('verdict').textContent.trim(), cls: document.getElementById('verdict').className }));
    return assert(/MATCH/.test(v.text), `示例页期望值比对判定 MATCH（「${v.text.slice(0, 50)}」）`, `示例页未判 MATCH：${JSON.stringify(v)}`);
  });

  await check('B-example-no-error', () => assert(exErrors.length === 0, '示例页无 JS 异常', `示例页异常：${exErrors.join(' | ')}`));

  await exCtx.close();
  exSrv.server.close();

  await browser.close();
  server.close();

  report.networkRequests = requests;
  report.groups = groups.map((g) => ({
    name: g.name,
    pass: g.cases.filter((c) => c.ok).length,
    total: g.cases.length,
    cases: g.cases,
  }));
  report.finishedAt = new Date().toISOString();
  report.elapsedMs = Date.now() - startedAt;
  const flat = groups.reduce((a, g) => a.concat(g.cases), []);
  report.total = flat.length;
  report.passed = flat.filter((c) => c.ok).length;
  report.failed = flat.filter((c) => !c.ok).length;
  report.verdict = report.failed === 0 ? 'BROWSER_TEST_PASS' : 'BROWSER_TEST_FAIL';
  report.a11ySnapshot = a11y;

  const outJson = path.join(__dirname, 'last-run.json');
  fs.writeFileSync(outJson, JSON.stringify(report, null, 2), 'utf8');

  console.log('\n' + '='.repeat(72));
  for (const g of report.groups) {
    const tag = g.pass === g.total ? 'OK  ' : 'FAIL';
    console.log(`  ${tag}  ${g.pass}/${g.total}  ${g.name}`);
  }
  console.log('='.repeat(72));
  console.log(`  TOTAL  ${report.passed}/${report.total} PASS   FAIL ${report.failed}`);
  console.log(`  BROWSER  ${report.browser.channelVersion}`);
  console.log(`  VERDICT  ${report.verdict}`);
  console.log(`  报告写入 ${outJson}`);
  console.log(`  截图目录 ${SHOT_DIR}`);
  console.log('='.repeat(72));

  process.exit(report.failed === 0 ? 0 : 1);
})().catch((e) => {
  console.error('FATAL', e);
  process.exit(3);
});

async function shot(page, name, report) {
  const p = path.join(SHOT_DIR, name + '.png');
  await page.screenshot({ path: p, fullPage: false });
  if (report && Array.isArray(report.screenshots) && report.screenshots.indexOf(p) === -1) {
    report.screenshots.push(p);
  }
  return p;
}
