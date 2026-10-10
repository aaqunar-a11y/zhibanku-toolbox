# Base64 编码

> 以正确的 UTF-8 处理将任意文本编码为 Base64，本地运行，不上传，无 API。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/base64-encoder.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

以正确的 UTF-8 处理将任意文本编码为 Base64，本地运行，不上传，无 API。

Base64 编码工具把任意文本转成标准的 Base64 字符串，中文、英文、表情符号都按 UTF-8 处理，不会出现乱码。在页面上方的输入框里直接粘贴或输入要编码的文本，然后点「开始编码」，编码结果会显示在下方的结果框里，点「复制结果」就能拿走。整个过程在浏览器本地完成，文本不会上传到服务器，也不依赖任何接口，关掉页面前记得把结果复制走。

## ✨ 功能特性

- 以正确的 UTF-8 处理将任意文本编码为 Base64
- 本地运行
- 无 API

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/base64-encoder.html>，无需安装。

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
<summary>UTF-8 安全吗？</summary>

安全，文本先按 UTF-8 编码再 Base64，emoji 与中文均可。
</details>
<details>
<summary>隐私吗？</summary>

完全客户端，数据不出浏览器。
</details>
<details>
<summary>编码后的字符串怎么还原成原文</summary>

用本站的 Base64 解码功能，把字符串粘进输入框再点解码即可。注意解码时也要按 UTF-8 读取，中文才不会变成乱码。
</details>
<details>
<summary>结果末尾的等号是干什么的</summary>

那是补位符，用来把长度凑成 4 的倍数。不同长度的原文补的等号数量不同，解码时会自动去掉，不影响实际内容。
</details>
<details>
<summary>中文比英文编码出来长很多正常吗</summary>

正常。UTF-8 下一个汉字占 3 个字节，英文只占 1 个，编码后大约按 4 比 3 放大，所以中文结果明显比英文长。
</details>
<details>
<summary>想编码图片或二进制文件怎么办</summary>

文本工具只处理字符内容，二进制文件请改用 Base64 文件编码器，它按字节读取本地文件，还能直接生成 Data URI。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`f27bad5fd3f4a6643c5fa0795af2a9590860dad53af6a0008af588f2e19a3838`
- **体积**：16912 字节（约 16.5 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/base64-encoder.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/base64-encoder>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/base64-encoder>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
