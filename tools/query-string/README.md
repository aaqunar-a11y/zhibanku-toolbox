# QueryString 生成解析工具

> QueryString 生成解析工具，支持 URL 查询参数与键值对互转，自动处理编码与排序。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/query-string.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

QueryString 生成解析工具，支持 URL 查询参数与键值对互转，自动处理编码与排序。

本工具用于 URL 查询字符串（QueryString）与键值对之间的双向转换。您可以在上方输入框粘贴一段带查询参数的 URL 或纯查询字符串，也可以直接输入键值对（每行一个，格式为「键=值」）。点击「解析查询字符串」按钮，即可将 URL 中的参数拆解为清晰的键值对列表；点击「生成查询字符串」按钮，则可将键值对合并为规范的查询字符串。解析结果会显示在下方结果区，同时支持一键复制。所有操作均在浏览器本地完成，数据不会上传到任何服务器。

## ✨ 功能特性

- QueryString 生成解析工具
- 支持 URL 查询参数与键值对互转
- 自动处理编码与排序

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/query-string.html>，无需安装。

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
<summary>解析时遇到中文乱码怎么办</summary>

本工具会自动进行 URL 解码，中文会正常显示。如果仍有乱码，请确认输入内容是否为标准 URL 编码格式。
</details>
<details>
<summary>生成时键或值包含特殊字符如何处理</summary>

工具会自动对特殊字符（如空格、&、=、# 等）进行 URL 编码，生成规范的查询字符串，无需手动处理。
</details>
<details>
<summary>支持解析完整 URL 吗</summary>

支持。您可以粘贴完整的 URL（包含协议、域名、路径），工具会自动提取问号后面的查询部分进行解析。
</details>
<details>
<summary>结果可以复制到剪贴板吗</summary>

可以。点击结果区下方的「复制结果」按钮，即可将结果内容复制到系统剪贴板，方便粘贴到其他地方。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`e737e8887d664cb9323064aa021f6b83f69a16423e026ef1b86701ff822b5794`
- **体积**：22187 字节（约 21.7 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/query-string.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/query-string>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/query-string>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
