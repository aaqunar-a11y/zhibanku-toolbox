# Flexbox 布局代码生成器

> 可视化勾选参数，实时预览并生成 Flexbox 布局 CSS 代码，一键复制，本地运行不传数据。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/flexbox-gen.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

可视化勾选参数，实时预览并生成 Flexbox 布局 CSS 代码，一键复制，本地运行不传数据。

这是一个可视化生成 Flexbox 布局 CSS 代码的在线工具。您无需手写任何样式，只需在左侧面板勾选或选择您需要的布局参数（如主轴方向、对齐方式、换行规则等），然后点击「生成代码」按钮，右侧预览区会立即展示布局效果，同时下方代码区会输出完整的 CSS 代码。您可以直接点击「复制结果」按钮将代码粘贴到自己的项目中使用。整个过程完全在浏览器本地运行，您的数据不会上传到任何服务器。

## ✨ 功能特性

- 可视化勾选参数
- 实时预览并生成 Flexbox 布局 CSS 代码
- 一键复制
- 本地运行不传数据

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/flexbox-gen.html>，无需安装。

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
<summary>为什么我设置了换行但子元素没有换行？</summary>

请检查子元素是否设置了固定宽度，且容器宽度不足以容纳所有子元素。若子元素宽度可伸缩，则不会触发换行。
</details>
<details>
<summary>生成的代码为什么没有子元素的样式？</summary>

本工具专注于生成 Flex 容器的布局属性。子元素的宽度、高度、边距等样式需要您根据实际需求自行编写。
</details>
<details>
<summary>多行对齐选项为什么看起来没有效果？</summary>

多行对齐需要容器高度大于子元素总高度，且换行已生效。请尝试增加预览区高度或减少子元素数量。
</details>
<details>
<summary>代码可以用于生产环境吗？</summary>

可以。生成的代码是标准 CSS，兼容所有现代浏览器。建议在目标浏览器中做最终验证。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`ac5850dfca65a1b556aa80a6e3a437707efa1214e953af496433c37d52a67d84`
- **体积**：24378 字节（约 23.8 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/flexbox-gen.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/flexbox-gen>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/flexbox-gen>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
