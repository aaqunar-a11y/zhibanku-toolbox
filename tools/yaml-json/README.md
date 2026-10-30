# YAML 与 JSON 互转工具

> YAML 与 JSON 双向转换并格式化，本地完成，支持缩进调节与语法校验。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/yaml-json.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

YAML 与 JSON 双向转换并格式化，本地完成，支持缩进调节与语法校验。

这是一个在浏览器本地完成 YAML 与 JSON 双向转换的实用工具。您只需在左侧输入框中粘贴 YAML 或 JSON 内容，点击「转为 JSON」或「转为 YAML」按钮，右侧结果区就会立即显示转换后的格式化文本。工具内置语法校验，出错时会明确提示问题位置。所有数据均在您的浏览器内处理，不会上传到任何服务器，可放心处理敏感配置内容。

## ✨ 功能特性

- YAML 与 JSON 双向转换并格式化
- 本地完成
- 支持缩进调节与语法校验

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/yaml-json.html>，无需安装。

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
<summary>转换失败时提示语法错误怎么办</summary>

请检查输入内容是否符合对应格式规范。YAML 注意缩进一致性，JSON 注意引号和逗号。错误提示会指出具体行号和原因，按提示修正即可。
</details>
<details>
<summary>YAML 中的注释会被保留吗</summary>

不会。注释是 YAML 的辅助信息，转换时会被忽略。如果需要在 JSON 中保留说明，建议使用描述性字段名。
</details>
<details>
<summary>支持 YAML 锚点和别名吗</summary>

不支持。本工具使用简化版 YAML 解析器，锚点、别名、合并键等高级特性会被当作普通文本处理，建议先展开再转换。
</details>
<details>
<summary>转换结果和预期不一致怎么办</summary>

检查输入中的特殊字符，如字符串包含冒号或井号时 YAML 需要加引号。JSON 转 YAML 时工具会自动处理，但 YAML 转 JSON 需要您确保输入格式正确。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`02194bc667f3ea47b86daef93689b0fca1640657b878365eb58428b30177814c`
- **体积**：30862 字节（约 30.1 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/yaml-json.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/yaml-json>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/yaml-json>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
