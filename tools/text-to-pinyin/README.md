# 汉字转拼音工具

> 汉字转拼音，支持声调与首字母，批量转换一键复制，本地处理不传服务器。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/text-to-pinyin.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

汉字转拼音，支持声调与首字母，批量转换一键复制，本地处理不传服务器。

本工具用于将中文汉字批量转换为拼音，支持带声调、不带声调以及仅输出首字母三种模式。您只需在下方输入框中粘贴或输入中文内容，然后点击「开始转换」按钮，转换结果会立即显示在下方结果区域。整个转换过程完全在您的浏览器本地完成，不会上传任何数据到服务器，可放心处理敏感文本。

## ✨ 功能特性

- 汉字转拼音
- 支持声调与首字母
- 批量转换一键复制
- 本地处理不传服务器

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/text-to-pinyin.html>，无需安装。

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
<summary>转换结果中的声调数字是什么意思</summary>

声调数字 1-4 分别代表一声、二声、三声、四声，例如 nǐ 会显示为 ni3 或 nǐ，取决于您选择的模式。带声调模式直接显示声调符号，不带声调模式则去掉声调。
</details>
<details>
<summary>为什么有些多音字转出来读音不对</summary>

本工具使用常用读音字典，无法根据上下文智能判断多音字读音。例如「银行」的「行」会读 háng 而非 xíng。建议转换后人工核对关键多音字。
</details>
<details>
<summary>可以转换繁体中文吗</summary>

本工具主要针对简体中文设计，繁体字可能无法正确转换或直接保留原字符。建议先使用繁转简工具处理后再进行拼音转换。
</details>
<details>
<summary>转换大量文本会卡顿吗</summary>

转换在浏览器本地执行，超过 5000 字可能会有轻微卡顿。建议分批转换，或使用「仅首字母」模式提高处理速度。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`4f4acd21b915ef6a209d71ce8d10d20ce0c7698564c6a8a1a23c32e3eda58f0e`
- **体积**：23544 字节（约 23.0 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/text-to-pinyin.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/text-to-pinyin>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/text-to-pinyin>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
