# HTML 转纯文本

> 在线 HTML 转纯文本工具：粘贴 HTML 源码，自动去掉标签、脚本与注释，解码 等实体并保留段落换行，输出干净的纯文本。适合清洗网页内容与富文本，全程本地处理。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/html-to-text.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在线 HTML 转纯文本工具：粘贴 HTML 源码，自动去掉标签、脚本与注释，解码 等实体并保留段落换行，输出干净的纯文本。适合清洗网页内容与富文本，全程本地处理。

粘贴 HTML 源码，一键剥离标签与脚本、解码实体，输出可直接使用的纯文本。

## ✨ 功能特性

- 在线 HTML 转纯文本工具：粘贴 HTML 源码
- 自动去掉标签、脚本与注释
- 解码 等实体并保留段落换行
- 输出干净的纯文本
- 适合清洗网页内容与富文本
- 全程本地处理

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/html-to-text.html>，无需安装。

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
<summary>转换结果里的多余空格能去掉吗？</summary>

开启「保留段落换行」时，工具会顺手压缩行尾空白并把连续空行合并为一行空行；关闭时则把全部空白折叠成单空格，得到一行连续文本。
</details>
<details>
<summary>能处理整页 HTML 吗？</summary>

可以，但请先粘贴源码而不是网址——本工具不联网抓取，只处理你粘贴进来的内容。整页抓下来的源码通常包含大量导航与脚本，转换后需自行取舍。
</details>
<details>
<summary>为什么结果里出现了 < 这样的字符？</summary>

那是被转义后的文本（原文是 <）。工具解码实体后，若结果本身包含尖括号，会按纯文本原样输出，这是正确行为，不会被执行。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`e99c680c760388723d15a1ad9a143f11823e4865cc6477024f834274c47c162f`
- **体积**：11093 字节（约 10.8 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/html-to-text.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/html-to-text>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/html-to-text>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
