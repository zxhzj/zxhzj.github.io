const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: "/dist/",
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader : 'file-loader'
      }
    ]
  }
};

