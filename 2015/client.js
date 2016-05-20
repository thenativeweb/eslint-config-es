'use strict';

const { parserOptions, globals, plugins, rules } = require('./server');

const env = {
  browser: true,
  commonjs: true,
  'shared-node-browser': true,
  es6: true,
  mocha: true,
  node: true
};

module.exports = { parserOptions, env, globals, plugins, rules };
