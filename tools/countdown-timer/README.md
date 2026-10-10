# 倒计时器

> 在浏览器内对任意日期时间倒计时，设定目标后开始，不上传。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/countdown-timer.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在浏览器内对任意日期时间倒计时，设定目标后开始，不上传。

倒计时器帮你对任意一个日期时间做倒数，比如活动开抢、会议开始、发版截止。打开页面后，在目标时间输入框里选好年月日时分秒，也可以顺手填一句提醒文字，再点「开始倒计时」按钮，页面就会实时显示剩余的天、时、分、秒。倒计时结束时会弹出提示并响铃。所有计算都在你的浏览器里完成，目标时间不会上传到服务器，数据只留在本地。结果就在下方的计时面板里看到，随时可以暂停或重新开始。

## ✨ 功能特性

- 在浏览器内对任意日期时间倒计时
- 设定目标后开始

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/countdown-timer.html>，无需安装。

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
<summary>时区？</summary>

目标使用你设备的本地时间。
</details>
<details>
<summary>可离线吗？</summary>

可以，加载后本地计时，无网络。
</details>
<details>
<summary>倒计时归零之后会自动停下来吗</summary>

会。剩余时间减到零后刷新停止，页面弹出醒目的结束提示并播放提示音，点重新开始就能再跑一轮。
</details>
<details>
<summary>可以同时跑几个倒计时吗</summary>

当前页面一次只维护一个目标时间。需要多个同时倒数的话，可以开几个标签页分别设定，互不影响。
</details>
<details>
<summary>手机浏览器上能正常用吗</summary>

可以，页面按手机屏幕做了适配。锁屏或切到别的应用时计时可能暂停，回到页面会按系统时间自动补算剩余时长。
</details>
<details>
<summary>把目标时间设成过去会怎样</summary>

选了早于当前的时刻会直接提示无效，不会开始计时，需要重新挑一个将来的时间点再点开始倒计时。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`8f3488dbf40242687718fa40227b977c6857fc768687880288d237a00276dfd9`
- **体积**：17566 字节（约 17.2 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/countdown-timer.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/countdown-timer>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/countdown-timer>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
