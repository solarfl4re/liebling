const path = require('path');
const cssPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'assets')
  },
  entry: {
    bundle: './src/webpack.entry.js',
    testmaker: './src/webpack.testmaker.js',
    quiz: './src/webpack.quiz.js',
    home: './src/webpack.home.js',
    post: './src/webpack.post.js',
    page: './src/webpack.page.js'
  },
  plugins: [new cssPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [cssPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          cssPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
