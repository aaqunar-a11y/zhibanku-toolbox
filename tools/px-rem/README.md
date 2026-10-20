# px 与 rem 换算工具

> px 与 rem 在线换算，支持自定义根字号，一键切换方向，批量换算并复制结果。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/px-rem.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

px 与 rem 在线换算，支持自定义根字号，一键切换方向，批量换算并复制结果。

本工具用于在像素（px）与相对单位（rem）之间进行快速换算。您只需在输入框中填写数值，选择换算方向（px 转 rem 或 rem 转 px），并设置根字号（默认 16px），点击「开始换算」按钮，结果会立即显示在下方的结果区域。同时提供多个常用根字号快捷预设按钮，一键切换，方便您在不同设计稿之间切换。结果支持一键复制，方便直接粘贴到代码中使用。

## ✨ 功能特性

- px 与 rem 在线换算
- 支持自定义根字号
- 一键切换方向
- 批量换算并复制结果

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/px-rem.html>，无需安装。

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
<summary>px 和 rem 有什么区别</summary>

px 是绝对单位，固定大小；rem 是相对单位，相对于根元素（html）的 font-size。rem 更适合响应式布局。
</details>
<details>
<summary>为什么我的项目根字号不是 16px</summary>

很多框架或设计稿会自定义根字号，比如 14px 或 20px。您只需在工具中修改根字号即可，换算结果会自动适配。
</details>
<details>
<summary>可以批量换算多个数值吗</summary>

可以。在输入框中用英文逗号或空格分隔多个数值，例如 16 24 32，工具会逐个换算并分行显示结果。
</details>
<details>
<summary>换算结果精确到几位小数</summary>

结果保留 4 位小数，足够满足日常开发精度需求。如需更高精度，可自行在代码中调整。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`50044316e47cc1e4cb9ed10b4b18bf35705fd3e046de12ac07e3572c2126e23c`
- **体积**：22974 字节（约 22.4 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/px-rem.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/px-rem>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/px-rem>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
