// 开发组件开发使用，入口是预览示例

const path = require("path");

module.exports = {
  entry: "./example/index.tsx", // 入口文件改为 example/index.tsx
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath: "/",
    library: "TntReactComponent",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "example"),
    },
    hot: true,
    open: true,
  },
};
