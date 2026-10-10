# JSON 校验 — 检查 JSON 合法性并定位错误

> 知办库免费在线 JSON 校验工具：检查 JSON 是否合法，提示具体出错行与列，并给出结构摘要（键、值、深度）。纯前端运行，文本不上传。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/json-yan-zheng-qi.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

知办库免费在线 JSON 校验工具：检查 JSON 是否合法，提示具体出错行与列，并给出结构摘要（键、值、深度）。纯前端运行，文本不上传。

知办库 JSON 校验工具用来检查一段 JSON 到底合不合法。把内容粘贴到上方输入框，或者直接拖入 .json 文件，然后点「开始校验」按钮，几秒内就会给出结论：出错时标出具体的行号和列号，方便你回去改；通过时还会给出结构摘要，包括顶层键、值类型和嵌套深度。校验结果与结构概览都显示在下方结果区，全程在浏览器里跑，不用登录也不用装软件。

## ✨ 功能特性

- 知办库免费在线 JSON 校验工具：检查 JSON 是否合法
- 提示具体出错行与列
- 并给出结构摘要（键、值、深度）
- 纯前端运行
- 文本不上传

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/json-yan-zheng-qi.html>，无需安装。

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
<summary>这个 JSON 校验工具收费吗？</summary>

完全免费，无需注册，你的 JSON 只在浏览器本地处理，不会上传。
</details>
<details>
<summary>会指出错误位置吗？</summary>

会。当 JSON 不合法时，它会给出错误提示，并附带大致的出错行与列，方便你快速定位修复。
</details>
<details>
<summary>能校验很大的 JSON 吗？</summary>

可以。校验完全在浏览器本地运行，因此即便是较大的 JSON 也能处理，且不会上传到任何服务器。
</details>
<details>
<summary>它会改动我的 JSON 吗？</summary>

不会。校验器只检查合法性并展示结构摘要（键、值、数组、深度），不会重写或改变你的原始输入。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`a4243dc7a0e170852bd529e884285419e036e5f1e017e7f9d5d517fd620c4828`
- **体积**：15784 字节（约 15.4 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/json-yan-zheng-qi.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/json-yan-zheng-qi>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/json-yan-zheng-qi>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
