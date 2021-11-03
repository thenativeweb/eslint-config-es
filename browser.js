'use strict';

const defaultConfig = require('./build/lib/defaultConfig');

const env = {
  ...defaultConfig.env,

  browser: true,
  commonjs: true,
  serviceworker: true,
  'shared-node-browser': true,
  worker: true
};

module.exports = { ...defaultConfig, env };
