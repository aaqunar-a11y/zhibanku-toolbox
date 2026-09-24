# 日期差计算

> 在线日期计算器：输入两个日期，算出相差的天数、周数、月数与工作日天数（自动排除周六周日），并给出目标日期加减若干天后的日期。适合工期、倒计时与请假天数估算。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/date-diff.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在线日期计算器：输入两个日期，算出相差的天数、周数、月数与工作日天数（自动排除周六周日），并给出目标日期加减若干天后的日期。适合工期、倒计时与请假天数估算。

选择两个日期，算出相差天数、周数、月数与工作日天数；下方还可做日期的加减。

## ✨ 功能特性

- 在线日期计算器：输入两个日期
- 算出相差的天数、周数、月数与工作日天数（自动排除周六周日）
- 并给出目标日期加减若干天后的日期
- 适合工期、倒计时与请假天数估算

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/date-diff.html>，无需安装。

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
<summary>「含开始不含结束」是什么意思？</summary>

例如 3 月 1 日到 3 月 10 日，相差 9 天。如果你要的是「头尾都算」的天数，在此基础上加 1 即可。
</details>
<details>
<summary>月数和年数为什么是「约合」？</summary>

每月天数不同（28–31 天），跨月天数无法精确换算。工具按平均每月 30.4375 天估算，仅用于粗略表达，不做精确结算。
</details>
<details>
<summary>日期加减能算到期日吗？</summary>

可以。把「基准日期」设为起始日，「加减天数」填上期限天数（如 90 天），即可得到到期日；填负数就是往前推。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`afe771f1d772000e3340e7f900d27dc94cfd464815dac4a08a9f0f56a18cb6af`
- **体积**：12097 字节（约 11.8 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/date-diff.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/date-diff>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/date-diff>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
