const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'production' ? 'false' : 'true',
    output: {
      sourcePrefix: ' '
    },
    amd: {
      toUrlUndefined: true
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
        common: path.resolve('src/common'),
        components: path.resolve('src/components'),
        assets: path.resolve('src/assets'),
        api: path.resolve('src/api'),
        utils: path.resolve('src/utils'),
        views: path.resolve('src/views'),
        base: path.resolve('src/base')
      }
    },
    plugins: [
      new CopyWebpackPlugin([{
        from: path.resolve('static'),
        to: 'static',
        ignore: ['.*']
      }])
    ],
    module: {
      rules: [
        {
          test: /\.(fbx|obj|gltf|glb|basis|drc)$/,
          loader: 'url-loader'
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  },
  devServer: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'https://todoenv.kangyun3d.com/index.php',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api/'
        }
      }
    }
  }
}