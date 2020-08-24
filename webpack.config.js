const path = require('path');
const apiMocker = require('connect-api-mocker');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => ({
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
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'bundle-[hash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: argv.mode === 'production' ? '/project-react-1-kwonmory' : '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
  devServer: {
    before: (app) => {
      app.use(apiMocker('/api', '/mocks/api'));
    },
    historyApiFallback: true,
  },
});
