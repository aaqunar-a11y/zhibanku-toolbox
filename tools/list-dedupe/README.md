# 列表去重排序工具

> 粘贴多行文本，一键去重排序并计数，支持升序降序与忽略空行，结果可复制。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/list-dedupe.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

粘贴多行文本，一键去重排序并计数，支持升序降序与忽略空行，结果可复制。

本工具用于对多行文本列表进行去重、排序和计数。您只需将需要处理的列表内容粘贴到左侧输入框中，每行一条数据，然后点击「开始处理」按钮，右侧结果区就会立即显示去重排序后的结果，并统计原始条数、去重后条数以及重复数量。支持升序、降序排列，可自由选择忽略空行或保留空行，所有操作都在您的浏览器本地完成，数据不会上传到任何服务器。

## ✨ 功能特性

- 粘贴多行文本
- 一键去重排序并计数
- 支持升序降序与忽略空行
- 结果可复制

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/list-dedupe.html>，无需安装。

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
<summary>去重后顺序会变吗</summary>

会变。去重后默认按升序排列，这是为了保证结果稳定可预测。如果您需要保持原始顺序，可以暂时不排序，但本工具目前不支持该模式。
</details>
<details>
<summary>空行会被怎么处理</summary>

默认勾选忽略空行，空行和只含空格的行会被过滤。如果取消勾选，空行会保留并参与排序，通常空行会排在最前面。
</details>
<details>
<summary>支持 Excel 粘贴的数据吗</summary>

支持。从 Excel 复制的多行单元格粘贴到输入框后，每行会自动成为一条数据。但请注意，如果单元格内包含换行符，会被拆分为多行。
</details>
<details>
<summary>结果能导出为文件吗</summary>

目前不提供文件导出功能，但您可以点击「复制结果」按钮复制到剪贴板，然后粘贴到任何文本编辑器或 Excel 中保存。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`e79df2b03a13e74af14a68d4243ae4a6eb334e89f48bbba60fcab26986dabd67`
- **体积**：23337 字节（约 22.8 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/list-dedupe.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/list-dedupe>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/list-dedupe>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
