'use strict';
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./src/scripts/app.js', './src/scss/main.scss'],
  output: {
    filename: 'dist/js/bundle.js'
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
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/css/[name].bundle.css',
      allChunks: true,
    }),
		new CopyWebpackPlugin([
			{ from: 'src/index.html', to: 'dist/index.html' },
			{ from: 'src/img', to: 'dist/img' }
		]),
  ],
};
