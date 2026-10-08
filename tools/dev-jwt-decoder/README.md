# JWT 解码

> 在线 JWT（JSON Web Token）解码工具：粘贴令牌即可解析头部 Header 与载荷 Payload，自动把 exp/iat/nbf 时间戳转换为可读时间。纯浏览器本地解码，令牌不会上传，签名不做验证。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/dev-jwt-decoder.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在线 JWT（JSON Web Token）解码工具：粘贴令牌即可解析头部 Header 与载荷 Payload，自动把 exp/iat/nbf 时间戳转换为可读时间。纯浏览器本地解码，令牌不会上传，签名不做验证。

粘贴 JWT，立即查看 Header 与 Payload 的 JSON 内容，并把时间戳字段转成可读时间。

## ✨ 功能特性

- 在线 JWT（JSON Web Token）解码工具：粘贴令牌即可解析头部 Header 与载荷 Payload
- 自动把 exp/iat/nbf 时间戳转换为可读时间
- 纯浏览器本地解码
- 令牌不会上传
- 签名不做验证

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/dev-jwt-decoder.html>，无需安装。

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
<summary>这里会验证签名吗？</summary>

不会。本工具只做解码，用于查看内容与排查问题。签名验证需要密钥（HS256）或公钥（RS256），必须在服务端完成，浏览器里验证没有安全意义。
</details>
<details>
<summary>因此能把敏感数据放进 Payload 吗？</summary>

不能。Payload 是明文可解的。手机号、身份证、密码等敏感信息不应直接写入 JWT，确需携带时应先加密（JWE）。
</details>
<details>
<summary>令牌会上传吗？</summary>

不会。解码全部在本地完成，页面没有任何网络请求。但仍建议不要在公共电脑上粘贴生产环境令牌。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`479f230a34951a6d2e01b72ffb91938a4170aca1dc60f1d285f5d843a1f3c450`
- **体积**：11753 字节（约 11.5 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/dev-jwt-decoder.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/dev-jwt-decoder>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/dev-jwt-decoder>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
