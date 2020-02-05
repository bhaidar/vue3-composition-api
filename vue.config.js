module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/scss/variables.scss";',
      },
    },
  },
};
