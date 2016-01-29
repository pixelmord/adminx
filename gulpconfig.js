var path = require('path');

module.exports = {
  basePath: './assets',
  browserSyncOptions: {
    proxyServer: 'avery-seed.dev'
  },
  lintBrowser: {
    src: '/js/*.js'
  },
  stylesheets: {
    src: '/sass/**/*.scss',
    dest: '/css',
    sassOptions: {
      includePaths: [
        path.join(__dirname, 'assets','vendor')
      ]
    },
    autoprefixerOptions: {
      browsers: ['last 2 versions'],
      cascade: false
    }
  },
  cssInject: {
    target: path.join('../adminx.libraries.yml'),
    src: path.join('css', 'component', '**', '*.css')
  },
  notify: {
    successIcon: path.join(__dirname, 'gulp', 'images', 'success.png'),
    failedIcon: path.join(__dirname, 'gulp', 'images', 'failed.png'),
    errorIcon: path.join(__dirname, 'gulp', 'images', 'error.png')
  },
  backstopTest: {
    gitHook: false
  }
};
