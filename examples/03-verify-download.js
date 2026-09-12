#!/usr/bin/env node
/**
 * 示例 3：校验一个下载下来的文件是否与官方公布的校验值一致。
 *
 *   node examples/03-verify-download.js <文件> <官方校验值>
 *   node examples/03-verify-download.js setup.exe ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
 *
 * 为什么用 HashKit.compare 而不是自己写 `a === b`：
 *   官方公布的校验值经常是大写、带空格、带冒号或 `0x` 前缀的，
 *   而且长度可能不是你以为的那个算法。compare() 会先归一化、再按长度识别算法，
 *   最后才比对，并且严格区分「不一致」(MISMATCH) 和「根本没比对」(NOT_CHECKED)。
 *   后者尤其重要 —— 把「没比对」当成「通过了」是这类工具最常见的安全问题。
 *
 * 退出码：0 MATCH，1 MISMATCH，2 用法或读取错误，3 无法比对（NOT_CHECKED / INVALID）
 */
'use strict';

const fs = require('fs');
const path = require('path');
const HashKit = require(path.join(__dirname, '..', 'src', 'hashkit.js'));

const file = process.argv[2];
const expected = process.argv[3];

if (!file || !expected) {
  console.error('用法：node examples/03-verify-download.js <文件> <官方校验值>');
  process.exit(2);
}

const abs = path.resolve(file);
if (!fs.existsSync(abs) || !fs.statSync(abs).isFile()) {
  console.error('不是可读的普通文件：' + abs);
  process.exit(2);
}

function hashFileStream(filePath, algorithms) {
  return new Promise((resolve, reject) => {
    const hashers = algorithms.map((a) => HashKit.createHasher(a));
    const rs = fs.createReadStream(filePath, { highWaterMark: HashKit.DEFAULT_CHUNK_SIZE });
    rs.on('error', reject);
    rs.on('data', (buf) => {
      const view = new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
      for (const h of hashers) h.update(view);
    });
    rs.on('end', () => {
      const hashes = {};
      algorithms.forEach((a, i) => { hashes[a] = HashKit.toHex(hashers[i].digestBytes()); });
      resolve(hashes);
    });
  });
}

(async () => {
  const norm = HashKit.normalizeHex(expected);
  const algo = HashKit.detectAlgorithm(norm);

  console.log('文件      ' + abs);
  console.log('大小      ' + fs.statSync(abs).size.toLocaleString('en-US') + ' bytes');
  console.log('期望值    ' + expected);
  console.log('归一化后  ' + (norm || '<空>'));
  console.log('识别算法  ' + (algo || '无法识别（长度不是 32 / 40 / 64 位十六进制）'));

  if (!algo) {
    console.log('');
    console.log('结果      INVALID — 校验值格式不对，无法比对。');
    process.exit(3);
  }

  // 只算需要的那个算法就够了，省掉两次无用的遍历
  const hashes = await hashFileStream(abs, [algo]);
  console.log('本地计算  ' + hashes[algo]);
  console.log('');

  const cmp = HashKit.compare(hashes, expected);

  switch (cmp.status) {
    case 'MATCH':
      console.log('结果      MATCH — 内容与该 ' + algo.toUpperCase() + ' 校验值一致。');
      console.log('');
      console.log('注意：这只说明「内容与该校验值对应的内容相同」，');
      console.log('      不说明这个文件是安全的。如果校验值本身来自被篡改的页面，结论没有意义。');
      if (algo === 'md5') {
        console.log('');
        console.log('提醒：MD5 已被证明可在实际时间内构造碰撞，');
        console.log('      不应用于判断文件是否被恶意替换。优先找官方的 SHA-256。');
      }
      process.exit(0);

    case 'MISMATCH':
      console.log('结果      MISMATCH — 不一致。');
      console.log('期望      ' + cmp.expected);
      console.log('实际      ' + cmp.actual);
      console.log('');
      console.log('常见原因：下载不完整、文件在传输中被改动、');
      console.log('          或者你手上的校验值对应的并不是这个版本。');
      process.exit(1);

    case 'NOT_CHECKED':
      console.log('结果      NOT CHECKED — ' + cmp.note);
      console.log('');
      console.log('注意：这不是「通过」。');
      process.exit(3);

    default:
      console.log('结果      ' + cmp.status + ' — ' + cmp.note);
      process.exit(3);
  }
})().catch((e) => {
  console.error('失败：' + (e && e.message ? e.message : String(e)));
  process.exit(2);
});
