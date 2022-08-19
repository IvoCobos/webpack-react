const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	devServer: {
    static: {directory: __dirname + 'dist'},
    compress: true,
    port: 8080,
  },
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.svg$/,
				exclude: /node_modules/,
				use: ['url-loader']
			}
		]
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: __dirname + '/public',
					to: __dirname + '/dist'
				}
			]
		})
	],
	optimization: {},
	output: {
		path: __dirname + '/dist',
		filename: 'app.js'
	},
};












