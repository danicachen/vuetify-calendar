module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 3000,
    open: true
  },
  publicPath:process.env.NODE_ENV === 'production'
  ? '/vuetify-calendar/'
  : '/'
}
