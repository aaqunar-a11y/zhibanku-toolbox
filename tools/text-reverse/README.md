# 文本反转工具

> 文本反转工具，支持整段倒序、逐行倒序、逐字倒序，一键复制结果，纯本地处理不传数据。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/text-reverse.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

文本反转工具，支持整段倒序、逐行倒序、逐字倒序，一键复制结果，纯本地处理不传数据。

文本反转工具是一款纯本地运行的文本处理工具，支持整段倒序、逐行倒序、逐字倒序三种反转模式。您只需在左侧输入框中粘贴或输入需要反转的文本内容，然后点击对应的反转按钮（如「整段倒序」「逐行倒序」「逐字倒序」），处理后的结果会立即显示在下方结果区域中。整个过程完全在您的浏览器本地完成，不会上传任何数据到服务器，可以放心处理敏感内容。工具还提供快捷预设按钮，方便快速切换常见反转方式。

## ✨ 功能特性

- 文本反转工具
- 支持整段倒序、逐行倒序、逐字倒序
- 一键复制结果
- 纯本地处理不传数据

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/text-reverse.html>，无需安装。

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
<summary>反转后中文乱码怎么办</summary>

中文乱码通常是因为文本编码不一致导致。请确保输入文本为 UTF-8 编码，本工具默认按 UTF-8 处理，一般不会出现乱码问题。
</details>
<details>
<summary>可以反转多行文本吗</summary>

可以。本工具支持多行文本处理，选择逐行倒序模式即可反转行的顺序，选择整段倒序则会将所有内容视为一个整体反转。
</details>
<details>
<summary>反转结果能保存吗</summary>

反转结果会显示在结果区域，您可以手动复制保存。本工具不提供自动保存功能，刷新页面后数据会清空。
</details>
<details>
<summary>支持手机端使用吗</summary>

支持。页面采用响应式设计，在手机浏览器上也能正常使用，输入框和按钮会自动适配屏幕宽度。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`6c1efeaa7c4daf505d6bb4ede513de19972cd5c2569f5b16c1b39de509bf9388`
- **体积**：21617 字节（约 21.1 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/text-reverse.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/text-reverse>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/text-reverse>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
