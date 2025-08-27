const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/index.html"],
    static: "./dist",
  },
  entry: "./src/index.js", 
  output: {
    filename: "bundle.js",
  },
});
