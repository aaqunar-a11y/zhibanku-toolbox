# 密码生成器 — 在线生成高强度随机密码

> 浏览器加密级随机数生成高强度密码，可自定义长度与字符集，全程本地运行。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/password-generator.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

知办库免费在线密码生成器：使用浏览器加密级随机数生成高强度密码，可自定义长度与字符集、排除易混淆字符、评估强度。全程本地运行，密码不上传。

密码生成器是知办库的免费在线工具，用浏览器自带的加密级随机数生成高强度密码。在页面上方设置密码长度，勾选是否包含大写字母、小写字母、数字和特殊符号，还能选择排除易混淆字符。设置完成后点「生成密码」按钮，新密码会立刻出现在下方结果区，并附带强度评估；点旁边的「复制」按钮即可取走。全程在本地浏览器完成，不上传服务器，刷新页面后旧密码就没了。

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

## ❓ 常见问题

<details>
<summary>生成的密码会被保存或上传吗</summary>

不会。随机数在浏览器本地产生，页面不记录也不发送任何结果，关掉标签页就什么都不剩。
</details>
<details>
<summary>为什么要排除易混淆字符</summary>

打开这个选项后，0 和 O、1 和 l、I 这类长得像的字符会被剔除，手抄密码时不容易看错。
</details>
<details>
<summary>密码多长才够安全</summary>

一般账号建议 16 位以上并混合大小写、数字和符号，长度越长暴力破解的代价越高，强度评分也会随之提升。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`c5f176bd08af5bec052518822f5f7dceef0ef9919b10cf8dc2d494eec8ac3501`
- **体积**：21102 字节（约 20.6 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/password-generator.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/password-generator>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/password-generator>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
