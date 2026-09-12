# 变更记录

本文件记录对外可见的变更。版本号遵循[语义化版本](https://semver.org/lang/zh-CN/)。

## [1.0.0] — 2026-09-11

首次发布。

### 新增

- **hashkit 库**（`src/hashkit.js`）
  - SHA-256（FIPS 180-4）、SHA-1（RFC 3174）、MD5（RFC 1321）三个算法，按公开标准独立实现，未复制第三方代码
  - 同一份源码同时支持浏览器（`window.HashKit`）与 Node（`require`），UMD 形式，ES5 语法，零依赖、零构建
  - 增量接口 `createHasher()` / `update()` / `digestBytes()`，支持任意分片
  - `hash()` / `hashText()` / `hashAll()`：一次性计算内存内数据
  - `hashBlob()`：流式计算 Blob / File，内存占用为 O(chunkSize)，与文件大小无关
  - `hashBlobNative()`：用浏览器原生 WebCrypto 独立算一遍，用于交叉校验本库实现
  - `compare()`：四态期望值比对（`MATCH` / `MISMATCH` / `NOT_CHECKED` / `INVALID`），严格区分"没比对"与"比对失败"
  - `normalizeHex()`：容忍大写、空格、冒号分隔与 `0x` 前缀
  - `detectAlgorithm()`：按十六进制长度识别算法
- **命令行工具**（`cli/hashkit-cli.js`）
  - 流式读取本地文件（`fs.createReadStream`），内存 O(chunk)
  - `-a/--algo`、`-e/--expect`、`-c/--chunk`、`-j/--json`、`-q/--quiet`、`-h/--help`
  - `--expect` 按长度自动识别算法并自动补算对应算法
  - 退出码 0 / 1 / 2，便于在脚本中直接判定
- **测试套件**（`test/run.js`、`test/vectors.js`），不依赖任何第三方测试框架
  - 已知答案向量（KAT）、分组与长度字段边界（逐字节喂入）、与 Node `crypto`（OpenSSL）交叉校验
  - CLI 端到端、UMD 浏览器分支沙箱验证、真实文件（空 / 二进制 / 中文文件名 / 64 MiB）
  - 网页产物静态门禁：不上传、无外部依赖、可访问性基础项、MD5 警示、结构化数据不含虚构字段
  - 共 115 个用例
- **浏览器端到端测试**（`browser-test/run-browser.js`），驱动本机真实 Chrome
  - 61 个用例，含桌面 / 移动端视口、键盘可达、无障碍基础项、离线可用、网络取证（证明文件不出本机）
- **网页版工具**（`tools/build-page.js` + `tools/page.template.html` → `web/file-hash-checker.html`）
  - 自包含单 HTML 文件，内联库源码与样式，无任何外部资源引用
  - 由构建脚本从库源码注入，避免页面内嵌实现与库源码两处漂移；`test/run.js` 会在每次构建后断言二者一致

### 已知限制

- `hashBlobNative` 只支持 SHA-256 / SHA-1；WebCrypto 不提供 MD5，因此 MD5 没有原生交叉校验，不会伪造互证结论
- 网页版一次只处理一个文件；批量校验尚未实现
- 未在 Firefox / Safari 上做过端到端测试（测试脚本目前只驱动本机 Chrome）
