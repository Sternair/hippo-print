const withSass = require('@zeit/next-sass');
const withOffline = require('next-offline');
const withImages = require('next-images');

module.exports = withOffline(withImages(withSass({
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
          config.node = {
            fs: 'empty'
          }
        }

        return config
      }
})));
