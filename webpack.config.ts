const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { Configuration } = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.join(__dirname, 'build'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'template', 'index.html'),
    }),
  ],
};
