'use strict';
const webpack = require('webpack');
const path = require('path');
const loadersConf = require('./webpack.loaders')('development');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const fs = require('fs');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const CERT_PATH = '../hawaii-dev-setup/apache/certificates/';
const HOST = process.env.HOST || 'kahuna-src.qnh.nl';
const PORT = process.env.PORT || '8889';

const publicPath = process.env.STANDALONE ? `http://localhost:8899/my/` : `https://${HOST}:8888/my/`;

module.exports = {
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './src/index.tsx'],
  },
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  output: {
    publicPath: publicPath,
    path: path.join(__dirname, 'public'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  module: {
    rules: loadersConf,
  },
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
      react: path.resolve(path.join(__dirname, './node_modules/react')),
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.png', '.jpg', '.gif', '.jpeg'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules', // the old 'fallback' option (needed for npm link-ed packages)
    ],
    symlinks: false,
  },
  devServer: process.env.STANDALONE
    ? {
        devMiddleware: {
          writeToDisk: true,
        },
      }
    : {
        static: ['./public'],
        // enable HMR
        hot: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST,
        // Create SSL certificate for kahuna-src.qnh.nl domain.
        https: {
          key: fs.readFileSync(CERT_PATH + 'stardev.qnh.nl.key'),
          cert: fs.readFileSync(CERT_PATH + 'stardev.qnh.nl.cer'),
          cacert: fs.readFileSync(CERT_PATH + 'stardev.qnh.nl_chain.cer'),
        },
        client: { overlay: true },
        open: [publicPath],
        devMiddleware: {
          writeToDisk: true,
        },
      },
  stats: { children: false, colors: true },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: { configFile: path.resolve(__dirname, './tsconfig.app.json') },
      // Makes sure linting errors a present before webpack builds, so errors can block the successful build.
      async: false,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new StyleLintPlugin({
      files: './src/**/*.{ts,tsx}',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: path.join(__dirname, 'src/static'), to: path.join(__dirname, 'public/static') }],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CssMinimizerPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
