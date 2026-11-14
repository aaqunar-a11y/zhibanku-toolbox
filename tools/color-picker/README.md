# 取色器

> 本地取色器，支持 HEX、RGB、HSL 色值互转，一键复制，快捷预设常用色，无需上传，保护隐私。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/color-picker.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

本地取色器，支持 HEX、RGB、HSL 色值互转，一键复制，快捷预设常用色，无需上传，保护隐私。

这是一款纯本地运行的取色与色值互转工具，您可以在下方色块中直接点选颜色，或在输入框中手动输入 HEX、RGB、HSL 任意一种格式的色值，然后点击「转换色值」按钮，即可在结果区看到三种格式的完整色值。每个结果旁都有「复制」按钮，方便您一键复制到剪贴板。工具还提供了 5 个快捷预设按钮，覆盖常用颜色，点一下即可快速取色。所有计算均在您的浏览器内完成，不会上传任何数据。

## ✨ 功能特性

- 本地取色器
- 支持 HEX、RGB、HSL 色值互转
- 一键复制
- 快捷预设常用色
- 无需上传
- 保护隐私

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/color-picker.html>，无需安装。

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
<summary>为什么我输入的 RGB 颜色转换后结果不对</summary>

请检查 RGB 格式是否为 rgb(0-255, 0-255, 0-255) 或 rgb(0%-100%, 0%-100%, 0%-100%)，数值之间用英文逗号分隔，不要带多余空格。
</details>
<details>
<summary>支持带透明度的颜色吗</summary>

支持。HEX 格式可输入 8 位（如 #1A5FE080），RGB 格式可输入 rgba(26, 95, 224, 0.5)，HSL 格式可输入 hsla(219, 82%, 49%, 0.5)。
</details>
<details>
<summary>复制按钮没有反应怎么办</summary>

请确认浏览器是否为最新版本，并检查是否开启了剪贴板权限。部分浏览器在非安全上下文（如 http 协议）下会限制剪贴板功能。
</details>
<details>
<summary>颜色预览区域显示的颜色和实际有色差</summary>

不同显示器的色彩表现存在差异，这是硬件特性导致的正常现象。建议在专业显示器上校准色彩后使用。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`732b58282aeba02f1be7db7fc900a027ddfc41e55d87d85ce2d1a0f09596167d`
- **体积**：21151 字节（约 20.7 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/color-picker.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/color-picker>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/color-picker>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
