# 日志解析器

> 日志解析器：粘贴日志文本，按分隔符解析成表格，支持筛选与导出 CSV，全程本地处理。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/log-parser.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

日志解析器：粘贴日志文本，按分隔符解析成表格，支持筛选与导出 CSV，全程本地处理。

本工具用于将文本格式的日志按自定义分隔符解析成结构化表格，方便你快速筛选、统计和导出。你只需在下方文本框中粘贴日志内容，选择或输入分隔符（如逗号、竖线、制表符等），然后点击「解析日志」按钮，结果表格会立即显示在下方区域。你还可以使用「筛选」功能过滤特定行，或点击「导出 CSV」将结果保存为表格文件。所有解析均在浏览器本地完成，数据不会上传到任何服务器。

## ✨ 功能特性

- 日志解析器：粘贴日志文本
- 按分隔符解析成表格
- 支持筛选与导出 CSV
- 全程本地处理

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/log-parser.html>，无需安装。

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
<summary>解析后某些行字段对不齐怎么办</summary>

这通常是因为该行分隔符数量与其他行不同。缺失字段会显示为空，不影响其他行解析。建议检查原始日志是否有多余或缺失的分隔符。
</details>
<details>
<summary>导出的 CSV 用 Excel 打开中文乱码</summary>

这是因为 CSV 使用 UTF-8 编码。请在 Excel 中使用「数据」→「从文本/CSV」导入，并选择 UTF-8 编码，即可正常显示中文。
</details>
<details>
<summary>分隔符是多个字符怎么办</summary>

选择「自定义」后输入完整分隔符字符串即可，例如「--」或「||」。工具会按该字符串精确分割每行。
</details>
<details>
<summary>筛选功能支持多关键词吗</summary>

当前筛选只支持单个关键词，匹配时区分大小写。如需更复杂筛选，建议先导出 CSV 后用表格软件处理。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`183a55713159bf3a4f72a55bdcb4aa38a11fb17a45171bdff9c45d30903b54ed`
- **体积**：26364 字节（约 25.7 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/log-parser.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/log-parser>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/log-parser>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
