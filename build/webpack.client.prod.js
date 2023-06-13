const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.client.common')
const webpackNodeExternals = require('webpack-node-externals')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const client = merge(common, {
  entry: './client/main.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'client.prod.bundle.js',
    publicPath: '/',
  },
  // devtool: 'eval-cheap-module-source-map',
  target: 'web',
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ]
  }
})

const ssr = merge(common, {
  entry: './ssr/main.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'ssr.prod.bundle.js',
    publicPath: '/',
    globalObject: 'this',
  },
  externalsPresets: { node: true },
  externals: [webpackNodeExternals()],
  target: 'node',
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ]
  }
})

module.exports = [client, ssr]