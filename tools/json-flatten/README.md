# JSON 拍平工具

> JSON 拍平工具：将嵌套 JSON 一键拍平为点路径扁平结构，支持反向还原，纯本地处理。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/json-flatten.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

JSON 拍平工具：将嵌套 JSON 一键拍平为点路径扁平结构，支持反向还原，纯本地处理。

本工具将嵌套的 JSON 对象拍平为「点路径」扁平结构，例如把 {"a":{"b":1}} 转换为 {"a.b":1}，方便数据展平、日志分析与表格导入。您只需在左侧输入框粘贴 JSON 内容，点击「拍平 JSON」按钮，结果即刻显示在右侧。若需要还原，将拍平后的 JSON 粘贴到左侧，点击「反向还原」即可恢复嵌套结构。整个过程完全在浏览器本地运行，数据不会上传到任何服务器。

## ✨ 功能特性

- JSON 拍平工具：将嵌套 JSON 一键拍平为点路径扁平结构
- 支持反向还原
- 纯本地处理

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/json-flatten.html>，无需安装。

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
<summary>拍平和还原是精确可逆的吗</summary>

对于标准 JSON 数据，拍平后再还原可以恢复原始结构。但如果原始键名包含点号或数字键与数组索引冲突，可能出现歧义。
</details>
<details>
<summary>数组会被如何处理</summary>

数组元素使用数字索引作为路径段，例如 items.0.name。反向还原时，工具检测到数字键会自动重建数组。
</details>
<details>
<summary>数据会发送到服务器吗</summary>

不会。所有处理逻辑都在您的浏览器本地运行，没有任何网络请求，数据完全不会离开您的设备。
</details>
<details>
<summary>支持多深的嵌套层级</summary>

理论上支持任意深度的嵌套，但过深的层级（超过 100 层）可能导致浏览器卡顿，建议控制在 50 层以内。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`589782507ab18805e27354a803bbe2a0e211296a552565dec50fe76125add3a3`
- **体积**：24530 字节（约 24.0 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/json-flatten.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/json-flatten>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/json-flatten>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
