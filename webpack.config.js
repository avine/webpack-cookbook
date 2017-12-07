const path = require('path')

const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

//const extractHtml = new ExtractTextPlugin('index.html')
const extractCss = new ExtractTextPlugin('bundle.css')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      /*{
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader'
          },
          {
            loader: 'extract-loader'
          },
          { 
            loader: 'html-loader',
            options: { attrs: [':src'] } 
          }
        ],
        //use: extractHtml.extract({
        //  loader: 'html-loader',
        //  options: {
        //    attrs: [':src']
        //  }
        //})
      },*/
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
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
    //extractHtml,
    extractCss,
    new HtmlPlugin({ template: './src/index.html' })
  ],

  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 3000
  }
}
