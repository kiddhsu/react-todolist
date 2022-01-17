
Day 1 小記
修復新 webpack 版本的 webpack 錯誤
npm run build引發錯誤：error: unknown option '-p'. 
解法:
package.json內的webpack -p
更改為 --mode production

