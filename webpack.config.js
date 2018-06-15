const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ManifestPlugin = require('webpack-manifest-plugin')

const babelOptions = {
  babelrc: false,
  presets: ['env']
}

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: './app/main.js',
    style: './app/main.css'
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'app'),
          path.resolve(__dirname, 'common')
        ],
        loader: 'babel-loader',
        options: babelOptions
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        // loads all assets from assets/ for use by common/assets.js
        test: require.resolve('./build/gen_asset_map.js'),
        use: ['babel-loader', 'val-loader']
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[chunkhash:8].css'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ManifestPlugin()
  ],
  devServer: {
    before: require('./server/dev'),
    hot: true
  }
}
