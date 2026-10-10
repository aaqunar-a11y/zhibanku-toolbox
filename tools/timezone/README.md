# 时区转换：全球时区时间互转工具

> 输入日期时间即可在全球时区之间互转，显示目标时区完整日期、时差、UTC 偏移、夏令时状态与常见城市同一时刻对照。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/timezone.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

输入日期时间即可在全球时区之间互转，显示目标时区完整日期、时差、UTC 偏移、夏令时状态与常见城市同一时刻对照。

时区转换工具用来把任意日期时间在全球各个时区之间互转，解决跨国会议、海外直播、国际航班排期对不上的烦恼。你只需在下方表单里选择源时区、填写要换算的日期和时间，再选好目标时区，点击「开始转换」按钮，结果就会立刻出现在结果卡片中，包含目标时区的完整日期、星期、具体时刻、与源时区的时差、UTC 偏移以及是否处于夏令时，同时附带一张常见城市同一时刻对照表，可一键复制结果。

## ✨ 功能特性

- 输入日期时间即可在全球时区之间互转
- 显示目标时区完整日期、时差、UTC 偏移、夏令时状态与常见城市同一时刻对照

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/timezone.html>，无需安装。

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
<summary>夏令时在结果里是怎么体现的</summary>

结果卡片会单独标注目标时区当前是否处于夏令时，并给出实际生效的 UTC 偏移。处于夏令时的时段，时差通常会比标准时差多一小时，排会议时以卡片显示的偏移为准。
</details>
<details>
<summary>为什么换算结果差了半小时</summary>

印度、尼泊尔、澳大利亚中部等地区采用半小时时区，缅甸采用四分之三小时时区，与相邻时区天然相差 30 或 45 分钟，本工具按真实偏移计算，不会凑成整小时。
</details>
<details>
<summary>换算结果可以直接发给同事吗</summary>

可以。点结果卡片右上角的「复制结果」按钮，会把目标时间、星期、时差、UTC 偏移与夏令时说明整理成一段纯文本，直接粘贴到聊天窗口或邮件正文即可。
</details>
<details>
<summary>手机浏览器上能正常使用吗</summary>

页面采用响应式布局，手机与平板都能完整操作。夏令时规则依赖手机系统自带的时区数据库，建议保持系统与浏览器为最新版本，避免出现过时的时间换算。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`6367a563bac1e5a7a20c9be45419c3d9f88eb9957f344c9af63b69af3a7dc134`
- **体积**：26097 字节（约 25.5 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/timezone.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/timezone>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/timezone>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
