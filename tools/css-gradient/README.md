# CSS 渐变生成器

> 在线 CSS 渐变生成器：可视化调整渐变类型、角度与色标，实时预览并一键复制 background 代码。支持线性与径向渐变、多色标与位置调整，纯前端运行，无需注册。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/css-gradient.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在线 CSS 渐变生成器：可视化调整渐变类型、角度与色标，实时预览并一键复制 background 代码。支持线性与径向渐变、多色标与位置调整，纯前端运行，无需注册。

调整类型、角度与颜色，实时预览渐变效果并复制可直接使用的 CSS 代码。

## ✨ 功能特性

- 在线 CSS 渐变生成器：可视化调整渐变类型、角度与色标
- 实时预览并一键复制 background 代码
- 支持线性与径向渐变、多色标与位置调整
- 纯前端运行
- 无需注册

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/css-gradient.html>，无需安装。

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
<summary>为什么预览好看，页面里却不一样？</summary>

预览区是固定尺寸的方块。真实元素的长宽比不同，同一角度会呈现不同观感。建议在目标元素上实测，必要时配合 background-size 调整。
</details>
<details>
<summary>能叠加多个渐变吗？</summary>

可以。把多个 linear-gradient 用逗号分隔即可叠加，前一个在上层。本工具生成单层代码，多层可据此手动组合。
</details>
<details>
<summary>复制的代码怎么用？</summary>

直接把 background: …; 粘贴到 CSS 规则里即可。linear-gradient(...) 也能用于 border-image、文字渐变（配合 background-clip:text）等场景。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`9127b17419e01517d13cc73f4b36e5566c7f1fa6f20bb88e530e6acbf953b4c2`
- **体积**：11235 字节（约 11.0 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/css-gradient.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/css-gradient>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/css-gradient>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
