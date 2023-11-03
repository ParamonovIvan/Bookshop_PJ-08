var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js',
        assetModuleFilename: path.join('dist', '[name][ext]')
    },
    mode: 'production',
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: "./index.pug",
        filename: "index.html"
      }),
      new ESLintPlugin({
        "emitError": false
      })
    ],
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [
              MiniCssExtractPlugin.loader, 
              "css-loader",
              "sass-loader",
            ],
          },
          {
            test:/\.pug$/,
            use: 'pug-loader'
          },
          {
            test: /\.svg$/,
            type: 'asset/resource',
            generator: {
              filename: path.join('images', '[name][ext]'),
            },
          },
        ],
    },
    optimization: {
      minimizer: [
        `...`,
        new CssMinimizerPlugin(),
      ],
    },
      
}