var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require("./webpack.config.base.js");
module.exports = {
  ...base,
  mode: "production",
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    })
  ],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/public/path/to/"
            }
          },
          "css-loader"
        ]
      }
    ]
  }
};

// var path = require("path");

// module.exports = {
//   //   entry: "index.js",
//   //   output: {
//   //     path: path.resolve(_dirname, "./dist"),
//   //     filename: "index_bundle.js"
//   //   },
//   //   plugins: [new HtmlWebpackPlugin()]
// };

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"]
//       }
//     ]
//   }
// };
