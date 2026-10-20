# 🏷️ 一维码生成器

> 把商品编号、编号生成 CODE128、EAN13、EAN8 等标准条形码，可调尺寸颜色，下载 PNG。浏览器本地生成，不上传。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/barcode-generator.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

免费一维码生成器：把商品编号、编号等任意文本生成 CODE128、EAN13、EAN8、UPC、CODE39 等标准条形码，可调尺寸颜色，下载 PNG 图片。浏览器本地生成，内容不上传，断网可用。

一维码生成器把商品编号、内部编号等任意文本生成标准的条形码图片。在下方输入框里填写要编码的内容，选择条码格式（常用的是 CODE128，字母数字都能装），调一下宽度、高度和颜色，点「生成条码」按钮，图形立刻出现在预览区；确认扫描枪或手机能识别后，点「下载 PNG」保存高清图片，直接打印贴纸即可。整个绘制过程在浏览器本地完成，输入的内容不会上传到任何服务器，断网状态下也能正常使用。

## ✨ 功能特性

- 免费一维码生成器：把商品编号、编号等任意文本生成 CODE128、EAN13、EAN8、UPC、CODE39 等标准条形码
- 可调尺寸颜色
- 下载 PNG 图片
- 浏览器本地生成
- 内容不上传
- 断网可用

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/barcode-generator.html>，无需安装。

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
<summary>生成的条码可以拿去商店结账吗？</summary>

不建议。市面上流通的商品条码需要向国家物品编码中心申请正规的厂商识别代码和商品项目代码，自己生成的条码只能用于内部管理，扫描枪能识别但不具备商业流通资质。
</details>
<details>
<summary>输入的内容会被上传吗？</summary>

不会。条码在浏览器本地绘制，不发送任何网络请求，断网状态下同样可以正常使用。
</details>
<details>
<summary>该选哪种格式？</summary>

内部编号、字母加数字混合选 CODE128；给商品生成包装条码选 EAN13（13 位）；北美渠道用 UPC（12 位）；小包装用 EAN8；只要大写字母和数字的场合选 CODE39；外包装箱批量管理选 ITF。
</details>
<details>
<summary>为什么生成失败？</summary>

大多数是格式和内容不匹配，比如选了 EAN13 但输入了字母。看输入框上方的提示文字，把内容换成该格式要求的形式，或换个格式重试。
</details>
<details>
<summary>可以批量做很多个吗？</summary>

本页是逐个生成的界面。如果你有大量编号要批量生成条码，可以下载本工具的 Windows 绿色版离线使用，或到知办库工具箱看看批量版本。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`d26b80bdcb3bcb55f56ffa42ddb096069142431d354b21fd38cbf2f5e530f1e3`
- **体积**：83825 字节（约 81.9 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/barcode-generator.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/barcode-generator>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/barcode-generator>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
