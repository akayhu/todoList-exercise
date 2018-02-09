const path = require('path');

module.exports = [
	{
		name: 'client',
		target: 'web',
		entry: '../index.js',
		output: {
			path: path.join(__dirname, 'static'),
			filename: 'index.js',
			publicPath: '/static/',
		},
		resolve: {
			extensions: ['.js', '.jsx']
		},
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules\/)/,
					use: [
						{
							loader: 'babel-loader',
						}
					]
				}
			],
		},
	},
	{
		name: 'server',
		target: 'node',
		entry: '../server/server.js',
		output: {
			path: path.join(__dirname, 'static'),
			filename: 'server.js',
			libraryTarget: 'commonjs2',
			publicPath: '/static/',
		},
		devtool: 'source-map',
		resolve: {
			extensions: ['.js', '.jsx']
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules\/)/,
					use: [
						{
							loader: 'babel-loader',
						}
					]
				}
			],
		},
	}
];
