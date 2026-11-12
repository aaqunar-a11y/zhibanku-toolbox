# 💾 数据容量换算工具

> 数据容量换算工具，支持字节、KB、MB、GB、TB 等单位的实时互转，提供二进制与十进制两种进制标准，一键复制结果。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/data-size.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

数据容量换算工具，支持字节、KB、MB、GB、TB 等单位的实时互转，提供二进制与十进制两种进制标准，一键复制结果。

本工具用于数据存储容量的在线换算，支持字节（B）、千字节（KB）、兆字节（MB）、吉字节（GB）、太字节（TB）等常见单位之间的互转。您只需在输入框中填写数值并选择对应的原始单位，然后点击「开始换算」按钮，所有单位的换算结果就会立即显示在下方结果区域中。工具同时支持二进制（1KB=1024B）和十进制（1KB=1000B）两种进制标准，您可以根据实际需求切换。换算结果清晰列出每个单位对应的数值，并支持一键复制，方便您直接使用。

## ✨ 功能特性

- 数据容量换算工具
- 支持字节、KB、MB、GB、TB 等单位的实时互转
- 提供二进制与十进制两种进制标准
- 一键复制结果

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/data-size.html>，无需安装。

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
<summary>为什么硬盘标称 500GB 但系统显示只有 465GB</summary>

硬盘厂商使用十进制（1GB=1000MB）标注容量，而操作系统使用二进制（1GB=1024MB）计算，两者换算差异导致显示容量小于标称值。
</details>
<details>
<summary>二进制和十进制有什么区别</summary>

二进制以 1024 为进位基数，十进制以 1000 为进位基数。二进制常用于计算机内部计算，十进制常用于存储设备厂商标注容量。
</details>
<details>
<summary>可以换算 PB 或更大的单位吗</summary>

本工具支持到 PB 级别，更大单位如 EB、ZB 暂不支持。如需换算更大单位，建议先换算为 TB 再手动计算。
</details>
<details>
<summary>结果可以保留几位小数</summary>

结果默认保留 6 位有效数字，对于极大或极小的数值会自动使用科学计数法显示，确保精度和可读性。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`f7c68b98ff8b1ec3e523a46a4ad8ed7b9a8324d7786d64160048aaae010f0494`
- **体积**：26658 字节（约 26.0 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/data-size.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/data-size>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/data-size>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
