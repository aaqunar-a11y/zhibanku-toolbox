#!/usr/bin/env node
/**
 * hashkit-cli.js — 用 hashkit 校验本地文件哈希
 *
 *   node cli/hashkit-cli.js <文件> [选项]
 *
 * 选项
 *   -a, --algo <sha256|sha1|md5|all>   要计算的算法（默认 sha256）
 *   -e, --expect <十六进制>            期望哈希；按长度自动识别算法
 *   -c, --chunk <字节>                 读取分片大小（默认 4194304）
 *   -j, --json                         输出机器可读 JSON
 *   -q, --quiet                        只输出哈希值本身（便于脚本取值）
 *   -h, --help                         显示帮助
 *
 * 退出码
 *   0  计算成功（若给了 --expect，则同时表示 MATCH）
 *   1  与 --expect 不一致（MISMATCH）
 *   2  用法错误 / 文件不可读
 *
 * 本 CLI 使用流式读取，内存占用与文件大小无关。
 */
'use strict';

const fs = require('fs');
const path = require('path');
const HashKit = require(path.join(__dirname, '..', 'src', 'hashkit.js'));

const USAGE = [
  '用法：node cli/hashkit-cli.js <文件> [选项]',
  '',
  '选项：',
  '  -a, --algo <sha256|sha1|md5|all>  要计算的算法（默认 sha256）',
  '  -e, --expect <十六进制>           期望哈希，按长度自动识别算法（32=MD5 / 40=SHA-1 / 64=SHA-256）',
  '  -c, --chunk <字节>                读取分片大小（默认 4194304）',
  '  -j, --json                        输出机器可读 JSON',
  '  -q, --quiet                       只输出哈希值本身',
  '  -h, --help                        显示本帮助',
  '',
  '示例：',
  '  node cli/hashkit-cli.js setup.exe',
  '  node cli/hashkit-cli.js setup.exe -a all',
  '  node cli/hashkit-cli.js setup.exe --expect ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
  '',
  '退出码：0 成功/MATCH，1 MISMATCH，2 用法或读取错误'
].join('\n');

function fail(msg, code) {
  process.stderr.write('错误：' + msg + '\n');
  process.exit(code == null ? 2 : code);
}

function parseArgs(argv) {
  const opts = { algos: null, expect: null, chunk: HashKit.DEFAULT_CHUNK_SIZE, json: false, quiet: false, files: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '-h' || a === '--help') { process.stdout.write(USAGE + '\n'); process.exit(0); }
    else if (a === '-a' || a === '--algo') {
      const v = argv[++i];
      if (!v) fail('--algo 需要一个值');
      if (v === 'all') opts.algos = HashKit.ALGORITHMS.slice();
      else {
        const n = String(v).toLowerCase().replace('-', '');
        if (HashKit.ALGORITHMS.indexOf(n) === -1) {
          fail('不支持的算法 "' + v + '"（可用：sha256 / sha1 / md5 / all）');
        }
        opts.algos = [n];
      }
    } else if (a === '-e' || a === '--expect') {
      const v = argv[++i];
      if (v == null) fail('--expect 需要一个值');
      opts.expect = v;
    } else if (a === '-c' || a === '--chunk') {
      const v = parseInt(argv[++i], 10);
      if (!(v > 0)) fail('--chunk 需要正整数');
      opts.chunk = v;
    } else if (a === '-j' || a === '--json') opts.json = true;
    else if (a === '-q' || a === '--quiet') opts.quiet = true;
    else if (a === '--') { for (i++; i < argv.length; i++) opts.files.push(argv[i]); }
    else if (a.charAt(0) === '-' && a !== '-') fail('未知选项 ' + a);
    else opts.files.push(a);
  }
  return opts;
}

/** 流式计算单个文件（内存 O(chunk)） */
function hashFileStream(file, algos, chunkSize) {
  return new Promise((resolve, reject) => {
    const hashers = algos.map((a) => HashKit.createHasher(a));
    let bytes = 0;
    let chunks = 0;
    const t0 = Date.now();
    const rs = fs.createReadStream(file, { highWaterMark: chunkSize });
    rs.on('error', reject);
    rs.on('data', (buf) => {
      const u8 = new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
      for (const h of hashers) h.update(u8);
      bytes += buf.length;
      chunks++;
    });
    rs.on('end', () => {
      const hashes = {};
      algos.forEach((a, i) => { hashes[a] = HashKit.toHex(hashers[i].digestBytes()); });
      resolve({ bytes, chunks, ms: Date.now() - t0, hashes });
    });
  });
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.files.length === 0) {
    process.stderr.write(USAGE + '\n');
    process.exit(2);
  }

  // --expect 存在时，按长度补上需要计算的算法，避免"期望 SHA-1 却只算了 SHA-256"
  let algos = opts.algos;
  let expectedAlgo = null;
  if (opts.expect) {
    expectedAlgo = HashKit.detectAlgorithm(opts.expect);
    if (!expectedAlgo) {
      fail('--expect 值长度不是 32 / 40 / 64 位十六进制，无法识别算法');
    }
    if (!algos) algos = ['sha256'];
    if (algos.indexOf(expectedAlgo) === -1) algos = algos.concat([expectedAlgo]);
  }
  if (!algos) algos = ['sha256'];

  const outputs = [];
  let anyMismatch = false;

  for (const f of opts.files) {
    const abs = path.resolve(f);
    let stat;
    try {
      stat = fs.statSync(abs);
    } catch (e) {
      fail('文件不存在或无法读取：' + f + '（' + (e.code || e.message) + '）');
    }
    if (!stat.isFile()) fail('不是普通文件：' + f);

    const r = await hashFileStream(abs, algos, opts.chunk);
    const cmp = opts.expect
      ? HashKit.compare(r.hashes, opts.expect)
      : { status: 'NOT_CHECKED', algorithm: null, expected: '', actual: null, note: '未提供期望哈希' };
    if (cmp.status === 'MISMATCH') anyMismatch = true;

    outputs.push({ file: abs, size: stat.size, ...r, comparison: cmp });

    if (opts.json) continue;
    if (opts.quiet) {
      const pick = cmp.algorithm || (opts.algos && opts.algos.length === 1 ? opts.algos[0] : 'sha256');
      process.stdout.write((r.hashes[pick] || Object.values(r.hashes)[0]) + '\n');
      continue;
    }
    const out = [];
    out.push(abs);
    out.push('  size      ' + stat.size.toLocaleString('en-US') + ' bytes');
    for (const a of algos) {
      const label = { sha256: 'SHA-256', sha1: 'SHA-1  ', md5: 'MD5    ' }[a] || a;
      out.push('  ' + label + '  ' + r.hashes[a]);
    }
    if (opts.expect) {
      out.push('  ' + cmp.status + (cmp.algorithm ? '    expected ' + cmp.algorithm + ' ' + cmp.expected : ''));
      if (cmp.status === 'MISMATCH') out.push('  actual    ' + cmp.actual);
    }
    process.stdout.write(out.join('\n') + '\n');
  }

  if (opts.json) {
    process.stdout.write(JSON.stringify({
      tool: 'hashkit-cli', version: HashKit.version, algorithms: algos, files: outputs
    }, null, 2) + '\n');
  }

  process.exit(anyMismatch ? 1 : 0);
}

main().catch((e) => fail(e && e.stack ? e.stack : String(e), 2));
