const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.client.common')
const webpackNodeExternals = require('webpack-node-externals')

const client = merge(common, {
  entry: './client/main.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'client.bundle.js',
    publicPath: '/',
  },
  devtool: 'eval-cheap-module-source-map',
  target: 'web',
})

const ssr = merge(common, {
  entry: './ssr/main.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'ssr.bundle.js',
    publicPath: '/',
    globalObject: 'this',
  },
  externalsPresets: { node: true },
  externals: [webpackNodeExternals()],
  target: 'node',
})

module.exports = [client, ssr]