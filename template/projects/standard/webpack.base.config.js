'use strict'
const path = require('path')

module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [
        'babel-loader',
      ],
      exclude: /node_modules/,
    }]
  }
}
