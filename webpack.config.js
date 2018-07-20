const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'whatwg-fetch',
    './lib/brandibble',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'brandibble.js',
    libraryTarget: 'umd',
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname),
    ],
    extensions: ['.js'],
    alias: { brandibble: 'lib' },
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        include: [
          path.join(__dirname, 'lib'),
          path.join(__dirname, 'spec'),
        ],
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      BRANDIBBLE_API_KEY: 'eyJhbGciOiJIUzI1NiIsImV4cCI6MTUyNTI2OTk5NiwiaWF0IjoxNDkzNzMzOTk2fQ.eyJlbWFpbCI6Imh1Z2hAc2FuY3R1YXJ5Y29tcHV0ZXIuY29tIiwiZG9tYWluIjoiaHR0cHM6Ly9zYW5jdHVhcnkuY29tcHV0ZXIiLCJhcGlfdXNlcl9pZCI6IjMiLCJuYW1lIjoiU2FuY3R1YXJ5In0.wCqXurhYH4AJr_mi-xjTxemNlJMsycATpT-weMtZq8Y'
    }),
  ],
};
