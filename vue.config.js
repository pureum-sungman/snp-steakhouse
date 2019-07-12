/**
 * Vue CLI 웹팩 설정
 * @link https://cli.vuejs.org/guide/webpack.html
 **/
const webpack = require('webpack');
const path = require('path');
const glob = require('glob-all');
const PurgecssPlugin = require('purgecss-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './public/index.html'),
          path.join(__dirname, './src/views/**/*.vue'),
          path.join(__dirname, './src/assets/scripts/**/*.js')
        ])
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery'
      })
    ]
  }
};
