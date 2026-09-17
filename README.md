# 知办库工具箱 · Zhibanku Toolbox

> [知办库在线工具](https://www.zhibanku.com/tools/) 的完整前端源码集合 —— 每个工具都是**单文件、零依赖、无网络请求**，下载 `index.html` 双击即可离线使用。

![Tools](https://img.shields.io/badge/tools-7-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Single File](https://img.shields.io/badge/single--file-HTML-orange.svg)
![Zero Dependency](https://img.shields.io/badge/dependencies-0-brightgreen.svg)
![No Network](https://img.shields.io/badge/network-none-success.svg)

## ✨ 特性

- **单文件**：一个 `index.html` 内含全部 CSS 与 JavaScript，无构建、无打包；
- **零依赖**：不引用任何 CDN、框架或第三方库；
- **纯本地**：不发起网络请求、不上传数据、不写 Cookie、不使用 localStorage；
- **可离线**：下载双击即用；也可放到任意静态服务器自行部署；
- **每日更新**：知办库每日新增一个在线工具，本仓库自动同步跟进。

## 📦 工具清单

| 工具 | 在线地址 | 源码 |
| --- | --- | --- |
| 进制转换器 | [在线使用](https://www.zhibanku.com/tools/base-converter.html) | [GitHub](https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/base-converter) · [Gitee](https://gitee.com/xie881018/go-go-go/tree/main/tools/base-converter) |
| 命名风格转换 | [在线使用](https://www.zhibanku.com/tools/case-converter.html) | [GitHub](https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/case-converter) · [Gitee](https://gitee.com/xie881018/go-go-go/tree/main/tools/case-converter) |
| 颜色格式转换器 | [在线使用](https://www.zhibanku.com/tools/color-converter.html) | [GitHub](https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/color-converter) · [Gitee](https://gitee.com/xie881018/go-go-go/tree/main/tools/color-converter) |
| HTML 实体编解码 | [在线使用](https://www.zhibanku.com/tools/html-entity.html) | [GitHub](https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/html-entity) · [Gitee](https://gitee.com/xie881018/go-go-go/tree/main/tools/html-entity) |
| 密码生成器 | [在线使用](https://www.zhibanku.com/tools/password-generator.html) | [GitHub](https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/password-generator) · [Gitee](https://gitee.com/xie881018/go-go-go/tree/main/tools/password-generator) |
| 文本对比工具 | [在线使用](https://www.zhibanku.com/tools/text-diff.html) | [GitHub](https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/text-diff) · [Gitee](https://gitee.com/xie881018/go-go-go/tree/main/tools/text-diff) |
| URL 编解码工具 | [在线使用](https://www.zhibanku.com/tools/url-encoder.html) | [GitHub](https://github.com/aaqunar-a11y/zhibanku-toolbox/tree/main/tools/url-encoder) · [Gitee](https://gitee.com/xie881018/go-go-go/tree/main/tools/url-encoder) |

共 7 个工具，源码自动同步自 <https://www.zhibanku.com/tools/>。

## 🚀 使用方式

每个工具都是单文件，使用非常简单：

1. 在 [`tools/`](tools/) 下找到目标工具目录；
2. 下载其中的 `index.html`；
3. 双击用浏览器打开，或部署到任意静态服务器。

## 🔒 隐私与安全

所有工具都在**浏览器本地**运行：不发起网络请求、不上传输入数据、不写 Cookie、不使用 localStorage、不做任何埋点。可用浏览器开发者工具「网络」面板自行验证。

## 🗂 目录结构

```
tools/
  <slug>/
    index.html   # 工具源码（单文件，含全部样式与脚本）
    README.md    # 工具说明（简介/特性/用法/FAQ/许可）
```

## 🤝 贡献与反馈

- 发现问题或有建议，欢迎提交 Issue；
- 欢迎 Fork、修改与二次开发（遵循 MIT 许可）。

## 🔗 相关链接

- 🌐 在线工具站：<https://www.zhibanku.com/tools/>
- 💻 GitHub：<https://github.com/aaqunar-a11y/zhibanku-toolbox>
- 🇨🇳 Gitee（国内镜像）：<https://gitee.com/xie881018/go-go-go>

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源，可自由使用、修改与分发。

© 2026 知办库 · <https://www.zhibanku.com/>
