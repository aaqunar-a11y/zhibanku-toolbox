# 宽高比计算器

> 宽高比计算器，输入宽高比与一边数值，自动推算另一边，支持常见比例预设与一键复制结果。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/aspect-ratio.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

宽高比计算器，输入宽高比与一边数值，自动推算另一边，支持常见比例预设与一键复制结果。

宽高比计算器用于根据已知的宽高比（例如 16:9、4:3）和其中一边的实际数值，自动推算出另一边应该取多少。您只需在下方输入宽高比的分子与分母，再填写宽度或高度中的任意一个数值，点击「计算另一边」按钮，结果就会显示在下方结果区域。本工具支持常见的视频、图片、屏幕比例预设，一键填入即可，适合做海报、视频尺寸、响应式布局时快速换算。

## ✨ 功能特性

- 宽高比计算器
- 输入宽高比与一边数值
- 自动推算另一边
- 支持常见比例预设与一键复制结果

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/aspect-ratio.html>，无需安装。

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
<summary>计算结果的精度如何</summary>

结果保留 4 位小数，对于绝大多数设计场景足够使用。若需要更高精度，可自行用计算器继续处理。
</details>
<details>
<summary>可以输入小数比例吗</summary>

可以。宽高比分子分母都支持小数，例如 1.5:1 或 2.35:1，系统会按实际数值计算。
</details>
<details>
<summary>为什么两个实际值都填了会报错</summary>

本工具的设计目的是推算未知边，因此只接受一个实际值。若您已知两边想反推比例，请使用其他比例计算工具。
</details>
<details>
<summary>数据会泄露吗</summary>

不会。所有计算都在浏览器本地完成，没有任何网络请求，您的数据不会离开设备。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`33e30b2ac4f4ddd424b54391688596b53ad410eb79c470664578de824070a192`
- **体积**：16715 字节（约 16.3 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/aspect-ratio.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/aspect-ratio>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/aspect-ratio>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
