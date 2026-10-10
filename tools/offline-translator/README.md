# 离线中英翻译工具

> 输入中文或英文，点击翻译按钮即可离线完成中英互译，显示整句译文与逐词对照。简明词典内置在网页中，全程不联网、不上传任何文字，适合断网、内网与隐私敏感场景。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/offline-translator.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

输入中文或英文，点击翻译按钮即可离线完成中英互译，显示整句译文与逐词对照。简明词典内置在网页中，全程不联网、不上传任何文字，适合断网、内网与隐私敏感场景。

本工具把一本简明中英词典直接内置在网页文件里：在输入框输入中文或英文文字，点击「立即翻译」按钮，下方的结果区会立刻显示整句译文和逐词对照。全程在你的浏览器内完成，不联网、不上传任何文字，断网电脑、内网办公机上也能照常使用。

## ✨ 功能特性

- 输入中文或英文
- 点击翻译按钮即可离线完成中英互译
- 显示整句译文与逐词对照
- 简明词典内置在网页中
- 全程不联网、不上传任何文字
- 适合断网、内网与隐私敏感场景

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/offline-translator.html>，无需安装。

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
<summary>真的完全不需要联网吗？</summary>

完全不需要。词典数据直接写在本网页文件内部，打开页面后翻译过程不发起任何网络请求。你可以在断网环境（飞行模式、内网机）打开本页验证：照样能翻译。
</details>
<details>
<summary>翻译准确吗？能替代正规翻译软件吗？</summary>

日常短句（问候、问路、购物、致谢）可达意；长句、专业内容只能逐词对照，属于「看懂大意」级别。需要高质量全文翻译时请使用专业翻译服务，本工具的定位是断网可用与隐私安全。
</details>
<details>
<summary>输入的文字会被上传到服务器吗？</summary>

不会。整个翻译在你打开网页后于浏览器内存中完成，本页没有任何表单提交、接口请求或统计埋点参与翻译流程。
</details>
<details>
<summary>怎么把这个工具长期留在电脑上？</summary>

浏览器菜单选择「网页另存为」保存本 html 文件，或下载下方压缩包解压后双击打开，之后随时离线使用，双击即可，不需要安装。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`9ea19af6aef79ffc6e1e60ef459f5800f6c0aa1fe1c4f5292cefc20c31f4c784`
- **体积**：18309 字节（约 17.9 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/offline-translator.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/offline-translator>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/offline-translator>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
