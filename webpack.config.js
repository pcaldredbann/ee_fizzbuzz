const path = require('path');

module.exports = (env) => {
  return {
    context: __dirname,
    target: 'web',
    mode: 'production',
    entry: path.resolve(__dirname, 'src'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'fizzbuzzer.js'
    },
    devtool: 'source-map'
  }
}
