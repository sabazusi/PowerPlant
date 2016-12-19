'use strict'
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  devtool: false,

  entry: [
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: './index.js',
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    })
  ],

  target: 'electron-main',

  node: {
    __dirname: false,
    __filename: false,
  }
})
