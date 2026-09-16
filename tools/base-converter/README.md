# 进制转换器

> 2–36 任意进制互转，BigInt 精确无误差，支持大整数与分组显示。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/base-converter.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在线进制转换工具：2 到 36 任意进制互转，支持超大整数（BigInt 精确计算不丢精度）、大小写、带前缀输出与按位分组显示。纯浏览器本地运行。

2 到 36 任意进制互转。使用 BigInt 精确计算，超过 2⁵³ 的大整数也不会丢精度。

## ✨ 功能特性

- 在线进制转换工具：2 到 36 任意进制互转
- 支持超大整数（BigInt 精确计算不丢精度）、大小写、带前缀输出与按位分组显示
- 纯浏览器本地运行

## ⚙️ 工作原理

解析时逐字符查表得到该位的数值，累加 result = result × 进制 + 位值。全程使用 BigInt，因此 64 位甚至几百位的整数都能精确转换——用普通 JavaScript 数字，超过 2⁵³−1 就会静默丢精度，这是解析 ID、哈希、时间戳时最隐蔽的 bug 来源。 输出时反复取余与整除，再把余数映射回字符。负数会保留符号，小数与科学计数法不支持（进制转换本身只对整数有明确定义）。

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/base-converter.html>，无需安装。

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
<summary>为什么输入超过 16 位数字时结果不对？</summary>

这是 JavaScript 数字精度的限制（安全整数上限约 9×10¹⁵）。本工具用 BigInt 规避了这个问题，但请确保输入时不要包含小数点或指数记号，否则工具会拒绝并提示。
</details>
<details>
<summary>支持负数吗？</summary>

支持，会保留负号。但进制转换中的「补码」是另一种语义——如果你需要的是 32 位补码表示，请先用本工具算出无符号值，再自行按位数取反加一。
</details>
<details>
<summary>结果如何复制？</summary>

点击结果表格里的任意一行即可复制该行的值，适合直接粘进代码或配置里。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`0227b8056ed2c0c0340e1998d5e68928841b44590bf74c41b224e25f2e3902e1`
- **体积**：12699 字节（约 12.4 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/base-converter.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/base-converter>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/base-converter>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
