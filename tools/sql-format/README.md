# SQL 格式化工具

> SQL 格式化与压缩，关键字大写，支持 MySQL、SQL Server、Oracle 等常见方言。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/sql-format.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

SQL 格式化与压缩，关键字大写，支持 MySQL、SQL Server、Oracle 等常见方言。

本工具用于美化 SQL 语句，将杂乱的 SQL 整理成缩进清晰、关键字大写的规范格式，同时支持压缩成单行紧凑形式。您只需在下方输入框中粘贴原始 SQL，选择需要的方言类型和格式选项，点击「格式化 SQL」按钮，结果会立即显示在下方输出区域。支持 MySQL、SQL Server、Oracle 等常见数据库方言，所有处理均在浏览器本地完成，不会上传任何数据。

## ✨ 功能特性

- SQL 格式化与压缩
- 关键字大写
- 支持 MySQL、SQL Server、Oracle 等常见方言

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/sql-format.html>，无需安装。

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
<summary>格式化后 SQL 能否直接执行</summary>

格式化只调整空格、换行和关键字大小写，不改变 SQL 逻辑结构，理论上可以直接执行。但建议先检查缩进层级是否清晰，确认无语法错误后再执行。
</details>
<details>
<summary>为什么我的存储过程格式化效果不好</summary>

存储过程包含 BEGIN...END、DECLARE、游标等复杂结构，词法分析器难以完美处理所有嵌套层级。建议手动检查关键部分的缩进，或使用数据库自带的格式化工具。
</details>
<details>
<summary>支持哪些 SQL 方言</summary>

内置支持 MySQL、SQL Server、Oracle、PostgreSQL、SQLite 五种常见方言，可识别各自的关键字和专有语法，但高级特性可能无法完全识别。
</details>
<details>
<summary>数据会被上传到服务器吗</summary>

不会。本工具完全在浏览器本地运行，所有处理逻辑都在 JavaScript 中完成，不发起任何网络请求，您的数据不会离开您的设备。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`23863983483d05d6b37015f52a4c91a033f04fa91a3f2e090b6d376353b8418f`
- **体积**：53414 字节（约 52.2 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/sql-format.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/sql-format>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/sql-format>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
