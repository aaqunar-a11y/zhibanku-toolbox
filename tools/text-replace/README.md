# 批量文本替换工具

> 批量文本替换工具，支持多条查找替换规则、正则表达式、预览命中结果并一键复制导出。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/text-replace.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

批量文本替换工具，支持多条查找替换规则、正则表达式、预览命中结果并一键复制导出。

批量文本替换工具是一款在浏览器本地运行的多条查找替换处理工具。您可以在上方输入原始文本，在下方添加多条「查找→替换」规则，支持普通文本与正则表达式两种模式。设置好规则后，点击「执行替换」按钮，右侧结果区会实时预览每次替换的命中位置与替换结果。所有数据仅在本机处理，不会上传到任何服务器。替换完成后，可点击「复制结果」按钮一键复制到剪贴板，方便粘贴到其他文档中使用。

## ✨ 功能特性

- 批量文本替换工具
- 支持多条查找替换规则、正则表达式、预览命中结果并一键复制导出

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/text-replace.html>，无需安装。

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
<summary>替换规则可以添加多少条</summary>

理论上没有数量限制，但建议控制在 20 条以内以保证执行效率和可读性。规则过多时可通过「清空规则」按钮一键重置。
</details>
<details>
<summary>正则表达式写错了怎么办</summary>

点击「执行替换」时若正则语法错误，页面会弹出红色错误提示，并定位到出错的那条规则。修正后重新执行即可。
</details>
<details>
<summary>替换结果和预期不一样</summary>

请检查规则顺序是否合理，因为替换是逐条依次执行的。另外确认「全局替换」和「忽略大小写」选项是否符合需求。
</details>
<details>
<summary>复制结果后粘贴格式会变吗</summary>

不会。复制的是纯文本内容，换行符和空格会原样保留。粘贴到支持纯文本的编辑器中格式完全一致。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`bc887a01f1fa7174d7d5c8021fc5c1ae23c69acd918e8de8dee31971c1379508`
- **体积**：32482 字节（约 31.7 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/text-replace.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/text-replace>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/text-replace>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
