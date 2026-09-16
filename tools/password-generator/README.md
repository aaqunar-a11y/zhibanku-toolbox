# 密码生成器 — 在线生成高强度随机密码

> 浏览器加密级随机数生成高强度密码，可自定义长度与字符集，全程本地运行。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/password-generator.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

知办库免费在线密码生成器：使用浏览器加密级随机数生成高强度密码，可自定义长度与字符集、排除易混淆字符、评估强度。全程本地运行，密码不上传。

使用浏览器内置的加密级随机数源生成密码，可自定义长度与字符集。所有计算在你的设备上完成，密码不会被发送到任何服务器。

## ✨ 功能特性

- 知办库免费在线密码生成器：使用浏览器加密级随机数生成高强度密码
- 可自定义长度与字符集、排除易混淆字符、评估强度
- 全程本地运行
- 密码不上传

## ⚙️ 工作原理

根据你勾选的字符集拼出候选字符表，并按选项剔除易混淆字符。 用 crypto.getRandomValues() 取随机字节，再用拒绝采样把它映射到字符表下标。这样每个字符出现概率严格相等，不会像 Math.random() 那样引入取模偏差。 若勾选“每类至少一个”，会先从每个已选类别各取一个字符，剩余位随机填充，最后整体洗牌，避免固定位置规律。 按字符表大小 log₂(N) × 长度 估算信息熵，给出强度参考。 本页不联网，不写 Cookie，不使用 localStorage。刷新即清空。

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/password-generator.html>，无需安装。

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

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`30caf8f198ba85935c2b6d23e1b671c6b7729ac63ecef550d988d8407eb2c532`
- **体积**：17252 字节（约 16.8 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/password-generator.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/password-generator>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/password-generator>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
