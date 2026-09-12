#!/usr/bin/env node
/**
 * 示例 2：流式计算磁盘文件的哈希。
 *
 *   node examples/02-hash-file.js <文件> [分片字节数]
 *   node examples/02-hash-file.js ./setup.exe
 *   node examples/02-hash-file.js ./setup.exe 1048576
 *
 * 关键点：用 fs.createReadStream 边读边喂，内存占用是 O(chunkSize)，
 *        与文件大小无关。所以这个写法可以处理几十 GB 的文件。
 */
'use strict';

const fs = require('fs');
const path = require('path');
const HashKit = require(path.join(__dirname, '..', 'src', 'hashkit.js'));

const file = process.argv[2];
const chunkSize = process.argv[3] ? parseInt(process.argv[3], 10) : HashKit.DEFAULT_CHUNK_SIZE;

if (!file) {
  console.error('用法：node examples/02-hash-file.js <文件> [分片字节数]');
  process.exit(2);
}
if (!(chunkSize > 0)) {
  console.error('分片字节数必须是正整数');
  process.exit(2);
}

const abs = path.resolve(file);

if (!fs.existsSync(abs) || !fs.statSync(abs).isFile()) {
  console.error('不是可读的普通文件：' + abs);
  process.exit(2);
}

const size = fs.statSync(abs).size;

/**
 * 流式哈希：每收到一片就喂给所有哈希器，不保留历史数据。
 * @returns {Promise<{hashes: Object, chunks: number, ms: number}>}
 */
function hashFileStream(filePath, algorithms, highWaterMark) {
  return new Promise((resolve, reject) => {
    const hashers = algorithms.map((a) => HashKit.createHasher(a));
    let chunks = 0;
    const t0 = Date.now();

    const rs = fs.createReadStream(filePath, { highWaterMark });
    rs.on('error', reject);
    rs.on('data', (buf) => {
      // Buffer 是 Uint8Array 的子类，直接喂即可；
      // 这里显式构造视图是为了说明 byteOffset/byteLength 的情况也安全。
      const view = new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
      for (const h of hashers) h.update(view);
      chunks++;
    });
    rs.on('end', () => {
      const hashes = {};
      algorithms.forEach((a, i) => { hashes[a] = HashKit.toHex(hashers[i].digestBytes()); });
      resolve({ hashes, chunks, ms: Date.now() - t0 });
    });
  });
}

(async () => {
  const algorithms = ['sha256', 'sha1', 'md5'];

  console.log('文件    ' + abs);
  console.log('大小    ' + size.toLocaleString('en-US') + ' bytes');
  console.log('分片    ' + chunkSize.toLocaleString('en-US') + ' bytes');
  console.log('');

  const r = await hashFileStream(abs, algorithms, chunkSize);

  for (const a of algorithms) {
    console.log('  ' + a.toUpperCase().padEnd(7) + r.hashes[a]);
  }

  console.log('');
  console.log(
    '  ' + r.chunks + ' 片 · ' + (r.ms / 1000).toFixed(2) + ' 秒 · ' +
    (size / 1048576 / (r.ms / 1000)).toFixed(1) + ' MiB/s'
  );
  console.log('  峰值内存与文件大小无关，只与分片大小有关。');
})().catch((e) => {
  console.error('失败：' + (e && e.message ? e.message : String(e)));
  process.exit(2);
});
