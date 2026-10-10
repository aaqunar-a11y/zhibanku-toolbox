# 文件哈希校验器

> 在浏览器本地计算文件的 SHA-256、SHA-1、MD5，并与官方公布的校验值比对。文件不上传，断网可用。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/file-hash-checker.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在浏览器本地计算文件的 SHA-256、SHA-1、MD5 校验值，并可与官方公布的校验值比对，直接给出 MATCH / MISMATCH 结论。文件不上传，断网可用。

文件哈希校验器在浏览器本地给文件算校验值。点「选择文件」把要检查的文件拖进来或选中，页面会立刻算出 SHA-256、SHA-1 和 MD5 三种哈希值；如果你手上有官方公布的校验值，就把它填进「期望校验值」输入框，点「比对」，下方会直接给出是否一致的结论和两组值的对照，下载完安装包想确认没被篡改时用它最快。

## ✨ 功能特性

- 在浏览器本地计算文件的 SHA-256、SHA-1、MD5 校验值
- 并可与官方公布的校验值比对
- 直接给出 MATCH / MISMATCH 结论
- 文件不上传
- 断网可用

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/file-hash-checker.html>，无需安装。

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
<summary>计算时会偷偷上传我的文件吗？</summary>

不会。本页源码里没有任何网络请求代码（没有 fetch、XMLHttpRequest、WebSocket、sendBeacon，也没有表单提交目标），也不引用外部脚本或样式。断网后打开本页仍然可以正常计算；在开发者工具的 Network 面板里清空记录后选择文件并计算，面板中不会出现新的请求。这几点都可以自己验证。
</details>
<details>
<summary>支持多大的文件？</summary>

采用分片读取，默认每片 4 MiB，内存占用与文件大小无关，几十 GB 的文件也不会把内存撑爆。实际速度取决于设备与文件大小，页面会显示实时进度与总耗时，可据此自行判断；数 GB 的文件建议使用仓库附带的 Node 命令行工具，流式读取吞吐更高。
</details>
<details>
<summary>为什么还保留 MD5？应该用哪个算法？</summary>

优先使用 SHA-256。MD5 已被证明可在实际时间内构造碰撞，因此不得用于判断文件是否被恶意替换等安全用途。保留它的唯一原因是：部分软件至今仍只公布 MD5 校验值，为了能与这类历史清单兼容。
</details>
<details>
<summary>结果和 certutil、sha256sum 不一致怎么办？</summary>

先确认比较的是同一种算法——32 位十六进制是 MD5，40 位是 SHA-1，64 位是 SHA-256。若算法一致仍不同，通常意味着文件在下载或传输中被改动、下载不完整，或者你手上的校验值对应的并不是同一个版本。也可以勾选「独立实现交叉校验」，用浏览器原生 WebCrypto 再算一次，从而排除本页实现本身的问题。
</details>
<details>
<summary>为什么「期望哈希」显示 NOT CHECKED？</summary>

有三种可能：一是期望值为空，所以没有比对；二是期望值长度不是 32、40 或 64 位十六进制，无法识别算法，此时会显示 INVALID；三是期望值对应的算法本次没有勾选，改勾上再计算即可。
</details>
<details>
<summary>能一次校验多个文件吗？</summary>

当前版本一次处理一个文件，对应「一个下载包对一个官方校验值」这个最常见场景。批量校验已在计划中，尚未实现。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`9896c6081041eb496056e92c6d1e838f59b5ef428b11122d21c87856957791e3`
- **体积**：56781 字节（约 55.5 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/file-hash-checker.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/file-hash-checker>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/file-hash-checker>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
