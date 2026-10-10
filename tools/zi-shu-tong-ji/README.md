# 在线字数统计 — 实时统计字数、字符与阅读时长

> 知办库免费在线字数统计工具：实时统计中文字数、字符数（含/不含空格）、句子、段落与预计阅读时长。纯前端运行，文本不上传，无需注册。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/zi-shu-tong-ji.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

知办库免费在线字数统计工具：实时统计中文字数、字符数（含/不含空格）、句子、段落与预计阅读时长。纯前端运行，文本不上传，无需注册。

「在线字数统计」会实时给出中文字数、字符数（含空格与不含空格两种口径）、句子数、段落数和预计阅读时长。把要统计的文字粘贴到页面上方的输入框，或者直接用键盘输入，下方的数字会跟着自动刷新；想重新核对一遍时，点「开始统计」按钮再算一次也行。所有结果都显示在输入框正下方的统计面板里，改一个字立刻更新，全程在浏览器本地运行，文字不会离开你的设备。

## ✨ 功能特性

- 知办库免费在线字数统计工具：实时统计中文字数、字符数（含/不含空格）、句子、段落与预计阅读时长
- 纯前端运行
- 文本不上传
- 无需注册

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/zi-shu-tong-ji.html>，无需安装。

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
<summary>这个字数统计工具收费吗？</summary>

完全免费。知办库字数统计无需注册、不限次数，长期使用不收费。
</details>
<details>
<summary>我输入的文字会被上传吗？</summary>

不会。所有统计都在你浏览器本地用 JavaScript 完成，文字不会发送到任何服务器，保护隐私。
</details>
<details>
<summary>中英文混排时字数怎么算？</summary>

每个汉字按 1 个字计算，英文单词按空格切分，所以中英文混排也能准确统计。
</details>
<details>
<summary>阅读时长是怎么估算的？</summary>

按每分钟约 300 字（中文）估算，不足 1 分钟显示「
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`337eff6c568bc214f2e00f275534aca5bd65e623eae53a201a91761d9f74f296`
- **体积**：16469 字节（约 16.1 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/zi-shu-tong-ji.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/zi-shu-tong-ji>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/zi-shu-tong-ji>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
