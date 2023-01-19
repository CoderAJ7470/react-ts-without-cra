const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

/**
 * Specifies that the HTMLWebpackPlugin should use the index.html file as the base file
 */
module.exports = {
 plugins: [
  new HTMLWebpackPlugin({
   template: './src/index.html'
  })
 ],

 /**
  * Set of rules that define what should be used to process and transpile JS and TS files (by babel and ts-loader respectively), and what they should exclude (or ignore)
  */
 module: {
  rules: [
   {
    test: /.js$/,
    exclude: /node_modules/,
    use: {
     loader: 'babel-loader',
     options: {
      presets: ['@babel/preset-env', '@babel/preset-react']
     }
    }
   },
   {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: ['ts-loader']
   }
  ]
 },

 // configures how webpack resolves modules
 resolve: {
  extensions: ['.tsx', '.ts', '.jsx', '.js']
 }
};
