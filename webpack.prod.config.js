'use strict';
let commonConfig = require('./webpack.common.config');
let webpack = require('webpack');
let merge = require('webpack-merge');
let CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge.smart(commonConfig, {
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new CopyWebpackPlugin([
      { from: 'index.html' },
      { from: 'favicon.ico' },
      { from: 'api', to: 'api' },
      { from: 'img', to: 'img' }
    ])
  ],

  devtool: 'source-map'
});
