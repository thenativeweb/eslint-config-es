'use strict';

const server = require('./server');

const globals = server.globals,
      parserOptions = server.parserOptions,
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
