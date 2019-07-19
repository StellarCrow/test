const path = require('path');
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, "./src/styles/main.scss")]
    }
  },
  css: {
    loaderOptions: {
      sass: {
        includePaths: [path.resolve(__dirname, './node_modules/compass-mixins/lib')]
      }
    }
  }
}
