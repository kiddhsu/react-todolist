
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
###### inline style

1. 用駝峰式取得 CSS 樣式名稱，且不能有 - 號<br>
若要使用 CSS 的短橫線，可將所有的 key 都變成字串<br>
2. Component 的字首須為大寫字母

# Day 9 
###### 生命週期
1. Component Render 完畢。
2. Component 內的 State 改變。
3. Component 被移除時。

# Day 10 
###### Prop-Types
1. 父層 Component 將某些資料或事件交給子層 Component<br>
2. prop type 錯誤時，是否傳入不正確的 Props 型別
