const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html'
});

var config = {
	entry: __dirname + '/src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'index.js'
	},
	devServer: {
		inline: true,
		port: 3010
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.(css|scss)?$/,
				loader: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jp(e*)g|svg)$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		HtmlWebpackPluginConfig
	]
}

module.exports = config;