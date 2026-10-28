# XML 格式化工具

> XML 格式化与压缩校验工具，支持缩进调整、标签闭合检查，全程本地处理。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/xml-format.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

XML 格式化与压缩校验工具，支持缩进调整、标签闭合检查，全程本地处理。

本工具用于格式化、压缩和校验 XML 内容。您可以在下方输入框中粘贴或直接输入 XML 代码，点击「格式化」按钮即可得到缩进整齐、结构清晰的 XML；点击「压缩」按钮可去除多余空白；点击「校验」按钮可检查标签闭合与语法错误。格式化结果会显示在下方结果区，并支持一键复制。所有处理均在您的浏览器本地完成，不会上传任何数据。

## ✨ 功能特性

- XML 格式化与压缩校验工具
- 支持缩进调整、标签闭合检查
- 全程本地处理

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/xml-format.html>，无需安装。

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
<summary>格式化后 XML 结构乱了怎么办</summary>

请检查原始 XML 是否包含未闭合的标签或非法字符。可先点击「校验」按钮查看具体错误位置，修正后再格式化。
</details>
<details>
<summary>支持处理带命名空间的 XML 吗</summary>

支持。工具会保留 xmlns 属性，并按标准方式处理带前缀的标签。但不会验证命名空间 URI 的有效性。
</details>
<details>
<summary>压缩模式会删除哪些内容</summary>

压缩会移除标签之间的空白字符、多余换行和缩进，但会保留 CDATA 内部内容和注释。XML 声明也会保留。
</details>
<details>
<summary>结果区的内容可以编辑吗</summary>

结果区为只读模式，防止误操作。如需修改格式化结果，请复制到输入区调整后再重新格式化。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`830dfe86de3dbdb57ede768f23cee16b2a24cec893a468b11daf400c764cfac8`
- **体积**：22178 字节（约 21.7 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/xml-format.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/xml-format>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/xml-format>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
