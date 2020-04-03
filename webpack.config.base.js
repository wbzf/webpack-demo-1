const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "XDML - 写代码啦",
      template: "src/assets/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"] // 将 Less 编译为 CSS
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: { implementation: require("dart-sass") }
          }
          // "sass-loader"
        ]
      }
    ]
  }
};
