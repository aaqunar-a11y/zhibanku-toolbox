/**
 * test/vectors.js — 已知答案向量（KAT）与测试数据
 *
 * 向量来源：公开标准文档与公开测试集
 *   - RFC 1321 (MD5) 附录 A.5 测试套件
 *   - RFC 3174 (SHA-1) 附录 A 与 NIST 示例
 *   - FIPS 180-4 / NIST SHA-256 示例
 * 这些值不依赖本库实现，因此可以作为独立判据。
 */
'use strict';

// [算法, 输入描述, 输入内容, 期望十六进制]
var KNOWN_ANSWERS = [
  // ---- 空输入（最易出错的边界） ----
  ['md5', '空字符串', '', 'd41d8cd98f00b204e9800998ecf8427e'],
  ['sha1', '空字符串', '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709'],
  ['sha256', '空字符串', '', 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'],

  // ---- RFC 1321 附录 A.5 ----
  ['md5', 'abc', 'abc', '900150983cd24fb0d6963f7d28e17f72'],
  ['md5', 'message digest', 'message digest', 'f96b697d7cb7938d525a2f31aaf161d0'],
  ['md5', 'a-z 26 字母', 'abcdefghijklmnopqrstuvwxyz', 'c3fcd3d76192e4007dfb496cca67e13b'],
  ['md5', 'A-Za-z0-9 62 字符',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    'd174ab98d277d9f5a5611c2c9f419d9f'],
  ['md5', '8 次 "1234567890"',
    '12345678901234567890123456789012345678901234567890123456789012345678901234567890',
    '57edf4a22be3c955ac49da2e2107b67a'],

  // ---- RFC 3174 附录 A / NIST ----
  ['sha1', 'abc', 'abc', 'a9993e364706816aba3e25717850c26c9cd0d89d'],
  ['sha1', 'abcdbcde...opq（56 字符）',
    'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
    '84983e441c3bd26ebaae4aa1f95129e5e54670f1'],

  // ---- FIPS 180-4 SHA-256 示例 ----
  ['sha256', 'abc', 'abc', 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad'],
  ['sha256', 'abcdbcde...opq（56 字符）',
    'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
    '248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1'],
  ['sha256', 'a-z 26 字母（FIPS 示例 3 前 26 字节）',
    'abcdefghijklmnopqrstuvwxyz',
    '71c480df93d6ae2f1efad1447c66c9525e316218cf51fc8d9ed832f2daf18b73'],
  ['sha256', 'FIPS 180-4 长示例（112 字符）',
    'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
    'cf5b16a778af8380036ce59e7b0492370b249b11e8f07a51afac45037afee9d1'],

  // ---- 百万字符向量（三种算法各一条） ----
  ['md5', "一百万个 'a'", null, '7707d6ae4e027c70eea2a935c2296f21'],
  ['sha1', "一百万个 'a'", null, '34aa973cd4c4daa4f61eeb2bdbad27316534016f'],
  ['sha256', "一百万个 'a'", null, 'cdc76e5c9914fb9281a1c7e284d73e67f1809a48a497200e046d39ccc7112cd0']
];

// 构造百万字符输入（不放进上面的字面量里，避免文件臃肿）
function millionA() {
  var s = 'a'.repeat(1000);
  var arr = [];
  for (var i = 0; i < 1000; i++) arr.push(s);
  return arr.join('');   // 1,000,000 个 a
}

// 边界长度：分组 64 字节、长度字段 8 字节 → 55/56/57/63/64/65/119/120/121 是关键点
var BOUNDARY_LENGTHS = [
  0, 1, 2, 3, 7, 8, 15, 16, 31, 32, 55, 56, 57, 63, 64, 65,
  71, 72, 119, 120, 121, 127, 128, 129, 191, 192, 255, 256, 257,
  511, 512, 513, 1000, 4095, 4096, 4097, 65535, 65536, 65537
];

// 确定性伪随机（便于复现失败用例）
function makePrng(seed) {
  var s = seed >>> 0;
  return function () {
    s ^= s << 13; s >>>= 0;
    s ^= s >>> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

function randomBytes(n, seed) {
  var rnd = makePrng(seed == null ? 20260911 : seed);
  var b = new Uint8Array(n);
  for (var i = 0; i < n; i++) b[i] = Math.floor(rnd() * 256) & 255;
  return b;
}

module.exports = {
  KNOWN_ANSWERS: KNOWN_ANSWERS,
  millionA: millionA,
  BOUNDARY_LENGTHS: BOUNDARY_LENGTHS,
  randomBytes: randomBytes,
  makePrng: makePrng
};
