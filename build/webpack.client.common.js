const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  context: path.resolve(__dirname, '../src'),
  mode: isProd ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                presets: ['@postcss-preset-env']
              }
            }
          },
          'sass-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                presets: ['@postcss-preset-env']
              }
            }
          },
          'less-loader',
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        }
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json', '.scss', '.less'],
    alias: {
      '@': path.join(__dirname, '../src/client'),
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'client.main.css',
    }),
    new webpack.DefinePlugin({
      'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV),
    }),
  ]
}