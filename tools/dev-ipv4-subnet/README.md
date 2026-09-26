# IPv4 子网计算器

> 在线 IPv4 子网计算器：输入 IP 或 CIDR（如 192.168.1.10/24），一键算出子网掩码、网络地址、广播地址、可用主机范围与主机数量，并识别 A/B/C 类与私有地址。纯本地计算。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/dev-ipv4-subnet.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在线 IPv4 子网计算器：输入 IP 或 CIDR（如 192.168.1.10/24），一键算出子网掩码、网络地址、广播地址、可用主机范围与主机数量，并识别 A/B/C 类与私有地址。纯本地计算。

输入「IP/掩码长度」或「IP + 掩码」，立即得到网段、广播地址、可用主机范围与主机数。

## ✨ 功能特性

- 在线 IPv4 子网计算器：输入 IP 或 CIDR（如 192.168.1.10/24）
- 一键算出子网掩码、网络地址、广播地址、可用主机范围与主机数量
- 并识别 A/B/C 类与私有地址
- 纯本地计算

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/dev-ipv4-subnet.html>，无需安装。

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
<summary>/31 和 /32 为什么可用主机数不是「总数减 2」？</summary>

两个特例：/32 表示单个主机（如环回地址），可用主机数是 1；/31 按 RFC 3021 可用于点对点链路，两个地址都可用，共 2 个，没有网络与广播的保留。
</details>
<details>
<summary>私有地址有哪些？</summary>

RFC 1918 定义了三个网段：10.0.0.0/8、172.16.0.0/12、192.168.0.0/16。它们不会在公网路由，家用路由器与内网普遍使用。
</details>
<details>
<summary>为什么示例里 203.0.113.7 是公网地址？</summary>

它属于 RFC 5737 保留的文档示例网段（203.0.113.0/24），专门用于教学与文档，不会真实出现在互联网上。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`88b0205cf0302556a7644f9bee7e814b577f36c6aee8c68455bcd62358cec047`
- **体积**：12813 字节（约 12.5 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/dev-ipv4-subnet.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/dev-ipv4-subnet>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/dev-ipv4-subnet>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
