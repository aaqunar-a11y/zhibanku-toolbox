# 字数统计

> 在线字数统计工具：实时统计字符数（含/不含空格）、中文字符数、英文单词数、段落数、行数与句子数，并估算阅读时长。适合公众号、论文、文案与自媒体写作，文本仅在本地统计。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/word-count.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在线字数统计工具：实时统计字符数（含/不含空格）、中文字符数、英文单词数、段落数、行数与句子数，并估算阅读时长。适合公众号、论文、文案与自媒体写作，文本仅在本地统计。

字数统计工具帮你快速摸清一段文字的规模。把文章粘贴到上方文本框或直接输入，页面会实时统计字符数（含空格与不含空格）、中文字符数、英文单词数、段落数、行数、句子数，并估算阅读时长，各项数字显示在文本框下方的统计面板里。改一个字数字就跟着变；想换一段内容，点文本框旁的「清空」按钮重新粘贴即可，统计全程在浏览器本地完成。

## ✨ 功能特性

- 在线字数统计工具：实时统计字符数（含/不含空格）、中文字符数、英文单词数、段落数、行数与句子数
- 并估算阅读时长
- 适合公众号、论文、文案与自媒体写作
- 文本仅在本地统计

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/word-count.html>，无需安装。

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
<summary>为什么 Word 的字数和这里不一样？</summary>

Word 的「字数」通常把连续中文按「字符」计，同时把英文按「单词」计，再加起来；且标点是否计入各版本有差异。以投稿平台的要求为准，用本工具的中文/英文分项数据对照即可。
</details>
<details>
<summary>emoji 和标点算不算？</summary>

「字符（含空格）」计入全部可见字符；「中文字符」只计汉字，不含标点与 emoji。这样设计是为了贴合以「汉字数」计价或限字的场景。
</details>
<details>
<summary>文本会被保存或上传吗？</summary>

不会。统计全部在浏览器本地完成，刷新即清空，页面没有任何网络请求。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`7cdd6cf5d3a15357d5c4d84425c1fa03a2f2dd252cb3651633803b922ae01fb0`
- **体积**：15638 字节（约 15.3 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/word-count.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/word-count>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/word-count>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
