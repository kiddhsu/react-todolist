const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  // entry 進入點
  entry: ['@babel/polyfill', './src/index.jsx'],
  // output 是打包後的檔案產生位置
  output: {
    // 打包後的檔案名稱
    filename: 'bundle.js',
    // 指定路徑
    path: path.resolve(__dirname, './dist/'),
  },
  resolve: { extensions: ['.js', '.jsx'] },
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
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[name]__[local]___[hash:base64:5]' },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './index.css', // 路徑加輸出的 CSS 檔名
    }),
  ],
  devServer: {
    // 指定 webpack- dev-server 要去讀哪個路徑
    // contentBase: './dist',
    static: './dist',
    // 路徑的部分記得要和上方打包時的 output.path 相同
    port: 9000,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};