# 密码生成器

使用浏览器加密级随机数生成高强度密码，支持长度/字符集/易混淆字符排除与熵值评估。

- 在线使用：<https://www.zhibanku.com/tools/password-generator.html>
- 本目录源码：[`index.html`](index.html)（单文件，零依赖，双击即可在浏览器打开）
- SHA-256：`044888ab9060da30534c1c2ab7877c1d3f2a1484aab04a9784039aa9c0235c72`

## 实现要点

`crypto.getRandomValues()` + 拒绝采样避免取模偏差；每类至少一个 + 整体洗牌。

## 隐私

页面不发起任何网络请求、不写 Cookie、不使用 localStorage。所有计算在浏览器本地完成。

## 许可

MIT © 2026 知办库 (zhibanku.com)
