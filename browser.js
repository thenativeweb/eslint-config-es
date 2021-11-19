'use strict';

const defaultConfiguration = require('./build/lib/defaultConfiguration');

const env = {
  ...defaultConfiguration.env,

  browser: true,
  commonjs: true,
  serviceworker: true,
  'shared-node-browser': true,
  worker: true
};

module.exports = { ...defaultConfiguration, env };
