const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.admin.common')

module.exports = merge(common, {
  devServer: {
    port: 4240,
    hot: true,
    historyApiFallback: {
      rewrites: [
        { from: /./, to: '/admin/' }
      ]
    },
  },
  devtool: 'eval-cheap-module-source-map',
})