'use strict';
let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  entry: {
    'main': './app/main.js',
    'vendor': './app/vendor.js',
    'style': './app/style.js',
  },

  output: {
    path: './dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  context: path.join(__dirname, 'client'),

  resolve: {
    root: [ path.join(__dirname, 'client') ],
    extensions: ['', '.js']
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({ name: ['main', 'vendor'], minChunks: Infinity }),
    new ExtractTextPlugin('style.bundle.css'),
    new ProgressBarPlugin()
  ],

  stats: {
    errorDetails: true,
    colors: true,
    modules: true,
    reasons: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['latest']
        }
      },
      { test: /\.html$/, loader: 'html?attrs=false&caseSensitive&removeAttributeQuotes=false' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
};
