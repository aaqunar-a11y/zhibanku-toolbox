# 个税计算器

> 按年度累计预扣法计算工资个税，支持五险一金扣除与专项附加扣除，结果明细清晰。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

**在线使用** <https://www.zhibanku.com/tools/salary-tax.html> ｜ **全部工具** <https://www.zhibanku.com/tools/>

## 📖 简介

按年度累计预扣法计算工资个税，支持五险一金扣除与专项附加扣除，结果明细清晰。

本工具按年度累计预扣法计算工资薪金个人所得税，同时支持扣除五险一金个人缴纳部分与专项附加扣除。您只需在下方输入税前月薪、社保公积金、专项附加扣除等数据，点击「开始计算」按钮，即可在结果区查看每月应纳税额、累计预扣税额与实际到手工资。结果明细清晰，方便您核对工资条或做年度税务规划。

## ✨ 功能特性

- 按年度累计预扣法计算工资个税
- 支持五险一金扣除与专项附加扣除
- 结果明细清晰

## 🚀 使用方式

### 在线使用

直接打开 <https://www.zhibanku.com/tools/salary-tax.html>，无需安装。

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
<summary>为什么我算出来的税和工资条上不一样</summary>

工资条上的个税可能包含年终奖分摊、补扣上期差额、特殊津贴等，本工具仅按标准工资薪金计算，未包含这些特殊项目。
</details>
<details>
<summary>五险一金个人缴纳部分怎么填</summary>

请查看您的工资条，找到养老保险、医疗保险、失业保险、住房公积金个人缴纳金额，四项相加填入即可。
</details>
<details>
<summary>专项附加扣除最多能扣多少</summary>

六项专项附加扣除合计每月最高约 5000 元，具体额度取决于您的实际情况，如子女教育每月 2000、赡养老人每月 3000 等。
</details>
<details>
<summary>年终奖怎么算个税</summary>

年终奖可选择单独计税或并入综合所得计税，本工具未包含年终奖计算，如需精确计算请咨询税务专业人士。
</details>

## 📁 文件

| 文件 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 完整工具（单文件，含全部样式与脚本） |

- **SHA-256**：`d298fb1faf08a7592b314fca963e73b36b9ecb9a29117607fae1f7590fe607a9`
- **体积**：24084 字节（约 23.5 KB）

## 🔗 相关链接

- 🌐 在线使用：<https://www.zhibanku.com/tools/salary-tax.html>
- 🧰 知办库全部在线工具：<https://www.zhibanku.com/tools/>
- 💻 GitHub 源码：<https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/salary-tax>
- 🇨🇳 Gitee 镜像（国内）：<https://gitee.com/xie881018/go-go-go/tree/main/tools/salary-tax>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com>
