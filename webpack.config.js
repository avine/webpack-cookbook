const path = require('path')

const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

const extractCss = new ExtractTextPlugin('bundle.css')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':src']
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              name: '[name].[hash].[ext]'
            }  
          }
        ]
      },
      {
        test: /\.css$/,
        use: extractCss.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },

  plugins: [
    new CleanPlugin('./dist'),
    extractCss,
    new HtmlPlugin({ template: './src/index.html' })
  ],

  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 3000
  }
}
