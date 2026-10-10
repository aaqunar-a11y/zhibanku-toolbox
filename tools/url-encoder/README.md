# URL 编解码工具 — 在线 URL 编码与解码

> 支持 encodeURIComponent、encodeURI 与 decode 三种模式，实时转换，附带保留字符对照表。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/url-encoder.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

知办库免费在线 URL 编解码工具：支持 encodeURIComponent、encodeURI 与 decode 三种模式，实时转换，并附带保留字符与百分号编码对照表。纯前端运行，数据不上传。

URL 编解码工具用来处理网址里的中文、空格和特殊符号。把要处理的网址或参数粘贴到上方输入框，选好 encodeURIComponent、encodeURI 或解码模式，点「开始转换」按钮，处理结果会显示在下方结果框里，直接取用即可。反过来，把编码过的字符串粘进输入框、切到解码模式再点「开始转换」，就能还原成可读文字，全程在当前浏览器里完成。

## ✨ 功能特性

- 知办库免费在线 URL 编解码工具：支持 encodeURIComponent、encodeURI 与 decode 三种模式
- 实时转换
- 并附带保留字符与百分号编码对照表
- 纯前端运行
- 数据不上传

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/url-encoder.html>，无需安装。

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
<summary>编码和解码有什么区别</summary>

编码是把普通文本转成浏览器和服务器都能安全传输的百分号形式，解码则是把这个形式还原成你原来输入的文字。方向选反了看到的就是乱码，按需切换即可。
</details>
<details>
<summary>encodeURIComponent 和 encodeURI 该用哪个</summary>

前者会把问号、井号、斜杠这些也一起转掉，适合放在参数值里；后者保留这些分隔符，适合处理整条地址。拿不准时按用途选前者更稳妥。
</details>
<details>
<summary>我粘进去的内容会被上传吗</summary>

不会。整个过程在你的浏览器里完成，页面不发请求，关掉标签页内容就没了，可以放心处理敏感链接。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`2007f4c2e859f092837a2e1c656ce14f02ccead4fe2adf7b7a178815690498b0`
- **体积**：16675 字节（约 16.3 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/url-encoder.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/url-encoder>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/url-encoder>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
