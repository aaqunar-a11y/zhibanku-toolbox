# 离线中英翻译工具

> 离线中英互译工具：内置 1500 个核心词，可一键加载 12.4 万词完整词典并永久保存在本机。整句译文 + 逐词对照，断网可用，输入的文字全程不联网、不上传。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/offline-translator.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

离线中英互译工具：内置 1500 个核心词，可一键加载 12.4 万词完整词典并永久保存在本机。整句译文 + 逐词对照，断网可用，输入的文字全程不联网、不上传。

本工具内置 8000 个核心词，开箱即用；需要更高覆盖率时，点一次「加载完整词典」即可把 12.4 万词的完整词典下载并永久保存在你的浏览器里，之后断网也能用。整句译文 + 逐词对照一并给出，输入的文字全程留在本地，不联网、不上传。若想要更自然流畅的整句译文，可勾选「AI 流畅翻译」（联网，每日免费额度，不勾选则完全不联网）。

## ✨ 功能特性

- 离线中英互译工具：内置 1500 个核心词
- 可一键加载 12.4 万词完整词典并永久保存在本机
- 整句译文 + 逐词对照
- 断网可用
- 输入的文字全程不联网、不上传

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/offline-translator.html>，无需安装。

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
<summary>为什么有些词显示「未收录」？</summary>

内置核心词有 8000 个，遇到专业术语、长尾词会保留原文并标橙色。点击上方「加载完整词典」按钮，把 12.4 万词的完整词典下载到本机后，绝大多数常见英文单词都能查到。
</details>
<details>
<summary>加载完整词典要联网吗？之后还能离线用吗？</summary>

下载词典的那一次需要联网（约 2.4MB，走 gzip 压缩）。下载完成后会写入浏览器本地存储，此后再次打开本页不再请求网络，断网也能用完整词典。
</details>
<details>
<summary>词典数据会被更新吗？</summary>

词典文件带版本号，工具只在检测到新版本时才重新下载。你也可以随时点「重新下载词典」强制更新。
</details>
<details>
<summary>输入的文字会被上传到服务器吗？</summary>

默认不会。翻译在你的浏览器内存中完成；唯一可能的联网请求是下载词典文件本身。只有当你主动勾选「AI 流畅翻译」时，待翻译文本才会被发送到本站接口，且原文不做保存（仅保留内容摘要用于 24 小时去重缓存）。本页没有任何统计埋点。
</details>
<details>
<summary>「AI 流畅翻译」的免费额度怎么用？</summary>

勾选后每次点击翻译消耗 1 条：每个 IP 每天 10 条、全站每天 1000 条，北京时间 0 点自动重置，不用等满 24 小时。相同内容 24 小时内再次翻译命中缓存，不再消耗额度。额度用完或服务异常时会自动退回离线词典译文，不会让你空手而归。单次最多 1200 字，超长请分段。
</details>
<details>
<summary>离线词典翻译和 AI 翻译差别大吗？</summary>

离线词典是逐词对照 + 语序规则，优点是零延迟、断网可用、绝对私密，适合快速看懂大意；AI 翻译会理解整句语境，长难句和生硬结构的改善最明显，适合要直接拿去用的正式译文。两者可以同时用：先离线出结果，再勾选 AI 看润色后的版本。
</details>
<details>
<summary>怎么把这个工具长期留在电脑上？</summary>

浏览器菜单选择「网页另存为」保存本 html 文件，或下载下方压缩包解压后双击打开，之后随时离线使用，双击即可，不需要安装。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`7e7975157f3bf64e2917bc00c3611eba094efed84cc7ce43eeff832b50fc7a71`
- **体积**：249457 字节（约 243.6 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/offline-translator.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/offline-translator>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/offline-translator>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
