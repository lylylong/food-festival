const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const webpack = require("webpack");
const path = require("path");

module.exports = {
  // entry: "./assets/js/script.js",
  entry: {
    app: "./assets/js/script.js",
    events: "./assets/js/events.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js",
  },
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "main.bundle.js",
  // },
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name(file) {
                return "[path][name].[ext]";
              },
              publicPath: function (url) {
                return url.replace("../", "/assets/");
              },
            },
          },
          {
            loader: "image-webpack-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new BundleAnalyzerPlugin({
      // This will output an HTML file called report.html that will generate in the dist folder
      analyzerMode: "static",
      // We can also set this value to disable to temporarily stop the reporting...
      // ...and automatic opening of this report in the browser.
    }),
  ],
  mode: "development",
};
