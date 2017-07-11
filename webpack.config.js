'use strict';
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var path = require('path');

module.exports = {
  entry: ['./src/scripts/app.js', './src/scss/main.scss'],
  output: {
		publicPath: 'dist',
		path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
	watch: true,
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
      filename: 'css/[name].bundle.css',
      allChunks: true,
    }),
		new CopyWebpackPlugin([
			{ from: 'src/index.html', to: 'index.html' },
			{ from: 'src/img', to: 'img' }
		]),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    })
  ],
};
