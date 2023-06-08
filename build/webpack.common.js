const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: path.resolve(__dirname, '../src'),
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
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
          'less-loader',
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource'
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss', '.less'],
    alias: {
      '@': path.join(__dirname, '../src/client'),
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ]
}