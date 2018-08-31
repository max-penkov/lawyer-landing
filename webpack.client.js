const path = require('path');
const webConfig = require('./webConfig');
const webpack = require('webpack');

module.exports = {
	// Tell webpack the root file of our
	// server application
	entry: [
		'./src/index.js', './src/style/main.scss'],

	// Tell webpack where to put the output file
	// that is generated
	output: {
		filename: 'client_bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/build'
	},

	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: '/node_modules/',
				options: {
					presets: [
						'react', 'stage-0', ['env', {
							target: {browsers: ['last 2 versions']}
						}]
					],
					"compact": false
				}
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].min.css',
							outputPath: 'assets/css/'
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader',
						options: {
							minimize: true,
							url: true,
							root: webConfig.siteURL
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
				loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
			}
		]
	}
};


