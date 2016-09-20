'use strict';
let commonConfig = require('./webpack.common.config');
let merge = require('webpack-merge');

module.exports = merge.smart(commonConfig, {
  devServer: {
    contentBase: "./client",
    port: 3000,
    inline: true,
    watchOptions: { aggregateTimeout: 300, poll: 500 }
  },

  devtool: 'cheap-module-source-map'
});
