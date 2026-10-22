# 颜色对比度检测

> 在线检测前景与背景颜色对比度，自动计算 WCAG AA/AAA 评级，支持 HEX、RGB、HSL 输入，结果即时可见。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/contrast-check.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在线检测前景与背景颜色对比度，自动计算 WCAG AA/AAA 评级，支持 HEX、RGB、HSL 输入，结果即时可见。

本工具用于检测前景色与背景色之间的对比度是否满足 WCAG 无障碍标准。您只需在下方输入或选择两种颜色（支持十六进制、RGB、HSL 格式），然后点击「开始检测」按钮，系统会立即计算出对比度数值，并给出 AA 或 AAA 级别的通过评级。检测结果会显示在下方结果区域，同时提供实时预览效果。整个过程完全在浏览器本地运行，您的颜色数据不会上传到任何服务器。

## ✨ 功能特性

- 在线检测前景与背景颜色对比度
- 自动计算 WCAG AA/AAA 评级
- 支持 HEX、RGB、HSL 输入
- 结果即时可见

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/contrast-check.html>，无需安装。

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
<summary>什么是对比度？为什么重要？</summary>

对比度是前景色与背景色之间亮度差异的数值比例，数值越高越容易辨认。WCAG 无障碍标准要求文本与背景达到一定对比度，确保低视力用户也能清晰阅读。
</details>
<details>
<summary>AA 和 AAA 有什么区别？</summary>

AA 是基本无障碍标准，普通文本需 4.5:1，大文本需 3:1；AAA 是增强标准，普通文本需 7:1，大文本需 4.5:1。AAA 更严格，适合对可读性要求高的场景。
</details>
<details>
<summary>为什么我输入的颜色解析失败？</summary>

请检查颜色格式是否为 HEX（如 #ff0000）、RGB（如 rgb(255,0,0)）或 HSL（如 hsl(0,100%,50%)）。注意 RGB 值范围是 0-255，HSL 的饱和度与亮度是百分比。
</details>
<details>
<summary>这个工具需要联网吗？</summary>

完全不需要。所有计算逻辑都在您的浏览器本地运行，没有任何网络请求，您的颜色数据不会离开您的设备。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`358db03b65395a581756296a37d36d49d1de013ce88524dbda88607bdf48dd79`
- **体积**：20588 字节（约 20.1 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/contrast-check.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/contrast-check>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/contrast-check>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
