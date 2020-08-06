const path = require('path');
const apiMocker = require('connect-api-mocker');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: process.env.BASE_URL || '/',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: './index.html',
          to: './',
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  devServer: {
    before: (app) => {
      app.use(apiMocker('/api', '/mocks/api'));
    },
    historyApiFallback: {
      historyApiFallback: true,
    },
  },
};
