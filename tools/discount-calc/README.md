# 折扣计算器

> 折扣计算器：输入原价与折扣，一键算出折后价、折扣率与省下金额，支持满减叠加，结果可复制。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/discount-calc.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

折扣计算器：输入原价与折扣，一键算出折后价、折扣率与省下金额，支持满减叠加，结果可复制。

折扣计算器帮你快速算清购物优惠：输入商品原价和折扣力度（如 8.5 折或 75% 折扣），点击「计算折扣」按钮，即可在下方结果区看到折后价、折扣率以及省下的金额。支持满减叠加计算，结果可一键复制。无论是网购比价、商场促销还是批量算账，都能帮你省心省力，避免算错钱。

## ✨ 功能特性

- 折扣计算器：输入原价与折扣
- 一键算出折后价、折扣率与省下金额
- 支持满减叠加
- 结果可复制

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/discount-calc.html>，无需安装。

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
<summary>折扣值输入 8.5 和 85 有什么区别？</summary>

输入 8.5 表示 8.5 折，即原价的 85%。输入 85 会被自动识别为 85% 折扣，同样按 8.5 折计算。系统对大于 10 的数值自动按百分比处理。
</details>
<details>
<summary>满减叠加是怎么计算的？</summary>

先按折扣算出折后价，再判断是否满足满减条件。多个满减同时满足时，自动选择优惠金额最大的一档，不叠加多档。
</details>
<details>
<summary>结果可以保留几位小数？</summary>

默认保留两位小数，四舍五入。例如 99.999 会显示为 100.00。您复制的结果就是显示值。
</details>
<details>
<summary>数据会上传到服务器吗？</summary>

不会。所有计算都在您的浏览器本地完成，没有任何网络请求，关闭页面后数据即消失，请放心使用。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`e31d9e4f57e9b334b90e55b26f238449d2e45129b906451f2ef587cc30d16d48`
- **体积**：20529 字节（约 20.0 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/discount-calc.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/discount-calc>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/discount-calc>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
