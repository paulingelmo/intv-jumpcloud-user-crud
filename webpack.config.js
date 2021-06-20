// import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  mode: 'development',
  entry: [path.resolve(__dirname, './src/index.jsx')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/client/index.html')
    })
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              babelrc: false,
              plugins: []
            }
          }
        ]
      },
      // Styles
      {
        test: /(\.m)?\.(css|sass)$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]-[local]',
                auto: /\.m\.\w+$/i
              },
              importLoaders: 1
            }
          },
          {
            loader: 'sass-loader',
            options: { sassOptions: { outputStyle: 'compact' } }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.jsx'],
    alias: {}
  },
  watchOptions: {
    aggregateTimeout: 1000
  }
}
