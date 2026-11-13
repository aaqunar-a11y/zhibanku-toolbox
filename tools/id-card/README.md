# 身份证信息解析工具

> 本地解析18位身份证号，提取地区、生日、性别与校验位，数据不出浏览器。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/id-card.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

本地解析18位身份证号，提取地区、生日、性别与校验位，数据不出浏览器。

本工具用于解析中国大陆18位居民身份证号码，自动提取户籍地区、出生日期、性别和校验位信息。您只需在下方输入框中粘贴或输入完整的18位身份证号，点击「解析身份证」按钮，解析结果会立即显示在下方结果区域中。整个过程完全在浏览器本地运行，身份证数据不会上传到任何服务器，请放心使用。

## ✨ 功能特性

- 本地解析18位身份证号
- 提取地区、生日、性别与校验位
- 数据不出浏览器

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/id-card.html>，无需安装。

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
<summary>身份证号码校验失败是什么原因</summary>

可能是号码长度不足18位、包含非法字符、出生日期无效或校验码不匹配。请检查输入是否正确，注意最后一位X需大写。
</details>
<details>
<summary>为什么地区显示未知</summary>

身份证前6位是行政区划代码，部分地区代码已随行政区划调整而变更。本工具内置了常用代码库，未收录的代码会显示未知地区。
</details>
<details>
<summary>15位身份证能解析吗</summary>

不能。本工具仅支持18位身份证号码。15位旧版号码需先按规则升级为18位（补全出生年份、添加校验码）后再解析。
</details>
<details>
<summary>数据会上传到服务器吗</summary>

不会。所有解析逻辑都在浏览器本地运行，没有任何网络请求，您的数据完全不会离开您的设备。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`e8714e00194a696dcb4543366b88982ab77bfe886139209d40e199fe5b41b261`
- **体积**：30688 字节（约 30.0 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/id-card.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/id-card>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/id-card>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
