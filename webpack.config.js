var path = require("path");
var webpack = require("webpack");

module.exports = {
  //target: "node",
  devtool: "cheap-module-eval-source-map",
  entry: ["webpack-hot-middleware/client", "./index.js"],
  node: {
    fs: "empty",
    child_process: "empty"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel"],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css?$/,
        loaders: ["style", "raw"],
        include: __dirname
      }
    ]
  }
};
