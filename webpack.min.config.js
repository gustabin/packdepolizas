const path = require('path');
const glob = require('glob');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const TersetJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const InlineChunkWebpackPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
};

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  optimization: {
    minimizer: [
      new TersetJSPlugin(),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: 'head', // insert style tag inside of <head>
              injectType: 'singletonStyleTag', // this is for wrap all your style in just one style tag
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: 'head', // insert style tag inside of <head>
              injectType: 'singletonStyleTag', // this is for wrap all your style in just one style tag
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            'loader': 'url-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          noquotes: true,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      inlineSource: '.(js|css)$',
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      keyframes: true,
    }),
    new InlineChunkWebpackPlugin(HtmlWebPackPlugin, [/\.(js|css)$/]),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*'],
    }),
  ],
};
