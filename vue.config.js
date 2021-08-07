module.exports = {
  publicPath: process.env.VUE_APP_ASSET_URL || '/',
  transpileDependencies: ['vue-clamp', 'resize-detector'],
  productionSourceMap: false,
  configureWebpack: {
    entry: {
      app: './src/main.js',
    },
  },
};
