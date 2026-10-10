# MD5 生成器 — 在本地对文本生成哈希

> 知办库免费在线 MD5 生成器：在浏览器本地计算任意文本的 MD5 哈希。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/md5-sheng-cheng-qi.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

知办库免费在线 MD5 生成器：在浏览器本地计算任意文本的 MD5 哈希。

MD5 生成器用于把任意一段文本算成 32 位的 MD5 哈希值，常用来校验字符串是否一致、比对两处内容有没有改动。使用时把要计算的文本粘贴到页面上方的输入框，支持一次输入多行，每行单独计算；填好后点「开始计算」按钮，下方结果区会按相同顺序列出每行对应的 MD5 值，直接复制即可。整个计算过程都在浏览器本地完成，文本不会发送到服务器。

## ✨ 功能特性

- 知办库免费在线 MD5 生成器：在浏览器本地计算任意文本的 MD5 哈希

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/md5-sheng-cheng-qi.html>，无需安装。

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
<summary>MD5 安全吗？</summary>

MD5 计算快但已被攻破，仅适合做校验和，不要用于密码。
</details>
<details>
<summary>能离线使用吗？</summary>

可以，哈希在本地计算，无需联网。
</details>
<details>
<summary>为什么和别的网站算出来的结果不一样</summary>

多半是换行符或空格差异，也可能对方按 GBK 编码中文。本工具统一按 UTF-8 处理，建议两边都清掉首尾空格再比。
</details>
<details>
<summary>可以一次算很多行吗</summary>

可以，输入框里每行单独计算，结果按相同顺序一一对应输出，方便批量核对一批字符串。
</details>
<details>
<summary>能算文件的 MD5 吗</summary>

不能，本工具只处理文本字符串。要校验文件请用文件哈希校验器，把文件拖进去计算。
</details>
<details>
<summary>超长文本算得动吗</summary>

几万字符以内没问题，再长页面会有明显卡顿，建议拆成几段分别计算，结果不受影响。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`3cde7dfa221e1b2bd05e1bc0d9bf2171c65c39c273bbc0a3b7b4138d599b527a`
- **体积**：18547 字节（约 18.1 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/md5-sheng-cheng-qi.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/md5-sheng-cheng-qi>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/md5-sheng-cheng-qi>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
