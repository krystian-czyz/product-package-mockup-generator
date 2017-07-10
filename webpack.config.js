'use strict';
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  entry: ['./src/scripts/app.js', './src/scss/main.scss'],
  output: {
		publicPath: 'dist',
		path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
		  {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader', 'postcss-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'dist/css/[name].bundle.css',
      allChunks: true,
    }),
		new CopyWebpackPlugin([
			{ from: 'src/index.html', to: 'dist/index.html' },
			{ from: 'src/img', to: 'dist/img' }
		]),
  ],
};
