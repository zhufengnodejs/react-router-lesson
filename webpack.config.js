var path = require('path');
var webpack = require('webpack');
// 编译后自动打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// 产出html模板
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      contentBase: './build',
      port: 8080,
      stats: { colors: true }
    },
    entry: {
      index: path.resolve(__dirname, 'app/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js"
    },
    resolve: {
      extension: ['', '.jsx', '.js', '.json'],
    },
    devtool: 'source-map',
    'display-error-details': true,
    module: {
      loaders: [
        {
          test: /\.js[x]?$/,
          loaders: ['react-hot', 'babel'],
          exclude: path.resolve(__dirname, 'node_modules')
        },
        {
          test: /\.css/,
          loader: 'style!css'
        },
        {
          test: /\.less/,
          loader: 'style!css!less'
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url?limit=8192'
        },
        {
          test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000"
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: '珠峰培训',
        template: './app/index.html',
      }),
      new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
};
