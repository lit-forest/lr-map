const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  // Entry points to the project
  entry: {
    index: [
      'webpack/hot/dev-server',
      'webpack/hot/only-dev-server',
      path.join(__dirname, '/src/app/main.js')],
    vendor: ['react', 'react-dom', 'react-router', 'leaflet','leaflet-draw']
  },
  // Server Configuration options
  devServer: {
    contentBase: 'src/static', // Relative directory for base of server
    devtool: 'inline-source-map',
    historyApiFallback: true,
    hot: true, // Live-reload
    inline: true,
    port: 3232, // Port Number
    host: 'localhost', // Change to '0.0.0.0' for external facing server
  },
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js',
    chunkFilename: '[name].chunk.js' //异步模块文件
  },
  plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // Moves files
    new TransferWebpackPlugin([
      { from: 'static' },
    ], path.resolve(__dirname, 'src')),
    //独立打包样式
    new ExtractTextPlugin('style.css'),
    //独立打包第三方文件
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  module: {
    loaders: [
      {
        // React-hot loader and
        test: /\.js$/, // All .js files
        loaders: ['react-hot', 'babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules')
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader?limit=8192&name=images/[name].[ext]'
      }
    ]
  }
};

module.exports = config;
