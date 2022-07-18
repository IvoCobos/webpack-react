const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './biuld/app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        }
      },
      {
        test: /\.svg$/,
        use: ['url-loader'],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
};