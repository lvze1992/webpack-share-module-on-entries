const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js',
    main2: './src/index2.js',
  },
  output: {
    filename: 'built.[name].js',
    path: resolve(__dirname, 'build'),
    publicPath: '',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    // 导入映射文件 告诉webpack哪些库不打包，同时修改引入时的名称
    new webpack.DllReferencePlugin({ manifest: resolve(__dirname, 'dll/manifest.json') }),
    // 引入上面未打包的库
    new AddAssetHtmlWebpackPlugin({ filepath: resolve(__dirname, 'dll/math.js') }),
  ],
  mode: 'production',
};
