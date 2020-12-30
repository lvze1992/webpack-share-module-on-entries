const HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack --config webpack.dll.js
const { resolve } = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    math: ['./src/math.js'],
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dll'),
    // 打包库向外暴露的叫什么名字。
    // 不加这个，其他js无法直接引用，会导致运行2遍。
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',// 映射暴露的名称
      path: resolve(__dirname, 'dll/manifest.json'),// 输出映射文件
    }),
  ],
  mode: 'production',
};
