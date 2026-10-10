# Base64 文件编码器

> 本地将任意文件编码为 Base64 字符串或 Data URI，支持拖拽选择、一键复制与导出，文件不上传服务器。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/base64-file-encoder.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

本地将任意文件编码为 Base64 字符串或 Data URI，支持拖拽选择、一键复制与导出，文件不上传服务器。

Base64 文件编码器能在本地把任意文件转成 Base64 字符串或 Data URI，图片、字体、小音频都行，文件全程不上传服务器。把文件拖进页面上方的拖拽区域，或者点「选择文件」从本地挑一个，选好后点「开始编码」，编码结果会显示在下方的结果框里，可以点「复制结果」直接粘走，也可以点「导出文本」存成一个 txt 文件。

## ✨ 功能特性

- 本地将任意文件编码为 Base64 字符串或 Data URI
- 支持拖拽选择、一键复制与导出
- 文件不上传服务器

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/base64-file-encoder.html>，无需安装。

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
<summary>大文件能转吗</summary>

建议控制在几兆以内，文件越大生成的文本越长，浏览器处理起来会变慢甚至卡住。
</details>
<details>
<summary>文件会上传吗</summary>

不会，读取和编码都在本地浏览器完成，网络面板里看不到任何上传请求。
</details>
<details>
<summary>生成的 Data URI 怎么用</summary>

直接粘到图片的地址属性或样式表的背景地址里，浏览器会自动还原成原文件。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`8f5f7d170f87d44423ce238108bd71004f6731aa1e93788093035d7b86c897d8`
- **体积**：13004 字节（约 12.7 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/base64-file-encoder.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/base64-file-encoder>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/base64-file-encoder>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
