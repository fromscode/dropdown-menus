const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  entry: "./src/initDropDown.js",
  output: {
    filename: "index.js",
    library: {
      name: "initDropDown",
      type: "umd",
    },
  },
});
