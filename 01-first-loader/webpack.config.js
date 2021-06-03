// webpack.config.js
const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './index.js'),
  module:  {
    rules: [
      {
        test: /.js$/,
        use: path.resolve(__dirname, './rao-loader.js' )
      }
    ]
  }
};
