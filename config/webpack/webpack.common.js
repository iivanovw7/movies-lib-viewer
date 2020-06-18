/**
 * Module contains common webpack configuration
 * @module webpack.common.js
 * @author Igor Ivanov
 */
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const args = require('minimist')(process.argv.slice(2));
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');

const env = dotenv.config().parsed;

/**
 * Processes every env variable to create object with process variables
 *  to be used in webpack.DefinePlugin
 * @type {{}}
 */
const envKeys = Object.keys(env).reduce((prev, next) => {
  // eslint-disable-next-line no-param-reassign
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

// eslint-disable-next-line no-console, no-undef
console.log('cli-env-variables:', JSON.stringify(args, null, 4), '\n');
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|^(?!.*\.(spec|test)\.js$).*\.test$)/,
        use: ['babel-loader'],
      },
      {
        test: /\.(sa|sc|c|s|pc)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              url: false,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: args.mode === 'production',
              attributes: false,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(woff|eot|ttf|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000, // if less than 10 kb, adds base64 encoded image to css
            name: 'assets/fonts/[hash].[ext]', // if more than 10 kb falls to file-loader
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10,
              name: 'assets/img/[name].[ext]', // if more than 10 kb falls to file-loader
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', 'css'],
  },
  entry: './src/app.js',
  node: {
    fs: 'empty',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      title: 'MLV',
      filename: './index.html',
      template: path.resolve(__dirname, '../../src/template/index.html'),
      inject: true,
      minify: args.mode === 'production',
    }),
    new StatsWriterPlugin({
      fields: ['assets', 'modules'],
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].bundle.css',
      chunkFilename: 'assets/css/chunk-[id].css',
      ignoreOrder: true, // Enable to remove warnings about conflicting order
    }),
    new webpack.DefinePlugin(envKeys),
  ],
  devtool: args['source-map'] || false,
  output: {
    filename: 'assets/js/[name].bundle.js',
    path: path.resolve(__dirname, '../../dist'),
  },
};
