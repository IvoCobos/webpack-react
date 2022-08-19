const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const middleware = require("webpack-dev-middleware");
const webpackConfig = require("../webpack.config.js")(CopyPlugin);

const compiler = webpack(
    webpackConfig,
);
const express = require("express");
const app = express();

app.use(
  middleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);

app.listen(3000, () => console.log("Example app listening on port 3000!"));