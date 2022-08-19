const path = require('path');
const clientPath = path.resolve(__dirname, "client");
const serverPath = path.resolve(__dirname, "server");

module.exports = (CopyPlugin) => ({
	entry: clientPath +'/src/index.js',
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
					from: clientPath + '/public',
					to: serverPath + '/public'
				}
			]
		})
	],
	optimization: {},
	output: {
		path: serverPath + '/public',
		filename: 'app.js'
	},
});












