# TOML 与 JSON 互转工具

> TOML 与 JSON 双向转换并格式化，本地完成，支持复制结果。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/toml-json.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

TOML 与 JSON 双向转换并格式化，本地完成，支持复制结果。

本工具用于在 TOML 与 JSON 两种数据格式之间进行双向转换。您只需在左侧输入框中粘贴原始内容，然后点击「TOML 转 JSON」或「JSON 转 TOML」按钮，转换结果会立即显示在下方结果区。整个过程完全在您的浏览器本地完成，数据不会上传到任何服务器。转换结果支持一键复制，方便您直接用于配置文件或开发调试。

## ✨ 功能特性

- TOML 与 JSON 双向转换并格式化
- 本地完成
- 支持复制结果

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/toml-json.html>，无需安装。

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
<summary>转换失败提示语法错误怎么办</summary>

请检查输入内容是否符合 TOML 或 JSON 的语法规范。特别注意引号是否闭合、逗号是否遗漏、键名是否合法。
</details>
<details>
<summary>TOML 中的日期时间会变成什么</summary>

TOML 的日期时间类型（如 1979-05-27T07:32:00Z）在转换为 JSON 时会变成 ISO 8601 格式的字符串，例如 1979-05-27T07:32:00.000Z。
</details>
<details>
<summary>JSON 中的 null 值能转换吗</summary>

不能。TOML 格式没有 null 类型，遇到 JSON 中的 null 值会报错。建议先将 null 替换为其他值或移除该字段。
</details>
<details>
<summary>支持大文件转换吗</summary>

受浏览器性能限制，建议输入内容不超过 1MB。过大的文件可能导致页面卡顿或内存不足。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`55a33f1e0d87549e67818547b42cff418652f9cb4bb2c6e925a735c705e70f40`
- **体积**：32833 字节（约 32.1 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/toml-json.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/toml-json>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/toml-json>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
