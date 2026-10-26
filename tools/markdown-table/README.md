# Markdown 表格转换器

> 粘贴 CSV、制表符分隔或管道符数据，一键转换为 Markdown 表格，支持对齐与复制。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/markdown-table.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

粘贴 CSV、制表符分隔或管道符数据，一键转换为 Markdown 表格，支持对齐与复制。

本工具用于把 CSV、制表符分隔或管道符分隔的文本数据，一键转换为规范的 Markdown 表格。您只需在下方输入框粘贴原始数据，选择对应的分隔方式，点击「转换为表格」按钮，转换结果会立即显示在结果区。您还可以点击「复制结果」按钮将表格复制到剪贴板，方便粘贴到文档、博客或代码仓库中。整个过程完全在浏览器本地完成，数据不会上传到任何服务器。

## ✨ 功能特性

- 粘贴 CSV、制表符分隔或管道符数据
- 一键转换为 Markdown 表格
- 支持对齐与复制

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/markdown-table.html>，无需安装。

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
<summary>支持哪些输入格式</summary>

支持逗号分隔的 CSV、制表符分隔的 TSV 以及管道符分隔的文本。第一行会被识别为表头，后续行作为表格数据。
</details>
<details>
<summary>数据包含逗号怎么办</summary>

如果字段内容本身包含逗号，请用英文双引号将该字段包裹起来，并选择「逗号（CSV）」模式，工具会正确解析。
</details>
<details>
<summary>转换结果能直接用在 GitHub 吗</summary>

可以。工具生成的是标准 Markdown 表格语法，GitHub、GitLab、语雀、飞书文档等主流平台都支持直接渲染。
</details>
<details>
<summary>数据会上传到服务器吗</summary>

不会。所有转换操作都在您的浏览器本地完成，数据不会离开您的设备，请放心使用。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`714b8aed15ea4cd3c45be6fef3cba3691884b3968e3b9c908864c6677e6c72c1`
- **体积**：21746 字节（约 21.2 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/markdown-table.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/markdown-table>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/markdown-table>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
