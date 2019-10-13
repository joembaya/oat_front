const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const DotEnv = require("dotenv-webpack");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});

module.exports = {
  entry: ["@babel/polyfill", path.join(__dirname, "src/index.tsx")],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [htmlWebpackPlugin, new DotEnv()],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    hot: true,
    port: 3001,
  },
};
