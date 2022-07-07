const path = require('path');

module.exports = {
  entry: './client/src', //Place we want webpack to consolidate
  output: {
    path: path.resolve(__dirname, '/client/dist'), //Path that we want the webpack files to be added
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}

