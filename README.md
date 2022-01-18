
# Day 1 

###### 修復新 webpack 版本的 webpack 錯誤

npm run build引發錯誤：error: unknown option '-p'

**解法:**
package.json內的webpack -p
更改為 --mode production

# Day 5 
###### 修復新 npm run start 無法執行
**解法:**
devServer: { 
    // contentBase: './dist',
    static: './dist',
  },

# Day 6 
###### 注意事項

1. inline 的 style，都要用駝峰式取得 CSS 樣式名稱，且不能有 - 號<br>
若要使用 CSS 的短橫線，可將所有的 key 都變成字串<br>
2. Component 的字首須為大寫字母
