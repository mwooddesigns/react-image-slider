path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: './build/js/components/Slider',
	output: {
		path: path.join(__dirname, 'dist/js'),
		filename: 'slider.js',
		publicPath: '/dist/js/',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel']
		}],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	],
};
