var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '/static/'
  },
  resolve: {
    // alias: {
    //   'react-ace':  path.join(__dirname, '..', 'src', 'ace.jsx')
    // }
  },
  plugins: [
  ],
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.jsx?$/,
      query: {
        presets: ['es2015', 'react']
      },
      exclude: /node_modules/
    }]
  }
};