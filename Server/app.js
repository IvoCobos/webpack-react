const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");

const compiler = webpack(
    require("../webpack.config")
);
const express = require("express");
const app = express();

app.use(
  middleware(compiler, {
    // webpack-dev-middleware options
  })
);

app.listen(3000, () => console.log("Example app listening on port 3000!"));