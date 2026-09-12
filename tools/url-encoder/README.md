# URL 编解码

encodeURIComponent / encodeURI / decode 三模式互转，附保留字符对照表。

- 在线使用：<https://www.zhibanku.com/tools/url-encoder.html>
- 本目录源码：[`index.html`](index.html)（单文件，零依赖，双击即可在浏览器打开）
- SHA-256：`e2d71f6bf484983d3fc95ebab526445655565e3ca56739b796676a7271e26eac`

## 实现要点

基于浏览器内置编解码函数，捕获 `URI malformed` 并给出可读提示。

## 隐私

页面不发起任何网络请求、不写 Cookie、不使用 localStorage。所有计算在浏览器本地完成。

## 许可

MIT © 2026 知办库 (zhibanku.com)
