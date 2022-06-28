const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const [outPathName, entry] =
    argv.mode === "development"
      ? ["dist", "./src/test.js"]
      : ["build", "./src/index.js"];
  return {
    entry,
    output: {
      path: path.resolve(__dirname, outPathName),
      filename: "qy-sdk-steup.mini.js",
      library: {
        name: 'QySdkSteup',
        type: 'umd',
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
