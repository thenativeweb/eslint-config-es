'use strict';

const server = require('./server');

const parserOptions = server.parserOptions,
      globals = server.globals,
      plugins = server.plugins,
      rules = server.rules;

const env = {
  browser: true,
  commonjs: true,
  'shared-node-browser': true,
  es6: true,
  mocha: true,
  node: true
};

module.exports = { parserOptions, env, globals, plugins, rules };
