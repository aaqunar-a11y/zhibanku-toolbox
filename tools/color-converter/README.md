# 颜色格式转换器

> HEX/RGB/HSL/HSV 互转 + WCAG 对比度检测 + 明暗色阶。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/color-converter.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在线颜色转换工具：HEX、RGB、HSL、HSV 互转，实时取色、生成明暗色阶，并按 WCAG 计算前景背景对比度是否达到 AA / AAA 无障碍标准。纯浏览器本地运行。

HEX、RGB、HSL、HSV 互转，自动生成明暗色阶，并按 WCAG 标准算出文字与背景的对比度是否达标。

## ✨ 功能特性

- 在线颜色转换工具：HEX、RGB、HSL、HSV 互转
- 实时取色、生成明暗色阶
- 并按 WCAG 计算前景背景对比度是否达到 AA / AAA 无障碍标准
- 纯浏览器本地运行

## ⚙️ 工作原理

任何输入都会被归一化成 {r,g,b} 三个 0–255 的通道值，再从这一份中间表示生成其余格式，所以四种写法永远一致。HEX 支持 #abc 简写与 #aabbcc 全写；rgb() / hsl() 用正则解析，兼容逗号与空格分隔。 对比度按 WCAG 2.1 的相对亮度公式计算：先把 sRGB 通道做伽马还原（c/255 后大于 0.03928 时取 ((c+0.055)/1.055)^2.4），加权得到亮度 L = 0.2126R + 0.7152G + 0.0722B，再做 (L1+0.05)/(L2+0.05)。正文文字需达到 4.5:1（AA），大号文字需 3:1。

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/color-converter.html>，无需安装。

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
<summary>HSL 的 L 和 HSV 的 V 有什么区别？</summary>

HSL 里 L=50% 是纯色，最亮最暗都趋近白黑；HSV 里 V=100% 已经是最亮，饱和度和明度是独立的两根轴。设计取色时用 HSL 更直观，调色板算法里常用 HSV。
</details>
<details>
<summary>为什么两个颜色看起来差很多，对比度却不高？</summary>

相对亮度是按人眼敏感度加权的（绿色权重最高 0.7152，蓝色最低 0.0722）。所以深蓝与深红的观感差异不小，亮度却接近，对比度自然偏低。
</details>
<details>
<summary>色阶是干什么用的？</summary>

给出同一色相从浅到深的 9 档，方便补齐 hover / active / 边框 / 背景等状态色。点击任意一格即可切换为当前颜色。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`3dd625ff26409f98056b72ae88596dc65ed7d7e23ec1ce6961bcb58ba997d4dd`
- **体积**：12496 字节（约 12.2 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/color-converter.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/color-converter>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/color-converter>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
