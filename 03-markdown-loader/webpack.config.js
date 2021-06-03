const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: ['html-loader', {
          loader: path.join(__dirname, './markdown-loader.js'),
          options: {
            'rao-config': true
          }
        }],
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    overlay: {
      warnings: true,
      errors: true
    },
    open: true
  }
}
