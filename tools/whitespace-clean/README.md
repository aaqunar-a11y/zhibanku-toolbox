# 空白字符清理工具

> 一键清理文本中的多余空格、空行、制表符与首尾空白，支持全角空格，结果实时预览并可复制。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/whitespace-clean.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

一键清理文本中的多余空格、空行、制表符与首尾空白，支持全角空格，结果实时预览并可复制。

本工具用于清理文本中的各种空白字符，包括多余空格、空行、制表符、全角空格以及首尾空白。您只需在下方输入框中粘贴或输入需要处理的文本，然后点击「开始清理」按钮，处理后的结果会立即显示在右侧结果区域。您还可以使用「复制结果」按钮一键复制清理后的文本，方便粘贴到其他文档中。工具完全在浏览器本地运行，不会上传任何数据，请放心使用。

## ✨ 功能特性

- 一键清理文本中的多余空格、空行、制表符与首尾空白
- 支持全角空格
- 结果实时预览并可复制

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/whitespace-clean.html>，无需安装。

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
<summary>清理后文本变少了，是不是误删了内容？</summary>

不会误删有效内容。本工具只删除空白字符（空格、制表符、空行等），不会删除任何文字、数字或标点符号。
</details>
<details>
<summary>为什么清理后段落之间的空行没有了？</summary>

因为您选择了清理空行功能。如果希望保留段落间距，建议只使用清理多余空格功能，不要勾选清理空行。
</details>
<details>
<summary>全角空格和普通空格有什么区别？</summary>

全角空格是中文排版中常见的空白字符，占一个汉字宽度；普通空格是英文半角空格。两者编码不同，需要分别处理。
</details>
<details>
<summary>清理结果可以撤销吗？</summary>

本工具不提供撤销功能。建议在清理前先复制一份原始文本保存，或者使用重置按钮重新输入后再处理。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`1b66a31ae5b90f33a5867de112e9809100fafa4db8a1e720d4364d7a5ab9c814`
- **体积**：22852 字节（约 22.3 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/whitespace-clean.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/whitespace-clean>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/whitespace-clean>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
