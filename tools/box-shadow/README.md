# CSS 阴影生成器

> 可视化调整 CSS 阴影参数，实时预览并一键复制代码，支持多重阴影与预设样式。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/box-shadow.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

可视化调整 CSS 阴影参数，实时预览并一键复制代码，支持多重阴影与预设样式。

这是一个可视化调整 CSS 盒子阴影（box-shadow）参数并实时生成代码的工具。您可以在下方调整水平偏移、垂直偏移、模糊半径、扩散半径、阴影颜色以及阴影的透明度，所有修改都会在左侧预览区域实时显示效果。调整满意后，点击「复制结果」按钮即可将生成的 CSS 代码复制到剪贴板，直接粘贴到您的样式表中使用。工具还提供了多种快捷预设，一键应用常见阴影效果，并支持叠加多重阴影，满足更复杂的设计需求。

## ✨ 功能特性

- 可视化调整 CSS 阴影参数
- 实时预览并一键复制代码
- 支持多重阴影与预设样式

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/box-shadow.html>，无需安装。

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
<summary>生成的阴影代码为什么不生效</summary>

请检查是否将代码粘贴到了正确的选择器内，并确认没有语法错误。另外，部分旧浏览器可能不支持某些高级阴影特性。
</details>
<details>
<summary>如何实现双层阴影效果</summary>

先调整好第一层阴影参数，点击「添加当前阴影」保存，再调整参数生成第二层阴影，再次点击添加，即可叠加两层阴影。
</details>
<details>
<summary>内阴影和外阴影有什么区别</summary>

外阴影在元素外部渲染，内阴影在元素内部渲染。内阴影通常用于模拟凹陷或浮雕效果，需要勾选「阴影方向」中的内阴影选项。
</details>
<details>
<summary>颜色透明度如何影响最终效果</summary>

透明度越高阴影越明显，越低则越淡。透明度为 0 时阴影完全不可见，为 100 时阴影完全不透明。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`8c4840b90c8035e0c8344cf3ea05c5f8bec53d553b47a320c679af1c186bdce2`
- **体积**：30514 字节（约 29.8 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/box-shadow.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/box-shadow>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/box-shadow>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
