# 字数统计

> 即时统计任意文本的单词、字符与行数，估算阅读时间，完全本地。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/word-counter.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

即时统计任意文本的单词、字符与行数，估算阅读时间，完全本地。

「字数统计」能即时算出一段文字的单词数、字符数和行数，还会顺带给出预计阅读时间。用起来很简单：打开页面，把文字粘贴到上方的输入框，或者点「选择文件」上传一个纯文本文件，然后点「开始统计」按钮，单词、字符、行数和阅读时间就会显示在输入框下方的结果区。统计全程在浏览器本地完成，不上传服务器，改几个字再点一次就能看到最新数字，写稿、交作业、核对字数限制都够用。

## ✨ 功能特性

- 即时统计任意文本的单词、字符与行数
- 估算阅读时间
- 完全本地

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/word-counter.html>，无需安装。

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
<summary>阅读时间？</summary>

按约每分钟 200 词估算。
</details>
<details>
<summary>CJK 文本？</summary>

CJK 字符按字符计，不拆分为词。
</details>
<details>
<summary>能直接上传 Word 文档吗</summary>

目前只接受纯文本文件，Word、PDF 这类带格式的文档读不了。最省事的做法是打开文档，全选复制正文，直接粘贴到输入框里统计。
</details>
<details>
<summary>统计结果会自动保存吗</summary>

不会。页面刷新或关闭后数据就清空了，需要留档的话先把结果复制到别处，或者截图存档，避免白统计一遍。
</details>
<details>
<summary>粘贴过来的带格式文字会影响统计吗</summary>

不影响数字。粘贴时格式会被丢掉，只保留文字本身，加粗、颜色、字号都不参与计数，统计的就是纯字符和单词。
</details>
<details>
<summary>空行和连续空格算不算</summary>

空格计入字符数，但不单独算成一个单词；空行会计入行数，连续多个空格按实际字符逐个累加，不会被自动合并。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`7822e8568703beb104739eee48ebb3af4d5c563233669a87e70c48486b10c576`
- **体积**：16650 字节（约 16.3 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/word-counter.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/word-counter>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/word-counter>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
