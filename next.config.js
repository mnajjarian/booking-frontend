/* eslint-disable no-undef */
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
module.exports = withCSS(
  withSass({
    target: 'serverless',
    // eslint-disable-next-line no-unused-vars
    webpack: (config, options) => {
      config.plugins = config.plugins || [];
      return config;
    }
  })
);
