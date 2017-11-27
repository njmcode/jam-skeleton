import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const SRC_PATH = path.join(__dirname, 'src')
const DIST_PATH = path.join(__dirname, 'dist')

const phaserModule = path.join(__dirname, '/node_modules/phaser-ce/')
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
const pixi = path.join(phaserModule, 'build/custom/pixi.js')
const p2 = path.join(phaserModule, 'build/custom/p2.js')

const baseConfig = {
  entry: {
    index: path.join(SRC_PATH, 'game', 'index.js'),
    vendor: ['pixi', 'p2', 'phaser'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: SRC_PATH,
        exclude: [
          /node_modules/,
          path.join(SRC_PATH, 'lib')
        ],
        use: [{
          loader: 'babel-loader',
        }],
      },
      // Assets handled as file paths for import
      {
        test: /\.(jpg|png|gif|jpeg|mp3|mp4|ogg|wav)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
          },
        }],
      },
      // Hoop-jumping to alllow Phaser import
      {
        test: /pixi\.js/,
        use: [{
          loader: 'expose-loader',
          options: 'PIXI',
        }],
      },
      {
        test: /phaser-split\.js$/,
        use: [{
          loader: 'expose-loader',
          options: 'Phaser',
        }],
      },
      {
        test: /p2\.js/,
        use: [{
          loader: 'expose-loader',
          options: 'p2',
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'index'],
      chunksSortMode: 'manual',
      template: path.join(SRC_PATH, 'shell', 'index.html'),
      filename: 'index.html',
    })
  ],
  resolve: {
    modules: [
      'node_modules',
      SRC_PATH,
      path.resolve(SRC_PATH, 'game'),
    ],
    alias: { phaser, pixi, p2 },
  },
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: DIST_PATH,
    publicPath: 'http://localhost:8080/',
  },
}

export default baseConfig
