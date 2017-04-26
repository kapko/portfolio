var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// Webpack Config
module.exports = {
  entry: {
    'main': './frontend/main.browser.ts',
  },
  output: {
    publicPath: '',
    path: path.resolve(__dirname, './src/js'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
    modules: [ path.resolve(__dirname, 'node_modules') ]
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader'
        ]
      },
      { test: /\.css$/, 
        loaders: ['to-string-loader', 'css-loader'] 
      },
      { test: /\.html$/, 
        loader: 'raw-loader' 
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url-loader?name=/[path][name].[ext]?limit=10000"
      },
      {
        test: /.(svg|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=25000&mimetype=application/font-woff"
      },
    ],
  }
}
