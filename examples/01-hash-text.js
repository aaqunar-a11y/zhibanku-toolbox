#!/usr/bin/env node
/**
 * 示例 1：在 Node 里计算字符串的哈希，并用已知答案向量自证结果正确。
 *
 *   node examples/01-hash-text.js
 *
 * 退出码：0 全部一致，1 有对不上的（此时不要去改期望值，先查实现）
 */
'use strict';

const path = require('path');
const HashKit = require(path.join(__dirname, '..', 'src', 'hashkit.js'));

// 判据来自公开标准与官方测试集：
//   "abc" 与空串的 SHA-256 / SHA-1 / MD5 是各标准文档里的公开常量
//   RFC 1321 附录 A.5、RFC 3174 测试集、FIPS 180-4 示例
const CASES = [
  {
    input: '',
    expect: {
      sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      sha1: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
      md5: 'd41d8cd98f00b204e9800998ecf8427e',
    },
  },
  {
    input: 'abc',
    expect: {
      sha256: 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
      sha1: 'a9993e364706816aba3e25717850c26c9cd0d89d',
      md5: '900150983cd24fb0d6963f7d28e17f72',
    },
  },
  {
    input: 'The quick brown fox jumps over the lazy dog',
    expect: {
      sha256: 'd7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592',
      sha1: '2fd4e1c67a2d28fced849ee1bb76e7391b93eb12',
      md5: '9e107d9d372bb6826bd81d3542a419d6',
    },
  },
];

console.log('hashkit v' + HashKit.version + ' — 字符串哈希 + 已知答案自证\n');

let failed = 0;

for (const c of CASES) {
  const label = c.input === '' ? '<空字符串>' : JSON.stringify(c.input);
  console.log(label);

  // hashAll 一次遍历算出三个算法，比调三次 hash() 更省
  const got = HashKit.hashAll(c.input, ['sha256', 'sha1', 'md5']);

  for (const algo of ['sha256', 'sha1', 'md5']) {
    const ok = got[algo] === c.expect[algo];
    if (!ok) failed++;
    console.log(
      '  ' + (ok ? 'OK  ' : 'FAIL') + '  ' + algo.toUpperCase().padEnd(6) + '  ' + got[algo]
    );
  }
  console.log('');
}

// 顺便演示 normalizeHex：官方公布的校验值经常是大写、带空格或冒号分隔的
const messy = 'BA7816BF 8F01CFEA:414140DE-5DAE2223B00361A396177A9CB410FF61F20015AD';
console.log('normalizeHex 归一化：');
console.log('  原始  ' + messy);
console.log('  归一  ' + HashKit.normalizeHex(messy));
console.log('  识别  ' + HashKit.detectAlgorithm(messy) + '（按十六进制长度判断）');

console.log('');
if (failed === 0) {
  console.log('全部通过。');
  process.exit(0);
}
console.log(failed + ' 项不一致。');
process.exit(1);
