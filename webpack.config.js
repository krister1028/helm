const path = require('path');
const webpack = require('webpack');
const SourceMapDevToolPlugin = require('webpack/lib/SourceMapDevToolPlugin');


module.exports = {
  entry: {
    helm: ['./src/main'],
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name]-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ],

  },
  resolve: {
    alias: {  // https://webpack.github.io/docs/configuration.html#resolve-alias
    },
    // https://webpack.github.io/docs/configuration.html#resolve-extensions
    extensions: ['.webpack.js', '.web.js', '.js', '.ts']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor-bundle.js' }),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      options: {
        tslint: {
          tsConfigFile: 'tslint.json',
          failOnHint: true,
          typeCheck: true,
          emitErrors: true,
        },
      }
    }),
    new SourceMapDevToolPlugin({
      exclude: /vendor/,
      filename: '[name]-bundle.js.map',
      append: '//# sourceMappingURL=[url]'
    }),
    new webpack.optimize.UglifyJsPlugin({
      test: /vendor/,
    }),
    new webpack.optimize.UglifyJsPlugin({
      exclude: /vendor/,
      mangle: false,
      comments: /\/\/# sourceMappingURL=\[url]/,
      sourceMap: true
    }),
  ]
};
