module.exports = {
  devServer: {
    overlay: false,
  },
  publicPath: process.env.NODE_ENV === 'development'
    ? '/'
    : '/vue-todolist/',
};
