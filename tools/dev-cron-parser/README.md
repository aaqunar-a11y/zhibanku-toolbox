# Cron 表达式解析器

> 在线 Cron 表达式解析工具：输入标准 5 段 cron 表达式，实时解析每个字段取值范围，并算出接下来若干次运行时间。支持 *、范围、步长、列表与英文简写，纯本地计算不上传。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/dev-cron-parser.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在线 Cron 表达式解析工具：输入标准 5 段 cron 表达式，实时解析每个字段取值范围，并算出接下来若干次运行时间。支持 *、范围、步长、列表与英文简写，纯本地计算不上传。

输入标准 5 段 cron 表达式（分 时 日 月 周），立即解析各字段含义，并列出接下来的运行时间。

## ✨ 功能特性

- 在线 Cron 表达式解析工具：输入标准 5 段 cron 表达式
- 实时解析每个字段取值范围
- 并算出接下来若干次运行时间
- 支持 *、范围、步长、列表与英文简写
- 纯本地计算不上传

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/dev-cron-parser.html>，无需安装。

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
<summary>为什么「日」和「星期」同时限定时结果变多了？</summary>

这是标准 cron 的语义：只要两者都不为 *，任意一个匹配即触发，相当于「或」。想表达「每月 1 号且是周一」这种「且」，需要把判断放到应用逻辑里。
</details>
<details>
<summary>Linux 的 cron 有 5 段，为什么有些系统有 6 段？</summary>

Quartz 等调度器在前面多一段「秒」，共 6 段。本工具按 Linux crontab 的 5 段标准解析；若你用的是 6 段表达式，请先去掉秒字段。
</details>
<details>
<summary>计算的时间和系统时区有关吗？</summary>

有关。本工具按你浏览器所在时区计算；服务器上 crontab 的时间以服务器时区为准，跨地域部署时要留意差异。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`47c16cc255c4c6eef6be2acaceb13e1df10ca3e3d0a06def0ce2f69024b1dd74`
- **体积**：14501 字节（约 14.2 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/dev-cron-parser.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/dev-cron-parser>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/dev-cron-parser>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
