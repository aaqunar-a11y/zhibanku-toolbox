# 百分比计算器

> 在线百分比计算器：一站算清四种常见场景——X 的百分之几、X 占 Y 的比例、从 A 到 B 的涨跌幅，以及折扣后的价格与节省金额。输入即时出结果，纯本地计算。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/percentage-calc.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在线百分比计算器：一站算清四种常见场景——X 的百分之几、X 占 Y 的比例、从 A 到 B 的涨跌幅，以及折扣后的价格与节省金额。输入即时出结果，纯本地计算。

四种最常见的百分比计算：求部分、求占比、求涨跌、算折扣，输入即出结果。

## ✨ 功能特性

- 在线百分比计算器：一站算清四种常见场景——X 的百分之几、X 占 Y 的比例、从 A 到 B 的涨跌幅
- 以及折扣后的价格与节省金额
- 输入即时出结果
- 纯本地计算

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/percentage-calc.html>，无需安装。

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
<summary>涨跌幅里原值为 0 怎么办？</summary>

原值为 0 时变化率在数学上没有定义（分母为零），工具会给出提示而不会输出无限大。此时更适合直接报绝对变化量。
</details>
<details>
<summary>涨 100% 再跌 100% 为什么不是回到原点？</summary>

因为基数变了。100 涨 100% 变成 200，再从 200 跌 100% 就变成 0。所以「涨跌百分比」不能简单相加。
</details>
<details>
<summary>折扣填 8.5 是什么含义？</summary>

表示 8.5 折，即原价的 85%。工具按「原价 × 折扣 ÷ 10」计算，支持小数折扣。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`e05c390fe2d28adb1432ff1fa3196bf36d63ef2382d61f36dd0c7c7826bdfa12`
- **体积**：11574 字节（约 11.3 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/percentage-calc.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/percentage-calc>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/percentage-calc>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
