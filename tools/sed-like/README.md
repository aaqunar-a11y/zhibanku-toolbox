# 文本行处理工具

> 文本行处理工具：过滤、替换、取行区间、加行号，纯本地运行，无需上传数据。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/sed-like.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

文本行处理工具：过滤、替换、取行区间、加行号，纯本地运行，无需上传数据。

「文本行处理工具」是一款纯本地运行的文本行级处理器，支持按行过滤、替换、取行区间和加行号等常用操作。您只需在左侧输入框中粘贴或输入原始文本，然后选择需要的处理方式并点击对应的操作按钮，处理结果会实时显示在右侧结果区。无需上传数据到服务器，所有处理均在您的浏览器本地完成，保护您的数据隐私。

## ✨ 功能特性

- 文本行处理工具：过滤、替换、取行区间、加行号
- 纯本地运行
- 无需上传数据

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/sed-like.html>，无需安装。

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
<summary>过滤操作支持正则表达式吗？</summary>

目前不支持正则表达式，仅支持普通文本关键词的包含匹配。如需正则功能，请使用专业的正则测试工具。
</details>
<details>
<summary>替换操作会修改原始文本吗？</summary>

不会。所有操作都是基于原始文本的副本进行，原始输入内容不会被修改，您可以放心多次尝试不同操作。
</details>
<details>
<summary>取行区间时行号从几开始算？</summary>

行号从 1 开始计数，第一行对应行号 1。如果输入文本末尾有空行，空行也会被计入行数。
</details>
<details>
<summary>处理大量文本时会不会卡顿？</summary>

对于普通大小的文本（几万行以内）处理速度很快。如果文本特别大（几十万行以上），建议分批次处理以避免浏览器卡顿。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`89836ef42c444a445d03268ddb51dd389facd8f8f6278a85f2a850091f1187aa`
- **体积**：22161 字节（约 21.6 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/sed-like.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/sed-like>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/sed-like>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
