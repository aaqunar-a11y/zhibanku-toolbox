# CSV 与 JSON 互转工具

> CSV 与 JSON 双向转换，自动识别表头与分隔符，本地处理不传云端。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/csv-json.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

CSV 与 JSON 双向转换，自动识别表头与分隔符，本地处理不传云端。

本工具用于在 CSV 表格数据与 JSON 对象数组之间进行双向转换。您只需在下方文本框中粘贴 CSV 文本或 JSON 文本，选择转换方向后点击「转换为 JSON」或「转换为 CSV」按钮，结果会立即显示在下方结果区。工具会自动识别 CSV 的表头行与分隔符（支持逗号、制表符、分号），所有数据均在浏览器本地处理，不会上传到任何服务器。

## ✨ 功能特性

- CSV 与 JSON 双向转换
- 自动识别表头与分隔符
- 本地处理不传云端

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/csv-json.html>，无需安装。

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
<summary>CSV 文件里含有逗号怎么办</summary>

CSV 规范要求包含逗号、换行符或双引号的字段必须用双引号包裹，例如 "北京, 上海"。本工具支持这种标准转义格式。
</details>
<details>
<summary>JSON 转 CSV 时嵌套对象怎么处理</summary>

嵌套对象或数组会被自动序列化为 JSON 字符串写入对应单元格，您可以在 Excel 中查看完整结构，但无法直接展开为多列。
</details>
<details>
<summary>转换结果和预期不符怎么办</summary>

请检查输入数据格式：CSV 是否包含表头行、JSON 是否为对象数组。也可尝试切换分隔符选项，或使用示例数据对比验证。
</details>
<details>
<summary>数据会上传到服务器吗</summary>

不会。本工具为纯前端实现，所有解析和转换逻辑都在您的浏览器中运行，没有任何网络请求，数据完全本地处理。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`5784f60c9a5da04abd02c1d0cac2d7e7061d4c9fea98d3aac58d23f63d374ed7`
- **体积**：22805 字节（约 22.3 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/csv-json.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/csv-json>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/csv-json>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
