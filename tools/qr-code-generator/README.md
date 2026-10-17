# 📱 离线二维码生成器

> 网址、文本、WiFi 一键生成二维码，可调颜色尺寸容错，下载 PNG。浏览器本地生成，不上传，离线可用。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/qr-code-generator.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

免费离线二维码生成器：把网址、文本、WiFi 账号等任意内容一键生成二维码，可调容错等级、颜色、尺寸，下载 PNG 图片。完全在浏览器本地生成，内容不上传，断网也能用。

离线二维码生成器把网址、文本、WiFi 账号等任意内容直接画成一张二维码图片。在下方的输入框里粘贴或键入要转换的内容，选一下容错等级和颜色，点「生成二维码」按钮，图形会立刻出现在预览区；确认能扫之后，点「下载 PNG」按钮就能把高清图片保存到电脑，打印出来或发给别人都可以。整个过程完全在你的浏览器里完成，输入的内容不会上传到任何服务器，页面打开一次后断网也能继续使用。

## ✨ 功能特性

- 免费离线二维码生成器：把网址、文本、WiFi 账号等任意内容一键生成二维码
- 可调容错等级、颜色、尺寸
- 下载 PNG 图片
- 完全在浏览器本地生成
- 内容不上传
- 断网也能用

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/qr-code-generator.html>，无需安装。

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
<summary>生成的二维码会过期吗？</summary>

不会。二维码就是把内容画成图形，生成后信息固化在图案里，永久可扫，与本网站或任何服务器都不再有关系。
</details>
<details>
<summary>输入的内容会被上传吗？</summary>

不会。整个生成过程在浏览器本地完成，不发送任何网络请求，断网状态下同样可以正常使用。
</details>
<details>
<summary>为什么我扫不出来？</summary>

常见原因有三个：打印太小或太糊（换高清大图重印）、颜色对比不够（改回深前景浅背景）、或内容超长导致点位太密。先把点块大小调到 8 以上、容错选 M 试试。
</details>
<details>
<summary>怎么做扫了直接连 WiFi 的二维码？</summary>

点「填充示例」按钮选择 WiFi 示例，把格式 WIFI:T:WPA;S:网络名;P:密码;; 里的网络名和密码改成你自己的，重新生成即可。安卓手机相机可以直接扫，苹果手机需要用扫码类应用识别。
</details>
<details>
<summary>可以批量做很多个吗？</summary>

本页是逐个生成的界面。如果你有大量数据要批量打成二维码，可以下载本工具的 Windows 绿色版离线使用，或到知办库工具箱看看批量版本。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`101041f5d93da1189e49b5c62198bb52333c7a3cfdbc1171118d5caba8b5d05b`
- **体积**：41897 字节（约 40.9 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/qr-code-generator.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/qr-code-generator>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/qr-code-generator>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
