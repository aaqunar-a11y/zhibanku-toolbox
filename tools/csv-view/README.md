# CSV 查看器

> CSV 查看器：粘贴 CSV 文本自动识别分隔符并分列成表，支持逗号、制表符、分号等，纯本地解析。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/csv-view.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

CSV 查看器：粘贴 CSV 文本自动识别分隔符并分列成表，支持逗号、制表符、分号等，纯本地解析。

CSV 查看器是一个纯本地运行的表格预览工具。您只需将 CSV 格式的文本（例如从 Excel、数据库导出的数据）粘贴到下方文本框中，选择或自动识别分隔符（逗号、制表符、分号等），点击「解析并查看表格」按钮，即可在下方看到分列后的结构化表格。整个过程完全在浏览器内完成，数据不会上传到任何服务器，适合处理敏感数据或快速预览大段 CSV 内容。

## ✨ 功能特性

- CSV 查看器：粘贴 CSV 文本自动识别分隔符并分列成表
- 支持逗号、制表符、分号等
- 纯本地解析

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/csv-view.html>，无需安装。

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
<summary>为什么自动识别分隔符不准确？</summary>

自动识别基于每行分隔符出现次数的稳定性。若数据中某行包含额外逗号（如备注字段），可能干扰判断。建议手动指定分隔符。
</details>
<details>
<summary>表格里的内容显示不全怎么办？</summary>

表格单元格有最大宽度限制，超长内容会以省略号显示。鼠标悬停可查看完整内容，复制或下载时仍是完整数据。
</details>
<details>
<summary>下载的 CSV 用 Excel 打开乱码？</summary>

本工具下载的文件为 UTF-8 编码。Excel 打开时请使用「数据→自文本→选择 UTF-8 编码」导入，即可正常显示中文。
</details>
<details>
<summary>支持带引号的字段吗？</summary>

支持基础引号解析，即字段被双引号包裹且内部含分隔符时可正确识别。但复杂的转义规则（如引号内再嵌套引号）可能解析不完整。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`d6ab854f8fa6a6a3c093ac36d49c5cfb83b4bb2168128b120cfbbff60cc840d8`
- **体积**：21907 字节（约 21.4 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/csv-view.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/csv-view>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/csv-view>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
