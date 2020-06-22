const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'img@': path.resolve(__dirname, 'src/assets/image'),
      },
    },
  },
  chainWebpack: config => {
    // yaml loader
    config.module
      .rule('yaml')
      .test(/\.ya?ml$/)
      .type('json')
      .use('yaml-loader')
        .loader('yaml-loader')
        .end()
  }
}