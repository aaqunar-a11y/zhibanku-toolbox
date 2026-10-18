# ⚖️ BMI 计算器

> 输入身高体重一键算 BMI，按中国标准判断体重区间。浏览器本地计算，不上传。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/bmi-calc.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

免费 BMI 计算器：输入身高体重一键算出身体质量指数，按中国标准判断体重区间，给出健康体重参考范围。浏览器本地计算，不上传。

BMI 计算器用身高和体重算出你的身体质量指数（BMI），并按中国成人标准判断体重区间。在下方输入框里填身高（厘米）和体重（公斤），点「计算 BMI」按钮，结果和体重区间会立刻显示出来，同时给出健康体重参考范围。整个过程在浏览器本地完成，输入的数字不会上传到任何服务器。

## ✨ 功能特性

- 免费 BMI 计算器：输入身高体重一键算出身体质量指数
- 按中国标准判断体重区间
- 给出健康体重参考范围
- 浏览器本地计算

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/bmi-calc.html>，无需安装。

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
<summary>BMI 结果准确吗？</summary>

作为群体筛查指标它是可靠的，但个体层面有局限：同样 BMI 24 的人，一个可能是肌肉型一个可能是脂肪型。建议结合腰围和体脂率一起看。
</details>
<details>
<summary>输入的数据会被上传吗？</summary>

不会。计算在浏览器本地完成，不发送任何网络请求，断网状态下也能正常使用。
</details>
<details>
<summary>健康体重范围怎么算出来的？</summary>

按 BMI 18.5 到 23.9（中国标准）反推你的身高对应的体重区间，即 18.5×身高² 到 23.9×身高² 公斤，中间值就是健康体重。
</details>
<details>
<summary>为什么我和体检报告的区间不一样？</summary>

可能是标准口径不同（中国标准 vs WHO），或报告用了年龄修正。本工具默认中国成人标准，可切换 WHO 对比查看。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`bc59b1f2d417366cdd681de5c03f38813498066a6d436cc2f2a173558a38402f`
- **体积**：20366 字节（约 19.9 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/bmi-calc.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/bmi-calc>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/bmi-calc>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
