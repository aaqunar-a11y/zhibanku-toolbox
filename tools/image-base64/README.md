# 图片转 Base64

> 在线图片转 Base64 工具：选择本地图片即可生成 Base64 编码与 data:image 的 Data URI，并显示原始大小与编码后长度。图片不会上传，全部在浏览器本地转换，适合前端内联小图标与调试。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/image-base64.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在线图片转 Base64 工具：选择本地图片即可生成 Base64 编码与 data:image 的 Data URI，并显示原始大小与编码后长度。图片不会上传，全部在浏览器本地转换，适合前端内联小图标与调试。

选择本地图片，生成 Base64 编码与可直接用于 CSS/HTML 的 Data URI。图片不上传。

## ✨ 功能特性

- 在线图片转 Base64 工具：选择本地图片即可生成 Base64 编码与 data:image 的 Data URI
- 并显示原始大小与编码后长度
- 图片不会上传
- 全部在浏览器本地转换
- 适合前端内联小图标与调试

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/image-base64.html>，无需安装。

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
<summary>为什么编码后的字符串比原图大？</summary>

Base64 用 4 个可打印字符表示 3 个字节，理论膨胀率约 33%。若图片本身已是压缩格式（JPG/WebP），编码不会二次压缩，只会变大。
</details>
<details>
<summary>图片会上传到服务器吗？</summary>

不会。文件通过浏览器的 FileReader 在本地读取，页面没有任何上传请求。可以在开发者工具的网络面板确认。
</details>
<details>
<summary>支持 SVG 和 GIF 吗？</summary>

支持。选择任意 image/* 文件都会按 MIME 类型生成对应前缀，例如 data:image/svg+xml;base64,…。SVG 若为纯文本，也可以直接内联而无需 Base64。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`d15b132d435783059adb34358504af31617ef1d1da20eadff7545bde9a32edd8`
- **体积**：10841 字节（约 10.6 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/image-base64.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/image-base64>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/image-base64>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
