module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/demos/figures',
  transpileDependencies: ['vuex-persist'],
  css: {
    loaderOptions: {
      sass: {
        data: '@import \'@/assets/sass/helpers.sass\''
      },
      css: {
        sourceMap: true
      }
    }
  }
}
