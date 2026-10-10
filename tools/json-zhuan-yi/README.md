# JSON 转义与反转义 — 让字符串适配 JSON

> 知办库免费在线 JSON 转义与反转义工具：把普通文字转成 JSON 安全的字符串字面量（或反向还原），让值能安全嵌入 JSON。纯前端运行。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/json-zhuan-yi.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

知办库免费在线 JSON 转义与反转义工具：把普通文字转成 JSON 安全的字符串字面量（或反向还原），让值能安全嵌入 JSON。纯前端运行。

知办库 JSON 转义与反转义工具解决一个很常见的麻烦：文字里带引号、反斜杠或换行时，直接塞进 JSON 就会报错。把普通文字粘到上方输入框，点「转义」按钮，下方输出框会给出带反斜杠的字符串内容，可以直接放进 JSON 的值里；反过来点「反转义」，就能把转过的内容还原成原文，结果同样显示在下方，随时可复制使用。

## ✨ 功能特性

- 知办库免费在线 JSON 转义与反转义工具：把普通文字转成 JSON 安全的字符串字面量（或反向还原）
- 让值能安全嵌入 JSON
- 纯前端运行

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/json-zhuan-yi.html>，无需安装。

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
<summary>这个 JSON 转义工具收费吗？</summary>

免费且隐私安全，转义与反转义都在浏览器本地完成。
</details>
<details>
<summary>转义字符串是做什么？</summary>

它把普通文字变成 JSON 安全的字符串字面量：引号、反斜杠以及换行等控制字符都会被转义（例如换行变为 \n），从而能安全地嵌入 JSON 值中。
</details>
<details>
<summary>什么时候需要转义 JSON 字符串？</summary>

当你手写 JSON、或把用户输入的文字塞进某个 JSON 值时——转义可避免引号与特殊字符破坏语法。
</details>
<details>
<summary>反转义可逆吗？</summary>

可逆。反转义会把 JSON 字符串字面量还原为原始文字，恢复真实的换行、Tab 与引号。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`80d67af112a65ff64a2ca038206bc6b01be7d6af21c481492c63551462946a04`
- **体积**：14995 字节（约 14.6 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/json-zhuan-yi.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/json-zhuan-yi>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/json-zhuan-yi>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
