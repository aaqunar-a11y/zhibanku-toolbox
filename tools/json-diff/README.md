# JSON 对比工具 本地运行

> 并排对比两份 JSON 差异，高亮新增、删除与修改路径，本地完成不传数据。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/json-diff.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

并排对比两份 JSON 差异，高亮新增、删除与修改路径，本地完成不传数据。

本工具用于并排对比两份 JSON 数据的差异，自动高亮新增、删除与修改的字段路径。您只需在左侧两个输入框中分别粘贴或输入 JSON 内容，然后点击「开始对比」按钮，差异结果会以左右并排的方式展示，同时列出所有变更路径。整个过程完全在浏览器本地完成，数据不会上传到任何服务器，可放心处理敏感数据。

## ✨ 功能特性

- 并排对比两份 JSON 差异
- 高亮新增、删除与修改路径
- 本地完成不传数据

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/json-diff.html>，无需安装。

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
<summary>JSON 格式错误怎么办</summary>

页面会提示具体错误位置，请检查括号、引号、逗号是否完整。可使用本页的 JSON 校验工具先验证格式。
</details>
<details>
<summary>数组顺序不同算差异吗</summary>

算。数组按索引逐项对比，顺序变化会导致对应位置显示为修改。若需忽略顺序，可先排序再对比。
</details>
<details>
<summary>对比结果如何解读</summary>

绿色背景表示新增内容，红色删除线表示移除内容，黄色背景表示修改内容。路径列表给出精确的字段位置。
</details>
<details>
<summary>数据会传到服务器吗</summary>

不会。所有解析和对比逻辑都在浏览器本地执行，无任何网络请求，数据完全离线处理。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`8dc40fac9770378554c0c4e0fb11fac8fa8e439d9732ca6d411f28f2159ba536`
- **体积**：29238 字节（约 28.6 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/json-diff.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/json-diff>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/json-diff>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
