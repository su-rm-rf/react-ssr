const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.admin.common')

module.exports = merge(common, {
  devServer: {
    port: 4240,
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'eval-cheap-module-source-map',
})