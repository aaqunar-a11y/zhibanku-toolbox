# 数字转中文大写

> 在线数字转中文工具：把阿拉伯数字转换为中文小写读法与财务规范的人民币大写金额，例如 1234.56 转成壹仟贰佰叁拾肆元伍角陆分。适合报销、合同、发票与支票填写，纯本地计算。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/number-to-chinese.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在线数字转中文工具：把阿拉伯数字转换为中文小写读法与财务规范的人民币大写金额，例如 1234.56 转成壹仟贰佰叁拾肆元伍角陆分。适合报销、合同、发票与支票填写，纯本地计算。

输入数字，立即得到中文小写读法与财务规范的人民币大写金额。

## ✨ 功能特性

- 在线数字转中文工具：把阿拉伯数字转换为中文小写读法与财务规范的人民币大写金额
- 例如 1234.56 转成壹仟贰佰叁拾肆元伍角陆分
- 适合报销、合同、发票与支票填写
- 纯本地计算

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/number-to-chinese.html>，无需安装。

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
<summary>为什么 0.05 的大写是「伍分」而不是「零元伍分」？</summary>

按财务惯例，金额不足一元时可省略「零元」，直接写角分。本工具遵循这一写法；若你的单据要求保留「零元」，手动补上即可。
</details>
<details>
<summary>支持多大的数字？</summary>

整数位最多 16 位，可覆盖到「亿亿」量级，日常报销、合同、发票完全够用。超出范围会提示而非给出错误结果。
</details>
<details>
<summary>小数超过两位怎么办？</summary>

金额最小到「分」，因此只保留两位小数。若你要转换的是科学数据而非金额，请先自行四舍五入到两位再输入。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`98f88b718be36c5a473f6b49c543029fe78a08a737c1757f1ca29736c05fb36a`
- **体积**：12127 字节（约 11.8 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/number-to-chinese.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/number-to-chinese>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/number-to-chinese>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
