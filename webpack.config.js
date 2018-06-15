const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
    filename: '[name].[chunkhash:8].js',
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
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { modules: false, importLoaders: 1 }
            }
          ]
        })
      },
      {
        // loads all assets from assets/ for use by common/assets.js
        test: require.resolve('./build/gen_asset_map.js'),
        use: ['babel-loader', 'val-loader']
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.[hash:8].css'
    }),
    new ManifestPlugin()
  ],
  devServer: {
    before: require('./server/dev')
  }
}
