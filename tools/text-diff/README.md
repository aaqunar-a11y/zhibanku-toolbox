# 文本对比工具

> 逐行 diff，高亮新增/删除/修改，输出相似度与统计，支持文件导入。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/text-diff.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在线文本对比工具：逐行比较两段文本或两份文件的差异，标出新增、删除与修改行，给出相似度与统计。使用本地最长公共子序列算法，内容不上传。

逐行比较两段文本或两份文件，标出新增、删除与修改，并给出相似度与行数统计。全部计算在浏览器本地完成。

## ✨ 功能特性

- 在线文本对比工具：逐行比较两段文本或两份文件的差异
- 标出新增、删除与修改行
- 给出相似度与统计
- 使用本地最长公共子序列算法
- 内容不上传

## ⚙️ 工作原理

先把两段文本按换行拆成行数组，再用最长公共子序列（LCS）动态规划求出相同行的最大匹配。于是两边的行被分成三类：两边都有的（相同）、只在左边出现的（删除）、只在右边出现的（新增）。 对连续的一段「一删一增」会进一步合并显示，方便看出是改了什么。相似度用 2 × LCS长度 ÷ (旧行数 + 新行数) 计算，取值 0–100%。 为控制内存，当任意一侧超过 3000 行时自动切换为「前缀 + 后缀剥离」的快速模式：先剥掉首尾完全相同的行，只对中间差异区做 DP。这与 Git 的常见做法一致，结果对正常文件没有差别。

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/text-diff.html>，无需安装。

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
<summary>为什么看起来一样的行也被标成修改？</summary>

多半是行尾不可见字符不同，比如 Windows 的 \r\n 与 Linux 的 \n，或者行尾多了空格、用了全角空格。点击「忽略行首尾空白」再对比一次即可确认。本工具已自动忽略 \r。
</details>
<details>
<summary>支持多大的文本？</summary>

两侧各 3000 行以内结果最精确。更大的文本会自动启用快速模式，只对差异区做精细比较，速度仍然很快。
</details>
<details>
<summary>文件会离开我的电脑吗？</summary>

不会。文件通过 FileReader 在本地读取后直接进入比较流程，页面没有任何网络请求，可以打开开发者工具的网络面板验证。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`4ab33f54115ef03883550af2f5a592975a052756d2d3a239700871d810d6bfdc`
- **体积**：13527 字节（约 13.2 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/text-diff.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/text-diff>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/text-diff>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
