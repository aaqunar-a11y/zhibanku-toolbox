/**
 * hashkit.js — 零依赖、可流式的哈希计算库（SHA-256 / SHA-1 / MD5）
 *
 * 设计目标
 *   1. 零依赖、零构建：单个 .js 文件，浏览器 <script> 与 Node require() 均可直接使用
 *   2. 流式（incremental）：内存占用与文件大小无关，只与 chunk 大小有关
 *   3. 可自证：全部分支都有已知答案向量（KAT）与独立实现交叉校验（见 test/）
 *
 * 浏览器：  用 script 标签引入 src/hashkit.js  →  window.HashKit
 * Node：    const HashKit = require('./src/hashkit.js')
 *
 * 算法来源：公开标准（FIPS 180-4 / RFC 3174 / RFC 1321），本文件按标准独立实现。
 *
 * @license MIT
 * @version 1.0.0
 */
(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    root.HashKit = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var ALGORITHMS = ['sha256', 'sha1', 'md5'];
  var BLOCK = 64;            // 三种算法的分组长度都是 512 bit
  var DEFAULT_CHUNK = 4 * 1024 * 1024;

  /* ------------------------------------------------------------------ *
   * 工具函数
   * ------------------------------------------------------------------ */

  function toBytes(input) {
    if (input == null) return new Uint8Array(0);
    if (input instanceof Uint8Array) return input;
    if (typeof ArrayBuffer !== 'undefined' && input instanceof ArrayBuffer) {
      return new Uint8Array(input);
    }
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView && ArrayBuffer.isView(input)) {
      return new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
    }
    if (typeof input === 'string') {
      // UTF-8 编码（不依赖 TextEncoder，保证老浏览器可用）
      var s = encodeUtf8(input);
      return s;
    }
    if (Array.isArray(input)) return new Uint8Array(input);
    throw new TypeError('hashkit: 不支持的输入类型 ' + typeof input);
  }

  function encodeUtf8(str) {
    if (typeof TextEncoder !== 'undefined') return new TextEncoder().encode(str);
    var out = [], i, c;
    for (i = 0; i < str.length; i++) {
      c = str.charCodeAt(i);
      if (c < 0x80) out.push(c);
      else if (c < 0x800) out.push(0xc0 | (c >> 6), 0x80 | (c & 63));
      else if (c >= 0xd800 && c <= 0xdbff && i + 1 < str.length) {
        var c2 = str.charCodeAt(i + 1);
        if (c2 >= 0xdc00 && c2 <= 0xdfff) {
          var cp = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
          out.push(0xf0 | (cp >> 18), 0x80 | ((cp >> 12) & 63),
                   0x80 | ((cp >> 6) & 63), 0x80 | (cp & 63));
          i++;
        } else out.push(0xef, 0xbf, 0xbd);
      } else if (c >= 0xd800 && c <= 0xdfff) out.push(0xef, 0xbf, 0xbd);
      else out.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
    }
    return new Uint8Array(out);
  }

  var HEX = '0123456789abcdef';
  function toHex(bytes) {
    var s = '';
    for (var i = 0; i < bytes.length; i++) {
      s += HEX[bytes[i] >> 4] + HEX[bytes[i] & 15];
    }
    return s;
  }

  // 归一化用户粘贴的期望哈希：去掉空白、连字符、冒号、0x 前缀、算法名前缀，统一小写
  function normalizeHex(text) {
    if (typeof text !== 'string') return '';
    return text
      .trim()
      .replace(/^(sha256|sha-256|sha1|sha-1|md5)\s*[:=]?\s*/i, '')
      .replace(/^0x/i, '')
      .replace(/[\s:\-]/g, '')
      .toLowerCase();
  }

  // 按十六进制长度推断算法：32→MD5, 40→SHA-1, 64→SHA-256
  function detectAlgorithm(hex) {
    var n = normalizeHex(hex).length;
    if (n === 32) return 'md5';
    if (n === 40) return 'sha1';
    if (n === 64) return 'sha256';
    return null;
  }

  /* ------------------------------------------------------------------ *
   * SHA-256（FIPS 180-4）
   * ------------------------------------------------------------------ */

  var K256 = new Uint32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ]);

  function Sha256() {
    this.h = new Int32Array([
      0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
      0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
    ]);
    this.buf = new Uint8Array(BLOCK);
    this.bufLen = 0;
    this.bytes = 0;
    this.w = new Int32Array(64);
    this.done = false;
  }

  Sha256.prototype._block = function (p, off) {
    var w = this.w, h = this.h, i, t;
    for (i = 0; i < 16; i++) {
      t = off + (i << 2);
      w[i] = (p[t] << 24) | (p[t + 1] << 16) | (p[t + 2] << 8) | p[t + 3];
    }
    for (i = 16; i < 64; i++) {
      var x = w[i - 15], y = w[i - 2];
      var s0 = ((x >>> 7) | (x << 25)) ^ ((x >>> 18) | (x << 14)) ^ (x >>> 3);
      var s1 = ((y >>> 17) | (y << 15)) ^ ((y >>> 19) | (y << 13)) ^ (y >>> 10);
      w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
    }
    var a = h[0], b = h[1], c = h[2], d = h[3], e = h[4], f = h[5], g = h[6], hh = h[7];
    for (i = 0; i < 64; i++) {
      var S1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
      var ch = (e & f) ^ (~e & g);
      var t1 = (hh + S1 + ch + K256[i] + w[i]) | 0;
      var S0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
      var maj = (a & b) ^ (a & c) ^ (b & c);
      var t2 = (S0 + maj) | 0;
      hh = g; g = f; f = e; e = (d + t1) | 0;
      d = c; c = b; b = a; a = (t1 + t2) | 0;
    }
    h[0] = (h[0] + a) | 0; h[1] = (h[1] + b) | 0; h[2] = (h[2] + c) | 0; h[3] = (h[3] + d) | 0;
    h[4] = (h[4] + e) | 0; h[5] = (h[5] + f) | 0; h[6] = (h[6] + g) | 0; h[7] = (h[7] + hh) | 0;
  };

  Sha256.prototype.update = function (data) {
    if (this.done) throw new Error('hashkit: digest() 之后不能再 update()');
    var p = toBytes(data);
    this.bytes += p.length;
    var off = 0;
    if (this.bufLen > 0) {
      var need = BLOCK - this.bufLen;
      if (p.length < need) {
        this.buf.set(p, this.bufLen);
        this.bufLen += p.length;
        return this;
      }
      this.buf.set(p.subarray(0, need), this.bufLen);
      this._block(this.buf, 0);
      this.bufLen = 0;
      off = need;
    }
    while (off + BLOCK <= p.length) {
      this._block(p, off);
      off += BLOCK;
    }
    if (off < p.length) {
      this.buf.set(p.subarray(off), 0);
      this.bufLen = p.length - off;
    }
    return this;
  };

  Sha256.prototype.digestBytes = function () {
    if (!this.done) {
      // 填充长度的计算依赖"当前已缓冲字节数"，
      // 因此必须保留 bufLen 与 buf 原样交给 update() 去凑满整块，
      // 不能在调用前清空 bufLen —— 否则整块会被当成"不足一块"缓冲起来而永不压缩。
      var padLen = (this.bufLen < 56) ? (56 - this.bufLen) : (120 - this.bufLen);
      var tail = new Uint8Array(padLen + 8);
      tail[0] = 0x80;
      var bitsHi = Math.floor(this.bytes / 536870912);
      var bitsLo = (this.bytes * 8) >>> 0;
      tail[padLen] = (bitsHi >>> 24) & 255; tail[padLen + 1] = (bitsHi >>> 16) & 255;
      tail[padLen + 2] = (bitsHi >>> 8) & 255; tail[padLen + 3] = bitsHi & 255;
      tail[padLen + 4] = (bitsLo >>> 24) & 255; tail[padLen + 5] = (bitsLo >>> 16) & 255;
      tail[padLen + 6] = (bitsLo >>> 8) & 255; tail[padLen + 7] = bitsLo & 255;
      var savedBytes = this.bytes;
      this.update(tail);
      this.bytes = savedBytes;   // 长度字段已写入，恢复真实消息长度
      this.done = true;
    }
    var out = new Uint8Array(32);
    for (var i = 0; i < 8; i++) {
      out[i * 4] = (this.h[i] >>> 24) & 255;
      out[i * 4 + 1] = (this.h[i] >>> 16) & 255;
      out[i * 4 + 2] = (this.h[i] >>> 8) & 255;
      out[i * 4 + 3] = this.h[i] & 255;
    }
    return out;
  };

  /* ------------------------------------------------------------------ *
   * SHA-1（RFC 3174）
   * ------------------------------------------------------------------ */

  function Sha1() {
    this.h = new Int32Array([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
    this.buf = new Uint8Array(BLOCK);
    this.bufLen = 0;
    this.bytes = 0;
    this.w = new Int32Array(80);
    this.done = false;
  }

  Sha1.prototype._block = function (p, off) {
    var w = this.w, h = this.h, i, t;
    for (i = 0; i < 16; i++) {
      t = off + (i << 2);
      w[i] = (p[t] << 24) | (p[t + 1] << 16) | (p[t + 2] << 8) | p[t + 3];
    }
    for (i = 16; i < 80; i++) {
      var v = w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16];
      w[i] = (v << 1) | (v >>> 31);
    }
    var a = h[0], b = h[1], c = h[2], d = h[3], e = h[4];
    for (i = 0; i < 80; i++) {
      var f, k;
      if (i < 20) { f = (b & c) | (~b & d); k = 0x5A827999; }
      else if (i < 40) { f = b ^ c ^ d; k = 0x6ED9EBA1; }
      else if (i < 60) { f = (b & c) | (b & d) | (c & d); k = 0x8F1BBCDC; }
      else { f = b ^ c ^ d; k = 0xCA62C1D6; }
      var tmp = (((a << 5) | (a >>> 27)) + f + e + k + w[i]) | 0;
      e = d; d = c; c = (b << 30) | (b >>> 2); b = a; a = tmp;
    }
    h[0] = (h[0] + a) | 0; h[1] = (h[1] + b) | 0; h[2] = (h[2] + c) | 0;
    h[3] = (h[3] + d) | 0; h[4] = (h[4] + e) | 0;
  };

  Sha1.prototype.update = Sha256.prototype.update;

  Sha1.prototype.digestBytes = function () {
    if (!this.done) {
      // 同 SHA-256：必须保留 bufLen/buf，交由 update() 凑满整块
      var padLen = (this.bufLen < 56) ? (56 - this.bufLen) : (120 - this.bufLen);
      var tail = new Uint8Array(padLen + 8);
      tail[0] = 0x80;
      var bitsHi = Math.floor(this.bytes / 536870912);
      var bitsLo = (this.bytes * 8) >>> 0;
      tail[padLen] = (bitsHi >>> 24) & 255; tail[padLen + 1] = (bitsHi >>> 16) & 255;
      tail[padLen + 2] = (bitsHi >>> 8) & 255; tail[padLen + 3] = bitsHi & 255;
      tail[padLen + 4] = (bitsLo >>> 24) & 255; tail[padLen + 5] = (bitsLo >>> 16) & 255;
      tail[padLen + 6] = (bitsLo >>> 8) & 255; tail[padLen + 7] = bitsLo & 255;
      var savedBytes = this.bytes;
      this.update(tail);
      this.bytes = savedBytes;
      this.done = true;
    }
    var out = new Uint8Array(20);
    for (var i = 0; i < 5; i++) {
      out[i * 4] = (this.h[i] >>> 24) & 255;
      out[i * 4 + 1] = (this.h[i] >>> 16) & 255;
      out[i * 4 + 2] = (this.h[i] >>> 8) & 255;
      out[i * 4 + 3] = this.h[i] & 255;
    }
    return out;
  };

  /* ------------------------------------------------------------------ *
   * MD5（RFC 1321）
   * 注意：MD5 已被证明可在实际时间内构造碰撞，不得用于安全校验
   *      （签名、密码、完整性防篡改）。本库仅为兼容历史校验值和快速去重而保留。
   * ------------------------------------------------------------------ */

  var K_MD5 = new Int32Array([
    0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee, 0xf57c0faf, 0x4787c62a, 0xa8304613, 0xfd469501,
    0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be, 0x6b901122, 0xfd987193, 0xa679438e, 0x49b40821,
    0xf61e2562, 0xc040b340, 0x265e5a51, 0xe9b6c7aa, 0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8,
    0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed, 0xa9e3e905, 0xfcefa3f8, 0x676f02d9, 0x8d2a4c8a,
    0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c, 0xa4beea44, 0x4bdecfa9, 0xf6bb4b60, 0xbebfbc70,
    0x289b7ec6, 0xeaa127fa, 0xd4ef3085, 0x04881d05, 0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665,
    0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039, 0x655b59c3, 0x8f0ccc92, 0xffeff47d, 0x85845dd1,
    0x6fa87e4f, 0xfe2ce6e0, 0xa3014314, 0x4e0811a1, 0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391
  ]);
  var S_MD5 = [
    7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
    5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
    4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
    6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21
  ];

  function Md5() {
    this.h = new Int32Array([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
    this.buf = new Uint8Array(BLOCK);
    this.bufLen = 0;
    this.bytes = 0;
    this.m = new Int32Array(16);
    this.done = false;
  }

  Md5.prototype._block = function (p, off) {
    var m = this.m, i, t;
    for (i = 0; i < 16; i++) {
      t = off + (i << 2);
      m[i] = p[t] | (p[t + 1] << 8) | (p[t + 2] << 16) | (p[t + 3] << 24);
    }
    var a = this.h[0], b = this.h[1], c = this.h[2], d = this.h[3];
    var f, g, tmp;
    for (i = 0; i < 64; i++) {
      if (i < 16) { f = (b & c) | (~b & d); g = i; }
      else if (i < 32) { f = (d & b) | (~d & c); g = (5 * i + 1) & 15; }
      else if (i < 48) { f = b ^ c ^ d; g = (3 * i + 5) & 15; }
      else { f = c ^ (b | ~d); g = (7 * i) & 15; }
      tmp = a + f + K_MD5[i] + m[g];
      a = d; d = c; c = b;
      var s = S_MD5[i];
      b = (b + ((tmp << s) | (tmp >>> (32 - s)))) | 0;
    }
    this.h[0] = (this.h[0] + a) | 0;
    this.h[1] = (this.h[1] + b) | 0;
    this.h[2] = (this.h[2] + c) | 0;
    this.h[3] = (this.h[3] + d) | 0;
  };

  Md5.prototype.update = Sha256.prototype.update;

  Md5.prototype.digestBytes = function () {
    if (!this.done) {
      // 同 SHA-256：必须保留 bufLen/buf，交由 update() 凑满整块
      var padLen = (this.bufLen < 56) ? (56 - this.bufLen) : (120 - this.bufLen);
      var tail = new Uint8Array(padLen + 8);
      tail[0] = 0x80;
      var bitsHi = Math.floor(this.bytes / 536870912);
      var bitsLo = (this.bytes * 8) >>> 0;
      // MD5 的长度字段是小端
      tail[padLen] = bitsLo & 255; tail[padLen + 1] = (bitsLo >>> 8) & 255;
      tail[padLen + 2] = (bitsLo >>> 16) & 255; tail[padLen + 3] = (bitsLo >>> 24) & 255;
      tail[padLen + 4] = bitsHi & 255; tail[padLen + 5] = (bitsHi >>> 8) & 255;
      tail[padLen + 6] = (bitsHi >>> 16) & 255; tail[padLen + 7] = (bitsHi >>> 24) & 255;
      var savedBytes = this.bytes;
      this.update(tail);
      this.bytes = savedBytes;
      this.done = true;
    }
    var out = new Uint8Array(16);
    for (var i = 0; i < 4; i++) {
      out[i * 4] = this.h[i] & 255;
      out[i * 4 + 1] = (this.h[i] >>> 8) & 255;
      out[i * 4 + 2] = (this.h[i] >>> 16) & 255;
      out[i * 4 + 3] = (this.h[i] >>> 24) & 255;
    }
    return out;
  };

  /* ------------------------------------------------------------------ *
   * 公共 API
   * ------------------------------------------------------------------ */

  var CTORS = { sha256: Sha256, sha1: Sha1, md5: Md5 };

  function createHasher(algo) {
    var name = String(algo || 'sha256').toLowerCase().replace('-', '');
    if (name === 'sha256') return new Sha256();
    if (name === 'sha1') return new Sha1();
    if (name === 'md5') return new Md5();
    throw new Error('hashkit: 不支持的算法 ' + algo + '（可用：sha256 / sha1 / md5）');
  }

  function normalizeAlgorithms(list) {
    var arr = (list == null) ? ['sha256'] : (Array.isArray(list) ? list : [list]);
    var out = [];
    for (var i = 0; i < arr.length; i++) {
      var n = String(arr[i]).toLowerCase().replace('-', '');
      if (ALGORITHMS.indexOf(n) === -1) {
        throw new Error('hashkit: 不支持的算法 ' + arr[i]);
      }
      if (out.indexOf(n) === -1) out.push(n);
    }
    if (out.length === 0) out.push('sha256');
    return out;
  }

  // 一次性计算（内存内数据）
  function hash(data, algo) {
    var h = createHasher(algo || 'sha256');
    h.update(data);
    return toHex(h.digestBytes());
  }

  function hashAll(data, algorithms) {
    var algos = normalizeAlgorithms(algorithms);
    var hashers = algos.map(function (a) { return createHasher(a); });
    var bytes = toBytes(data);
    hashers.forEach(function (h) { h.update(bytes); });
    var res = {};
    algos.forEach(function (a, i) { res[a] = toHex(hashers[i].digestBytes()); });
    return res;
  }

  function nextTick() {
    return new Promise(function (resolve) {
      if (typeof setTimeout === 'function') setTimeout(resolve, 0);
      else resolve();
    });
  }

  function readSlice(blob, start, end) {
    return new Promise(function (resolve, reject) {
      var slice = blob.slice(start, end);
      if (typeof slice.arrayBuffer === 'function') {
        slice.arrayBuffer().then(function (ab) {
          resolve(new Uint8Array(ab));
        }, reject);
        return;
      }
      // 老浏览器回退：FileReader
      if (typeof FileReader === 'function') {
        var fr = new FileReader();
        fr.onload = function () { resolve(new Uint8Array(fr.result)); };
        fr.onerror = function () { reject(fr.error || new Error('读取失败')); };
        fr.readAsArrayBuffer(slice);
        return;
      }
      reject(new Error('hashkit: 当前环境不支持分片读取'));
    });
  }

  /**
   * 流式计算任意 Blob / File（浏览器 File 对象即 Blob 子类）。
   * 内存占用 = chunkSize，与文件大小无关。
   *
   * @param {Blob} blob
   * @param {Object} [opts]
   * @param {string[]} [opts.algorithms=['sha256']]
   * @param {number}   [opts.chunkSize=4194304]
   * @param {Function} [opts.onProgress] (loaded, total) => void
   * @param {boolean}  [opts.yieldToEventLoop=true] 每片之间让出主线程，使进度条可渲染
   * @returns {Promise<{bytes:number, hashes:Object, chunks:number, ms:number}>}
   */
  function hashBlob(blob, opts) {
    opts = opts || {};
    var algos = normalizeAlgorithms(opts.algorithms);
    var chunkSize = opts.chunkSize > 0 ? Math.floor(opts.chunkSize) : DEFAULT_CHUNK;
    var yieldOut = opts.yieldToEventLoop !== false;
    var hashers = algos.map(function (a) { return createHasher(a); });
    var total = (blob && typeof blob.size === 'number') ? blob.size : 0;
    var offset = 0;
    var chunks = 0;
    var t0 = typeof Date !== 'undefined' ? Date.now() : 0;

    function step() {
      if (offset >= total) {
        var res = {};
        algos.forEach(function (a, i) { res[a] = toHex(hashers[i].digestBytes()); });
        var t1 = typeof Date !== 'undefined' ? Date.now() : 0;
        return Promise.resolve({
          bytes: total, hashes: res, chunks: chunks, ms: t1 - t0
        });
      }
      var end = Math.min(offset + chunkSize, total);
      return readSlice(blob, offset, end).then(function (buf) {
        hashers.forEach(function (h) { h.update(buf); });
        offset = end;
        chunks++;
        if (typeof opts.onProgress === 'function') opts.onProgress(offset, total);
        return (yieldOut ? nextTick() : Promise.resolve()).then(step);
      });
    }
    return step();
  }

  /**
   * 用浏览器原生 WebCrypto 独立计算一次，用于交叉校验本库实现。
   * 仅支持 sha256 / sha1，且在非安全上下文（http 非 localhost）下不可用。
   * @returns {Promise<Object|null>} 不可用时返回 null，绝不静默返回错误值
   */
  function hashBlobNative(blob, algorithms) {
    var subtle = (typeof crypto !== 'undefined' && crypto.subtle) ? crypto.subtle : null;
    if (!subtle || typeof blob.arrayBuffer !== 'function') return Promise.resolve(null);
    var algos = normalizeAlgorithms(algorithms).filter(function (a) {
      return a === 'sha256' || a === 'sha1';
    });
    if (algos.length === 0) return Promise.resolve(null);
    var out = {};
    var chain = Promise.resolve();
    algos.forEach(function (a) {
      chain = chain.then(function () {
        return blob.arrayBuffer().then(function (ab) {
          return subtle.digest(a === 'sha256' ? 'SHA-256' : 'SHA-1', ab);
        }).then(function (d) {
          out[a] = toHex(new Uint8Array(d));
        });
      });
    });
    return chain.then(function () { return out; }, function () { return null; });
  }

  /**
   * 比较实际哈希与期望哈希。
   * @returns {{status:'MATCH'|'MISMATCH'|'NOT_CHECKED'|'INVALID', algorithm:string|null,
   *            expected:string, actual:string|null, note:string}}
   */
  function compare(actualHashes, expectedText, preferredAlgo) {
    var exp = normalizeHex(expectedText);
    if (!exp) {
      return {
        status: 'NOT_CHECKED', algorithm: null, expected: '', actual: null,
        note: '未提供期望哈希'
      };
    }
    var target = detectAlgorithm(exp);
    if (!target) {
      return {
        status: 'INVALID', algorithm: null, expected: exp, actual: null,
        note: '期望哈希长度不是 32 / 40 / 64 位十六进制，无法识别算法'
      };
    }
    var actual = actualHashes && actualHashes[target] ? actualHashes[target] : null;
    if (!actual) {
      return {
        status: 'NOT_CHECKED', algorithm: target, expected: exp, actual: null,
        note: '期望哈希为 ' + target + '，但本次未计算该算法'
      };
    }
    return {
      status: actual === exp ? 'MATCH' : 'MISMATCH',
      algorithm: target,
      expected: exp,
      actual: actual,
      note: actual === exp ? '与期望值一致' : '与期望值不一致'
    };
  }

  return {
    version: '1.0.0',
    ALGORITHMS: ALGORITHMS.slice(),
    DEFAULT_CHUNK_SIZE: DEFAULT_CHUNK,
    createHasher: createHasher,
    hash: hash,
    hashText: function (text, algo) { return hash(text, algo || 'sha256'); },
    hashAll: hashAll,
    hashBlob: hashBlob,
    hashFile: hashBlob,
    hashBlobNative: hashBlobNative,
    compare: compare,
    normalizeHex: normalizeHex,
    detectAlgorithm: detectAlgorithm,
    toHex: toHex,
    _encodeUtf8: encodeUtf8,
    _ctors: CTORS
  };
});
