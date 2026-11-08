# 标题转 URL Slug 生成器

> 标题转 URL Slug 生成器，中文标题一键转英文小写连字符格式，支持自定义分隔符与快捷预设，纯本地处理。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/text-slugify.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

标题转 URL Slug 生成器，中文标题一键转英文小写连字符格式，支持自定义分隔符与快捷预设，纯本地处理。

本工具用于把中文或英文标题快速转换为适合 URL 使用的 Slug 格式（小写字母、数字、连字符）。您只需在下方输入框粘贴或输入标题文字，然后点击「生成 Slug」按钮，转换结果会立即显示在结果区域。支持自定义分隔符、是否保留数字、是否去除停用词等选项，并提供多种快捷预设按钮。整个过程完全在浏览器本地运行，不会上传任何数据。

## ✨ 功能特性

- 标题转 URL Slug 生成器
- 中文标题一键转英文小写连字符格式
- 支持自定义分隔符与快捷预设
- 纯本地处理

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/text-slugify.html>，无需安装。

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
<summary>中文标题转换后变成拼音，准确吗？</summary>

本工具使用内置的拼音映射表进行转换，常见字词基本准确，但多音字和生僻字可能存在误差，建议生成后人工核对。
</details>
<details>
<summary>为什么我的标题生成后是空的？</summary>

如果输入内容只包含标点符号或特殊字符，过滤后可能没有有效字符。请检查输入是否包含中文或英文字母。
</details>
<details>
<summary>「去除停用词」有什么作用？</summary>

该选项会删除英文标题中的常见虚词（如 the、a、an、of、for、and 等），让 Slug 更简洁。对中文标题没有影响。
</details>
<details>
<summary>生成结果可以直接用于网址吗？</summary>

可以。生成的 Slug 只包含小写字母、数字和您指定的分隔符，符合 URL 规范，可直接用于链接路径。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`5d923a64d455617fc04a1aecaabb8bfe441bd485abd4d404bdc3e97d94947a79`
- **体积**：34772 字节（约 34.0 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/text-slugify.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/text-slugify>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/text-slugify>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
