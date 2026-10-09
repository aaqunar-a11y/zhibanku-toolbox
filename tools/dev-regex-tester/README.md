# 正则表达式测试

> 在线正则表达式测试工具：输入正则与文本，实时高亮所有匹配项，并列出每处匹配的位置、内容与捕获分组。支持 g/i/m/s/u/y 标志，使用浏览器原生引擎，本地运行不上传。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/dev-regex-tester.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在线正则表达式测试工具：输入正则与文本，实时高亮所有匹配项，并列出每处匹配的位置、内容与捕获分组。支持 g/i/m/s/u/y 标志，使用浏览器原生引擎，本地运行不上传。

粘贴正则与测试文本，实时查看匹配高亮、匹配位置与捕获分组。

## ✨ 功能特性

- 在线正则表达式测试工具：输入正则与文本
- 实时高亮所有匹配项
- 并列出每处匹配的位置、内容与捕获分组
- 支持 g/i/m/s/u/y 标志
- 使用浏览器原生引擎
- 本地运行不上传

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/dev-regex-tester.html>，无需安装。

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
<summary>为什么会「卡住」或匹配为空？</summary>

像 a* 这类可以匹配空字符串的表达式，会对每个位置产生一次零长度匹配。工具已对零长度匹配做前进保护，不会死循环；若结果过多，会截断到 2 万条。
</details>
<details>
<summary>捕获分组和整体匹配有什么区别？</summary>

整体匹配（$0）是整段命中的文本；圆括号包起来的部分是捕获分组（$1、$2…）。(?:…) 是「非捕获分组」，只分组不单独抓取。
</details>
<details>
<summary>文本会被上传吗？</summary>

不会。匹配由浏览器原生正则引擎在本地完成，页面没有任何网络请求。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`d941d42f77fa194157d133c34f38e5733e24d6056d355b7e572f14575d1debd0`
- **体积**：12041 字节（约 11.8 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/dev-regex-tester.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/dev-regex-tester>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/dev-regex-tester>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
