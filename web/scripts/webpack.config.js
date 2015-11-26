var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loaders: ['babel'],
        include: [
          path.resolve(__dirname, '../src')
        ]
      },
      {
        test: /\.vue$/,
        loaders: ['vue']
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: ['url']
      }
    ]
  },
  vue: {
    loaders: {
      css: 'style!css!postcss'
    }
  },
  postcss: function () {
    return [
      require('postcss-nested')()
    ]
  },
  plugins: [
  ],
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
}
