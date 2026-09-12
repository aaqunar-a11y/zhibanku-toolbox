#!/usr/bin/env node
/**
 * tools/build-page.js — 由 src/hashkit.js + tools/page.template.html 生成
 *                        web/file-hash-checker.html
 *
 * 为什么要生成，而不是手写页面：
 *   页面必须把哈希实现内嵌进去才能离线单文件运行。若手工复制一份实现，
 *   日后修改 src/hashkit.js 就会与页面产生漂移，而且很难发现。
 *   这里改成"构建时注入"，页面里的实现永远与库源码逐字节一致。
 *   test/run.js 的 WEB-hashkit-sync 用例会在每次测试时校验没有漂移。
 *
 *   node tools/build-page.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const LIB = path.join(ROOT, 'src', 'hashkit.js');
const TPL = path.join(__dirname, 'page.template.html');
const OUT = path.join(ROOT, 'web', 'file-hash-checker.html');
const PLACEHOLDER = '/*__HASHKIT_LIB_SOURCE__*/';

const lib = fs.readFileSync(LIB, 'utf8');
let tpl = fs.readFileSync(TPL, 'utf8');

if (lib.indexOf('</script') !== -1) {
  console.error('构建中止：库源码里出现了 </script，内嵌会截断页面。');
  process.exit(2);
}
if (tpl.indexOf(PLACEHOLDER) === -1) {
  console.error('构建中止：模板里找不到占位符 ' + PLACEHOLDER);
  process.exit(2);
}

// 注入时把库的模块头注释保留（便于读者知道这是同一份实现），并明确标注为构建产物
const banner = [
  '/* ==================================================================',
  ' * 以下为 src/hashkit.js 的完整源码，由 tools/build-page.js 自动注入。',
  ' * 请勿在此手工修改：任何改动都会在下一次构建时被覆盖，',
  ' * 并且会被 test/run.js 的 WEB-hashkit-sync 用例判定为漂移。',
  ' * ================================================================== */',
  ''
].join('\n');

const out = tpl.replace(PLACEHOLDER, banner + lib);
fs.writeFileSync(OUT, out, 'utf8');

const sha = require('crypto').createHash('sha256').update(out).digest('hex');
console.log('已生成 ' + path.relative(ROOT, OUT));
console.log('  大小    ' + Buffer.byteLength(out, 'utf8') + ' 字节');
console.log('  sha256  ' + sha);
