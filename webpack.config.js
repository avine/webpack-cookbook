const path = require('path')

module.exports = {
  entry: './src/index.js',

  output: {
    publicPath: '/dist', // only used by `webpack-dev-server` command
    path: path.resolve(__dirname, 'dist'), // only used by `webpack` command
    filename: 'bundle.js'
  }
}
