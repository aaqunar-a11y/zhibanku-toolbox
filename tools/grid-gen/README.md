# Grid 布局生成器

> Grid 布局生成器，可视化设置行列、间距与对齐，实时预览并一键复制 CSS 代码。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/grid-gen.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

Grid 布局生成器，可视化设置行列、间距与对齐，实时预览并一键复制 CSS 代码。

本工具用于可视化生成 CSS Grid 布局代码。您无需手写复杂的 grid 属性，只需在下方设置列数、行数、间距、对齐方式等参数，即可在预览区实时看到网格效果，并自动生成对应的 CSS 代码。点击「生成代码」按钮可刷新代码，点击「复制结果」按钮可将代码复制到剪贴板。生成的代码可直接用于您的网页项目中，所有操作均在浏览器本地完成，数据不会上传到任何服务器。

## ✨ 功能特性

- Grid 布局生成器
- 可视化设置行列、间距与对齐
- 实时预览并一键复制 CSS 代码

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/grid-gen.html>，无需安装。

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
<summary>生成的代码可以直接用吗</summary>

可以。生成的代码包含完整的 CSS 规则，您只需将网格项放入容器中即可正常显示。代码中已包含必要的浏览器前缀。
</details>
<details>
<summary>为什么预览和实际效果不一样</summary>

预览区使用固定高度展示效果，实际使用时容器高度由内容决定。若您的网格项内容较多，实际布局可能略有差异，属正常现象。
</details>
<details>
<summary>如何让网格项跨列或跨行</summary>

本工具生成的是基础网格布局，跨列跨行需要您手动在网格项上添加 grid-column 或 grid-row 属性，工具暂不支持可视化设置。
</details>
<details>
<summary>支持响应式布局吗</summary>

工具生成的是固定行列的网格，如需响应式布局，建议结合媒体查询在不同屏幕尺寸下调整列数，工具本身不生成响应式代码。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`172024ea3ce3673bafdacb65f286e933bf5aa6fd9f2a9e08270ffce0ce2a9e0a`
- **体积**：21491 字节（约 21.0 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/grid-gen.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/grid-gen>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/grid-gen>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
