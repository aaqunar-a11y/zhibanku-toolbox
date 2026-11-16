# ⚖️ 单价对比工具

> 商品单价对比工具，支持不同规格统一换算，快速找出最划算的购买方案。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/unit-price.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

商品单价对比工具，支持不同规格统一换算，快速找出最划算的购买方案。

因为不同物质的密度不同，1克水的体积是1毫升，但1克油的体积大于1毫升。只有同种物质或密度相近的商品才能直接换算。

## ✨ 功能特性

- 商品单价对比工具
- 支持不同规格统一换算
- 快速找出最划算的购买方案

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/unit-price.html>，无需安装。

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
<summary>为什么克和毫升不能直接对比</summary>

因为不同物质的密度不同，1克水的体积是1毫升，但1克油的体积大于1毫升。只有同种物质或密度相近的商品才能直接换算。
</details>
<details>
<summary>规格数量填错了怎么办</summary>

直接修改输入框中的数值，然后重新点击「开始对比」按钮即可。系统会重新计算所有选项的单价。
</details>
<details>
<summary>可以对比超过4个选项吗</summary>

当前版本最多支持4个选项同时对比。如果您需要对比更多，可以分批次进行，或者先对比出最优的几个再进一步比较。
</details>
<details>
<summary>复制结果会包含格式吗</summary>

复制的内容为纯文本表格，会保留对齐和换行，方便粘贴到聊天工具或笔记软件中。不会包含颜色等样式。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`e79b9d790db25c8b759f6f97e10399ce022419b70cd400b2c1067f5a8bec1f61`
- **体积**：21678 字节（约 21.2 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/unit-price.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/unit-price>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/unit-price>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
