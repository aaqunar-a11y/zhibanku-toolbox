# HTML 实体编解码

> HTML 转义/反转义、实体还原、去标签提取纯文本，纯本地运行。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/html-entity.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

在线 HTML 实体编解码工具：把 \

转义特殊字符、把实体还原成字符、从 HTML 里提取纯文本，并提供实时预览确认效果。全部在浏览器本地完成。

## ✨ 功能特性

- 在线 HTML 实体编解码工具：把 \

## ⚙️ 工作原理

转义时用字符替换把 &、<、> 换成实体，顺序上必须先处理 &，否则会把刚生成的 < 再次转义成 &amp;lt;——这是手写转义最常见的错误，顺序错了整段输出就全废。 反转义采用双阶段：先识别 ' 这类数字实体并按十进制/十六进制还原成对应码点，再处理 &nbsp; 这类命名实体。不使用 innerHTML 直接赋值——那样会把内容里的 <script> 一并执行，存在 XSS 风险。 「提取纯文本」先用 DOMParser 把 HTML 解析成文档树（DOMParser 不会执行脚本），再取 textContent，因此结果干净且安全。

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/html-entity.html>，无需安装。

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
<summary>转义后再反转义，能完全还原吗？</summary>

对标准实体可以。但要注意 &nbsp; 还原后得到的是 U+00A0（不换行空格），它看起来像空格但不是，在代码里比较字符串时会不相等——这是排版复制粘贴后排查不出问题的常见原因。
</details>
<details>
<summary>为什么转义要勾选引号？</summary>

只有在把内容放进 HTML 属性值（如 title="..."）时才需要转义引号。放在元素文本内容里的话，转义引号反而会让页面上真的显示出 " 这种字符。
</details>
<details>
<summary>「提取纯文本」和「去除标签」有什么区别？</summary>

前者会解析实体、保留文字语义（例如 < 会变成真正的 < 字符）；后者只是按正则粗暴地删掉尖括号之间的内容，速度快但遇到不规则 HTML 容易出错。推荐用前者。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`399501e93671291b375d231e2973b2eacd51effe5778765c6f70541998d57e4d`
- **体积**：13638 字节（约 13.3 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/html-entity.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/html-entity>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/html-entity>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
