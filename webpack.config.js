var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.ProvidePlugin({
      '$': "jquery",
      'jQuery': "jquery",
      'window.jQuery': "jquery",
      'window.$': 'jquery'
    })
  ],
  module: {
    loaders: [
      // for using CJS instead of AMD (AMD is default in datatables module preferences if define is true) for datatables.net modules
      // AMD is just fine with webpack though...
      // {
      //   test: /datatables\.net.*/,
      //   loader: 'imports?define=>false'
      // },
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};




