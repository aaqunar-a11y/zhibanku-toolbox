# 知办库工具箱（Zhibanku Toolbox）

零依赖、可流式的小工具集合。每个模块都要求：**单一职责、无第三方依赖、浏览器与 Node 共用同一份源码、自带的测试能用公开标准或独立实现自证正确性。**

当前包含 1 个模块：

| 模块 | 说明 | 源码 |
| --- | --- | --- |
| `hashkit` | SHA-256 / SHA-1 / MD5 纯 JS 实现，支持流式（分片）计算，内存占用与文件大小无关 | [`src/hashkit.js`](src/hashkit.js) |

配套产出：
- 命令行工具 [`cli/hashkit-cli.js`](cli/hashkit-cli.js)（校验本地文件，带退出码语义）
- 自包含网页版「文件哈希校验器」（由 [`tools/build-page.js`](tools/build-page.js) 从库源码注入模板生成，产物在 [`web/`](web/)）

---

## 在线工具集（每日更新）

本仓库同时收录知办库[在线工具](https://www.zhibanku.com/tools/)的完整前端源码。每个工具都是**单文件、零依赖、无网络请求**：下载 `index.html` 双击即可离线使用，也可自行部署。

| 工具 | 在线地址 | 源码 |
| --- | --- | --- |
| 进制转换器 | [在线使用](https://www.zhibanku.com/tools/base-converter.html) | [`tools/base-converter/`](tools/base-converter/) |
| 命名风格转换 | [在线使用](https://www.zhibanku.com/tools/case-converter.html) | [`tools/case-converter/`](tools/case-converter/) |
| 密码生成器 | [在线使用](https://www.zhibanku.com/tools/password-generator.html) | [`tools/password-generator/`](tools/password-generator/) |
| URL 编解码工具 | [在线使用](https://www.zhibanku.com/tools/url-encoder.html) | [`tools/url-encoder/`](tools/url-encoder/) |

共 4 个工具，源码同步自 <https://www.zhibanku.com/tools/>（该站每日新增一个工具，本目录同步跟进）。

设计约定：

- 单个 HTML 文件内含全部 CSS 与 JS，不使用构建步骤、不引外部 CDN。
- 不发起任何网络请求，用户输入不上传（可用浏览器开发者工具的网络面板自行验证）。
- 不写 Cookie、不使用 localStorage、不做埋点。
- 命名风格、无障碍（`label` / `aria-live` / 键盘可达）、移动端触控目标尺寸与站内既有工具保持一致。

## 为什么会有这个仓库

常见的哈希校验需求只有一句话：*「我下载的这个文件，跟官方公布的校验值一致吗？」*

落到实践里通常有两个坑：

1. 在线校验网站需要**先把文件上传**才能算。安装包动辄几百 MB 到几 GB，上传慢，而且把文件交给第三方本身就是风险。
2. 命令行工具（`sha256sum` / `certutil`）在不同系统上参数不一致，Windows 用户容易用错；算完之后还要自己肉眼比对两串 64 位十六进制。

这个仓库解决的就是这两点：**本地计算 + 自动比对 + 不用上传**。`hashkit` 用分片读取，一个 64 MiB 的文件峰值堆内存增量约 7.5 MiB（见下文测试），因此几十 GB 的文件也不会把内存撑爆。

---

## 快速开始

### 1. Node 里当库用

```js
const HashKit = require('./src/hashkit.js');

// 一次算一个字符串
HashKit.hash('abc', 'sha256');
// => 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad'

// 一次算三个算法
HashKit.hashAll('abc', ['sha256', 'sha1', 'md5']);
// => { sha256: 'ba7816bf…', sha1: 'a9993e36…', md5: '90015098…' }
```

### 2. 浏览器里当库用

`src/hashkit.js` 是 **ES5 语法、零依赖、零构建**的单文件库，直接引入即可，无需打包或转译：

```html
<script src="src/hashkit.js"></script>
<script>
  HashKit.hash('abc', 'sha256');           // 同步
  HashKit.hashBlob(fileInput.files[0], {   // 流式，file 即 Blob
    algorithms: ['sha256', 'sha1'],
    onProgress: (loaded, total) => console.log(loaded + '/' + total)
  }).then(r => console.log(r.hashes));
</script>
```

浏览器与 Node 两个分支都在同一份源码里（UMD），由 `test/run.js` 用 `vm` 沙箱模拟"没有 `require` 的环境"来验证浏览器分支确实可用。

### 3. 算本地文件的哈希

```bash
node cli/hashkit-cli.js setup.exe
node cli/hashkit-cli.js setup.exe -a all          # 三个算法都算
node cli/hashkit-cli.js setup.exe -e <官方校验值>  # 自动比对
node cli/hashkit-cli.js setup.exe -q              # 只输出哈希值，便于脚本取值
node cli/hashkit-cli.js setup.exe -j              # 输出 JSON
```

`--expect` 会按长度自动识别算法（32 位 = MD5，40 位 = SHA-1，64 位 = SHA-256），**并自动补上对应算法的计算**，避免"期望 SHA-1 却只算了 SHA-256"这类误判。

退出码：`0` 成功 / MATCH，`1` MISMATCH，`2` 用法或读取错误。可直接用于脚本：

```bash
if node cli/hashkit-cli.js pkg.zip -e "$PUBLISHED_SHA256" -q > /dev/null; then
  echo "校验通过"
else
  echo "校验失败或文件不可读" >&2
fi
```

### 4. 网页版（不上传）

```bash
npm run build          # 由 src/hashkit.js 注入 tools/page.template.html → web/file-hash-checker.html
```

产物是**单个 HTML 文件**，内联了库源码与样式，没有任何外部资源引用。用任意静态服务器打开即可（`crypto.subtle` 需要安全上下文，所以用 `http://localhost` 或 HTTPS，不要直接 `file://`）：

```bash
npx --yes serve web     # 或 python -m http.server -d web
```

页面上的四点主张都可以自己验证：源码中没有 `fetch` / `XMLHttpRequest` / `WebSocket` / `sendBeacon`；不引用任何外部脚本或样式；断网后仍能计算；开发者工具 Network 面板中不会出现新请求。

---

## API

全部导出（`require('./src/hashkit.js')` 或浏览器下的 `window.HashKit`）：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `version` | `string` | 语义化版本号 |
| `ALGORITHMS` | `string[]` | `['sha256', 'sha1', 'md5']` |
| `DEFAULT_CHUNK_SIZE` | `number` | 默认分片大小，`4194304`（4 MiB） |
| `createHasher(algo)` | `→ hasher` | 创建增量哈希器，`hasher.update(bytes)` / `hasher.digestBytes()` 可反复交替调用 |
| `hash(data, algo?)` | `→ hex` | 一次性计算内存内数据，默认 `sha256` |
| `hashText(text, algo?)` | `→ hex` | 同上，明确按 UTF-8 处理字符串 |
| `hashAll(data, algorithms?)` | `→ {algo: hex}` | 一次遍历算出多个算法 |
| `hashBlob(blob, opts?)` | `→ Promise<{bytes, hashes, chunks, ms}>` | 流式计算 Blob / File，内存 O(chunk) |
| `hashFile(blob, opts?)` | | `hashBlob` 的别名 |
| `hashBlobNative(blob, algorithms?)` | `→ Promise<object\|null>` | 用浏览器原生 WebCrypto 独立算一次，用于交叉校验本库实现 |
| `compare(actualHashes, expectedText)` | `→ {status, algorithm, expected, actual, note}` | 期望值比对，见下表 |
| `normalizeHex(text)` | `→ hex\|''` | 去掉空格、冒号、`0x` 前缀并转小写 |
| `detectAlgorithm(hex)` | `→ 'sha256'\|'sha1'\|'md5'\|null` | 按十六进制长度识别算法 |
| `toHex(bytes)` | `→ hex` | 字节数组转小写十六进制 |

`hashBlob` 的 `opts`：

| 字段 | 默认 | 说明 |
| --- | --- | --- |
| `algorithms` | `['sha256']` | 要计算的算法 |
| `chunkSize` | `4194304` | 分片字节数 |
| `onProgress` | — | `(loaded, total) => void`，每片回调一次 |
| `yieldToEventLoop` | `true` | 每片之间让出主线程，使进度条能真正渲染 |

`compare()` 是**四态**的，`NOT_CHECKED` 与 `MISMATCH` 严格区分——这一点很重要，把"没比对"混成"比对通过"是这类工具最常见的安全问题：

| status | 含义 |
| --- | --- |
| `MATCH` | 期望值有效，且与该算法算出的值完全一致 |
| `MISMATCH` | 期望值有效，但值不一致 |
| `NOT_CHECKED` | 期望值为空，**或者**期望值对应的算法本次没有计算 |
| `INVALID` | 期望值长度不是 32 / 40 / 64 位十六进制，无法识别算法 |

哈希算法来源为公开标准：SHA-256 依 FIPS 180-4，SHA-1 依 RFC 3174，MD5 依 RFC 1321。本库按标准独立实现，未复制任何第三方实现代码。

---

## 测试

```bash
npm test              # 全量，约 40 秒（含 64 MiB 大文件与百万字符用例）
npm run test:quick    # 跳过耗时用例
npm run test:browser  # 真实 Chrome 端到端，需先安装 playwright-core
```

测试**不依赖任何第三方测试框架**，`node test/run.js` 直接用 Node 内置模块。报告写入 `test/last-run.json`。

判定依据分三类，都不来自本库自身：

1. **已知答案向量（KAT）**——取自 RFC 1321 附录 A.5、RFC 3174 的测试集、FIPS 180-4 示例，以及 `"abc"`、空输入等公开常量。
2. **独立实现交叉校验**——用 Node 内置的 `crypto`（OpenSSL）对同样的数据算一遍，逐条比对。浏览器端则用 WebCrypto。
3. **分组与长度字段边界**——对 55/56/57/63/64/65/119/120/121 等长度逐字节喂入，覆盖填充逻辑最容易出错的地方。

当前状态（Node 22.22.2 / Windows）：

| 套件 | 结果 |
| --- | --- |
| 静态测试（`node test/run.js`） | 115 / 115 PASS |
| 浏览器端到端（`node browser-test/run-browser.js`） | 65 / 65 PASS |

浏览器端到端用的是本机安装的 Chrome，覆盖：空文件 / 二进制（含 `0x00`、`0xFF`）/ 中文文件名 / 12 MiB 大文件 / 正确与错误期望值 / 三算法一致性 / 分片独立性 / 复制 / 重置 / 键盘可达 / 无障碍基础项 / 移动端 375px 视口 / 离线仍可用 / 仓库示例页可运行性。全部期望哈希由 Node `crypto` 独立算出；网络层全程记录，用于证明文件未离开本机（零第三方请求、零非 GET 请求）。

`npm run test:browser` 需要 `playwright-core`（仓库本身零运行时依赖，这个只用于测试）：

```bash
npm install --no-save playwright-core   # 只驱动本机已装浏览器，不额外下载浏览器
```

---

## 边界与诚实说明

写在这里是为了避免被误用，不是为了免责：

- **MD5 不适用于安全校验。** 它已被证明可在实际时间内构造碰撞，因此不能用它判断"文件有没有被恶意替换"。保留 MD5 的唯一原因是部分软件至今只公布 MD5 校验值，为了能与这类历史清单兼容。这一点在网页版上有明确警示。
- **哈希一致 ≠ 文件安全。** 它只说明"你手上的内容与该校验值对应的内容相同"。如果校验值本身来自被篡改的页面，结果没有意义。
- **`hashBlobNative` 只支持 SHA-256 / SHA-1。** WebCrypto 不提供 MD5，所以 MD5 没有原生交叉校验，库不会为它伪造一个"已互证"的结论。在非安全上下文（如 `file://` 或明文 HTTP 非 localhost）下 `crypto.subtle` 不可用，此时该函数返回 `null`，绝不静默返回错误值。
- **本仓库的测试与性能数字都是在上面写的那个环境里实测得到的**，其他环境可能不同。没有跑过的平台，README 里不会写成"已支持"。

---

## 贡献

见 [CONTRIBUTING.md](CONTRIBUTING.md)。变更记录见 [CHANGELOG.md](CHANGELOG.md)。

## 许可

[MIT](LICENSE) © 2026 知办库 (zhibanku.com)
