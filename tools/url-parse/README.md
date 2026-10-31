# URL 解析工具

> URL 解析工具：粘贴链接一键拆解协议、主机、端口、路径与查询参数，逐项展示并支持复制结果。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/url-parse.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

URL 解析工具：粘贴链接一键拆解协议、主机、端口、路径与查询参数，逐项展示并支持复制结果。

本工具用于将一段完整的网址（URL）拆解成协议、主机名、端口、路径、查询参数等组成部分，并逐项清晰展示。您只需在下方输入框中粘贴或输入网址，然后点击「解析 URL」按钮，结果就会在下方区域按条目列出，查询参数还会以表格形式呈现。整个过程完全在您的浏览器本地运行，不会把数据发送到任何服务器，请放心使用。

## ✨ 功能特性

- URL 解析工具：粘贴链接一键拆解协议、主机、端口、路径与查询参数
- 逐项展示并支持复制结果

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/url-parse.html>，无需安装。

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
<summary>为什么我输入网址后提示解析失败</summary>

最常见原因是网址缺少协议头（如 http:// 或 https://）。请补全协议后再试，例如将 www.example.com 改为 https://www.example.com。
</details>
<details>
<summary>查询参数里的中文显示为乱码怎么办</summary>

这是 URL 编码的正常现象。本工具展示的是原始编码值，如需查看解码后的中文，请复制参数值到 URL 编解码工具中进行解码。
</details>
<details>
<summary>端口号没有显示出来是什么情况</summary>

当网址没有显式写端口时，工具会显示「默认端口」并标注该协议的标准端口号。例如 HTTPS 默认 443，HTTP 默认 80。
</details>
<details>
<summary>解析结果会保存在服务器上吗</summary>

不会。本工具是纯前端实现，所有解析逻辑都在您的浏览器中运行，没有任何数据上传，关闭页面即完全清除。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`a548bc7492010d32c940a7ab5f6e0971c813a6aa568ceb03a5ba1bf76d188efb`
- **体积**：21517 字节（约 21.0 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/url-parse.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/url-parse>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/url-parse>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
