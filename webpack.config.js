const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const outPathName = argv.mode === "development" ? "dist" : "build";

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, outPathName),
      filename: "qy-sdk-steup.mini.js",
      library: {
        name: "qy-sdk-steup",
        type: "umd",
      },
    },
    plugins:
      argv.mode === "development"
        ? [
            new HtmlWebpackPlugin({
              template: "./index.html",
            }),
          ]
        : [],
  };
};
