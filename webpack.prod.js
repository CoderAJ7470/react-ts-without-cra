const path = require('path');
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
 mode: 'production',
 output: {
  filename: 'bundle.js',
  path: path.join(__dirname, '/dist')
 }
});
