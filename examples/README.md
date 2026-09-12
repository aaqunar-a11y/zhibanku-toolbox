# 示例

四个可直接运行的例子，按「从最简单的调用」到「实际问题的完整处理」排列。

| 文件 | 演示内容 | 运行方式 |
| --- | --- | --- |
| [`01-hash-text.js`](01-hash-text.js) | 字符串哈希、`hashAll` 一次算三个算法、`normalizeHex` / `detectAlgorithm`；并用公开标准里的已知答案向量**自证**结果正确 | `node examples/01-hash-text.js` |
| [`02-hash-file.js`](02-hash-file.js) | 用 `fs.createReadStream` 流式计算磁盘文件，打印三个哈希与吞吐；说明内存为什么与文件大小无关 | `node examples/02-hash-file.js <文件> [分片字节数]` |
| [`03-verify-download.js`](03-verify-download.js) | **最贴近真实需求的一个**：拿官方校验值校验已下载的文件，区分 MATCH / MISMATCH / 无法比对三种结局，并给出对应的退出码 | `node examples/03-verify-download.js <文件> <官方校验值>` |
| [`04-browser.html`](04-browser.html) | 浏览器最小可用示例：引入库、拖放文件、流式进度、期望值比对、WebCrypto 交叉校验 | 见下方说明 |

## 运行浏览器示例

`crypto.subtle` 只在安全上下文可用，所以不要直接用 `file://` 打开（那样交叉校验会显示"不可用"，但其余功能仍正常）。用任意静态服务器：

```bash
# 在仓库根目录执行
npx --yes serve .          # 然后访问 http://localhost:3000/examples/04-browser.html
# 或
python -m http.server 8000 # 然后访问 http://localhost:8000/examples/04-browser.html
```

## 想快速验证 03 的行为

用标准文档里的已知值当"官方校验值"，就能看到各种结局。注意用 Node 造样本文件，不要用 shell 的 `/tmp`——在 Windows 上 Git Bash 的 `/tmp` 与 Node 的 `path.resolve()` 指向的不是同一个位置，会导致"文件不存在"的假失败。

```bash
# 在仓库根目录执行
mkdir -p tmp
node -e "require('fs').writeFileSync('tmp/abc.txt',Buffer.from('abc'))"

# MATCH → 退出码 0
node examples/03-verify-download.js tmp/abc.txt \
  ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
echo "退出码 $?"

# MISMATCH → 退出码 1（把末位改成 0）
node examples/03-verify-download.js tmp/abc.txt \
  ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ae
echo "退出码 $?"

# INVALID → 退出码 3（长度不对，无法识别算法）
node examples/03-verify-download.js tmp/abc.txt "not-a-hash"
echo "退出码 $?"

# 走 MD5 分支（32 位自动识别）
node examples/03-verify-download.js tmp/abc.txt 900150983cd24fb0d6963f7d28e17f72
echo "退出码 $?"
```

## 关于示例里的期望值

`01` 与 `03` 里出现的哈希常量都取自公开标准和官方测试集（RFC 1321 附录 A.5、RFC 3174、FIPS 180-4），不是本库算出来再抄回去的——否则"自证"就变成了循环论证。可以在任何系统上用 `sha256sum` / `certutil -hashfile` 复核：

```bash
printf 'abc' | sha256sum
# ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad  -
```
