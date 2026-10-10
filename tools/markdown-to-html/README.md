# Markdown 转 HTML

> 将 Markdown 转为干净 HTML，支持标题、列表、代码、链接，完全本地。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/markdown-to-html.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

将 Markdown 转为干净 HTML，支持标题、列表、代码、链接，完全本地。

Markdown 转 HTML 工具帮你把 Markdown 文本一键变成干净的 HTML 代码，支持标题、列表、代码块、链接、图片等常用写法，全程在浏览器本地完成，内容不会上传服务器。把写好的 Markdown 粘贴到页面上方的输入框里，或者直接把 .md 文件拖进输入区，然后点「开始转换」按钮，右侧结果区就会立刻显示生成的 HTML，整段选中即可复制去用。

## ✨ 功能特性

- 将 Markdown 转为干净 HTML
- 支持标题、列表、代码、链接
- 完全本地

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/markdown-to-html.html>，无需安装。

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
<summary>支持哪些语法？</summary>

标题、加粗、斜体、代码、列表、链接、引用、分隔线。
</details>
<details>
<summary>输出安全吗？</summary>

应用格式规则前先转义文本。
</details>
<details>
<summary>转换出来的代码能直接放进网页吗</summary>

可以，把结果整段粘到页面正文或模板里就能显示。标题、列表会自动套用你页面已有的样式，不需要额外加类名。
</details>
<details>
<summary>表格和任务列表支持吗</summary>

标准写法的表格支持，会输出 table 结构。任务列表这种扩展语法目前按普通列表处理，勾选框不会生成。
</details>
<details>
<summary>输入的内容会被保存下来吗</summary>

不会。转换在浏览器本地完成，内容不上传，刷新或关掉页面就没了，需要留底请自己复制保存。
</details>
<details>
<summary>能把 HTML 反向转回 Markdown 吗</summary>

本工具只做单向转换。需要反向处理时，可以先用 HTML 转纯文本工具提取正文，再手动补回 Markdown 标记。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`5a76ef526dbf5d1ecae10b0e7cee1cb3c57b733279fddaebc1b06f8cf7aa4e9d`
- **体积**：18548 字节（约 18.1 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/markdown-to-html.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/markdown-to-html>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/markdown-to-html>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
