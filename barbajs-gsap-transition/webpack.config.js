const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, argv) => ({
	mode: argv.mode,
	devtool: 'source-map',
	entry: './src/js/app.js',
	output: {
		publicPath: './dist/',
		filename: 'js/bundle.js',
		chunkFilename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	optimization: {
		usedExports: true,
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: argv.mode === 'development',
			}),
			new OptimizeCSSAssetsPlugin({}),
		],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(scss)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							sourceMap: argv.mode === 'development',
						},
					},
					{
						loader: 'css-loader',
						options: {
							url: false,
							sourceMap: argv.mode === 'development',
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins() {
								return [require('autoprefixer')];
							},
							sourceMap: argv.mode === 'development',
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: argv.mode === 'development',
							implementation: require('sass'),
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[id].css',
		}),
		new CleanWebpackPlugin(),
	],
});
