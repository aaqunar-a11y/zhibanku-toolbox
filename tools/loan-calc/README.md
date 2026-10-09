# 贷款月供计算器

> 在线房贷车贷月供计算器：输入贷款金额、年利率与期限，自动算出等额本息与等额本金的月供、总利息与还款总额，并给出前若干期还款计划表。纯本地计算，不上传任何数据。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/loan-calc.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在线房贷车贷月供计算器：输入贷款金额、年利率与期限，自动算出等额本息与等额本金的月供、总利息与还款总额，并给出前若干期还款计划表。纯本地计算，不上传任何数据。

输入金额、年利率与期限，对比等额本息与等额本金的月供、总利息与还款总额。

## ✨ 功能特性

- 在线房贷车贷月供计算器：输入贷款金额、年利率与期限
- 自动算出等额本息与等额本金的月供、总利息与还款总额
- 并给出前若干期还款计划表
- 纯本地计算
- 不上传任何数据

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/loan-calc.html>，无需安装。

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
<summary>计算结果和银行的一样吗？</summary>

公式一致，结果应基本吻合。实际差异通常来自银行按「实际天数」计息、提前还款、利率浮动或四舍五入规则。本工具按标准公式计算，仅供预算参考。
</details>
<details>
<summary>为什么利率填 0 也能算？</summary>

零利率时退化为「本金 ÷ 期数」，常用于亲友借款或免息分期。工具对这种情况做了单独处理，不会出现除零。
</details>
<details>
<summary>还款计划表为什么只显示前 12 期？</summary>

30 年房贷有 360 期，全部列出会很长。工具固定展示前 12 期以作节奏参考；等额本息每期金额相同，等额本金每期递减，规律清晰。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`6b8e2ebaff9af67bd33cc8e243c0200a072aefc0304fda62e73fb0d495c1d839`
- **体积**：12515 字节（约 12.2 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/loan-calc.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/loan-calc>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/loan-calc>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
