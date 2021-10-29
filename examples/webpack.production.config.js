// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders')('production');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const jsonminify = require('jsonminify');
const packageJson = require('./package.json');

const branchNameProcessArgument = '--branch';
let branchName = process.argv.filter(arg => arg.startsWith(branchNameProcessArgument))[0];
branchName = branchName ? branchName.replace(`${branchNameProcessArgument}=`, '') : false;

const analyze = process.argv.some(arg => arg.startsWith('--analyze'));

const optionalPlugins = [];

if (analyze) {
  optionalPlugins.push(new BundleAnalyzerPlugin({ analyzerPort: 8123 }));
}

const version = packageJson.version;

/**
 * Variable which checks if we are building a branch for prod (branch name should start with 'release', 'master' or 'hotfix').
 * If that is the case, an additional IS_PROD environment variable is set. (See down for more info).
 */
const buildForProduction = branchName
  ? branchName.startsWith('release') || branchName.startsWith('master') || branchName.startsWith('hotfix')
  : false;

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: ['@babel/polyfill', './src/index.tsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          chunks: 'all',
          enforce: true,
        },
        lottie: {
          test: /[\\/]node_modules[\\/](lottie-web|lottie-web[\\/]build[\\/]player|react-lottie)[\\/]/,
          name: 'lottie',
          chunks: 'all',
          enforce: true,
        },
        dateFns: {
          test: /[\\/]node_modules[\\/](date-fns)[\\/]/,
          name: 'date-fns',
          chunks: 'all',
        },
        vodafonePub: {
          test: /[\\/]node_modules[\\/](@vodafonepub)[\\/]/,
          name: 'vodafonePub',
          chunks: 'all',
        },
        vodafoneZiggo: {
          test: /[\\/]node_modules[\\/](@vodafoneziggo)[\\/]/,
          name: 'vodafoneZiggo',
          chunks: 'all',
        },
        common: { name: 'common', minChunks: 2, chunks: 'all', priority: 10, reuseExistingChunk: true, enforce: true },
      },
    },
  },
  output: {
    publicPath: '/my/',
    path: path.join(__dirname, 'public'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
      react: path.resolve(path.join(__dirname, './node_modules/react')),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.png', '.jpg', '.gif', '.jpeg'],
    modules: [path.join(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: loaders,
  },
  plugins: [
    ...optionalPlugins,

    /**
     * We create an additional 'IS_PROD' env variable because every build we do on CI will be prod,
     * because this also kick in minification etc. Dev build will only be locally.
     * But since we also want to know if we are creating a build for the production environment,
     * we have this extra env variable. This is used eg for excluding certain pages in production,
     * while still having them on all the other environments.
     */
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        IS_PROD: buildForProduction ? true : false,
        VERSION: JSON.stringify(version),
      },
    }),
    new FilterWarningsPlugin({
      exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: { configFile: path.resolve(__dirname, './tsconfig.app.json') },
      // Makes sure linting errors a present before webpack builds, so errors can block the successful build.
      async: false,
    }),
    new StyleLintPlugin({
      files: './src/**/*.{ts,tsx}',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'src/static'),
          to: path.join(__dirname, 'public/static'),
          transform: function(fileContent, path) {
            // Minify all JSON files.
            return /\.json$/gi.test(path) ? jsonminify(fileContent.toString()) : fileContent;
          },
        },
        {
          from: path.join(__dirname, 'version.json'),
          to: path.join(__dirname, 'public/version.json'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[chunkhash].css',
    }),
    new CssMinimizerPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ZipPlugin({
      path: __dirname,
      pathPrefix: 'my',
      filename: `${version}.zip`,
      // Make sure we exclude our sourcemaps from the artifact. We don't want
      // them to end up in production :)
      exclude: [/\.js.map$/],
    }),
  ],
};
