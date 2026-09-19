# UUID 批量生成器

> 批量生成 UUID v4 / v7，格式化导出为 SQL / JSON / CSV，加密级随机数，本地运行。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/uuid-generator.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在线 UUID 生成器：批量生成 UUID v4（随机）与 v7（时间有序，适合做主键），支持大写、去连字符、加前后缀、单引号 CSV 等格式导出。使用浏览器加密级随机数，结果不上传。

一次生成成百上千个 UUID，支持 v4（纯随机）与 v7（时间有序），并可导出为 SQL、JSON、CSV 等格式。

## ✨ 功能特性

- 在线 UUID 生成器：批量生成 UUID v4（随机）与 v7（时间有序
- 适合做主键）
- 支持大写、去连字符、加前后缀、单引号 CSV 等格式导出
- 使用浏览器加密级随机数
- 结果不上传

## ⚙️ 工作原理

随机源是 crypto.getRandomValues()，与浏览器生成会话密钥用的是同一个加密级随机数发生器，不是 Math.random()。这样得到的 v4 不可预测，适合做不可猜测的标识符。 格式化时把版本位（第 7 个十六进制位固定为 4）和变体位（第 9 个十六进制位固定为 8/9/a/b）写死，这是 RFC 4122 的硬性要求——少了这两步，得到的只是「长得像 UUID 的随机串」，很多数据库与校验库会拒收。 v7 的前 48 位是毫秒级 Unix 时间戳，其余为随机位，因此按字典序排序即近似按时间排序，对 B+ 树主键非常友好，能显著减少随机写入带来的页分裂。同一毫秒内生成的多个 UUID 由计数器保证递增。

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/uuid-generator.html>，无需安装。

### 离线使用（推荐）

1. 下载本目录的 [`index.html`](index.html)；
2. 双击用任意现代浏览器打开即可，无需联网、无需安装。

### 自行部署

把 `index.html` 放到任意静态服务器、GitHub / Gitee Pages 或内网共享目录即可。

## 🔒 隐私与安全

- 所有计算在**浏览器本地**完成，不发起任何网络请求；
- 输入数据**不上传**到任何服务器；
- 不写 Cookie、不使用 localStorage、不做任何埋点；
- 可用浏览器开发者工具「网络」面板自行验证。

## 🛠 技术实现

- 单文件 HTML：CSS 与 JavaScript 全部内联；
- 零第三方依赖、零构建步骤、不引用任何 CDN；
- 兼容现代桌面与移动浏览器。

## ❓ 常见问题

<details>
<summary>生成的 UUID 会重复吗？</summary>

v4 的碰撞概率极低：需要生成约 2.7×10¹⁸ 个才有 50% 概率出现一次碰撞。实践中可以忽略，但数据库层面仍建议保留唯一索引。
</details>
<details>
<summary>结果会被记录或上传吗？</summary>

不会。页面没有网络请求，也不写 Cookie 或 localStorage，刷新即消失。你可以打开开发者工具的网络面板验证。
</details>
<details>
<summary>为什么有的库说我的 UUID 不合法？</summary>

多半是版本位或变体位不对。手写的随机串常常只是「32 位十六进制」，缺少第 13 位固定为 4、第 17 位为 8/9/a/b 的约束。用本工具生成的一定符合 RFC 4122 / RFC 9562。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`566e1a00c8de307f5798c4cf5bd541d6731ecf8ffe986b3034f6078844f83646`
- **体积**：12546 字节（约 12.3 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/uuid-generator.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/uuid-generator>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/uuid-generator>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
