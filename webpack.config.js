const path = require('path');

module.exports = {
  // entry 進入點
  entry: './src/index.jsx',
  // output 是打包後的檔案產生位置
  output: {
    // 打包後的檔案名稱
    filename: 'bundle.js',
    // 指定路徑
    path: path.resolve(__dirname, './dist/'),
  },
  module: {
    // 有新要轉換語法的地方，都會在這設置
    rules: [
      {
        // 所有 .js 結尾的都經由這個 rules 的 loader 做轉換
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            // 針對不同的副檔名（例如：JSX）會有不同的 Preset
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
};