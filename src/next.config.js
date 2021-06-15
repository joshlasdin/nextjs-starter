const withPlugins = require('next-compose-plugins');
const sourcemaps = require('@zeit/next-source-maps');
const tm = require('next-transpile-modules');

const transpileModules = ['camelcase', 'camelcase-keys', 'lodash-es', 'map-obj', 'tailwindcss'];

module.exports = withPlugins([tm(transpileModules), sourcemaps], {
  webpack: (config) => {
    config.resolve.modules = [process.env.NODE_PATH, 'node_modules'];
    return config;
  },
});
