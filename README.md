
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
###### inline style 注意事項
**筆記**
JavaScript 中的 Object key 不能有 - 號，因此 inline 的 style，都要用駝峰式取得 CSS 樣式名稱，<br>
ex:background-color 要寫成 backgroundColor。<br>
若要使用 CSS 的短橫線，可將所有的 key 都變成字串<br>
ex:'background-color'
