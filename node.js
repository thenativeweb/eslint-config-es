'use strict';

const path = require('path');

const isInstalled = require('./lib/isInstalled');

const { esLintCore } = require('./lib/rules/base');
const { extended } = require('./lib/rules/extended');
const { mochaRules } = require('./lib/rules/mocha');
const { react } = require('./lib/rules/react');
const { typescript } = require('./lib/rules/typescript');
const { unicorn } = require('./lib/rules/unicorn');

const parserOptions = {
  sourceType: 'script',

  // eslint-disable-next-line unicorn/numeric-separators-style
  ecmaVersion: 2021,
  ecmaFeatures: {
    globalReturn: false,
    impliedStrict: false,
    jsx: true
  }
};

const env = {
  es6: true,
  mocha: true,
  node: true
};

const globals = {};

const plugins = [ 'extended', 'mocha', 'unicorn' ];
const settings = {};

if (isInstalled('react')) {
  plugins.push('react');
  settings.react = { version: 'detect' };
}

let rules = {
  ...esLintCore,
  ...extended,
  ...mochaRules,
  ...unicorn
};

if (plugins.includes('react')) {
  rules = {
    ...rules,
    ...react
  };
}

const overrides = [
  {
    files: [ '*.ts', '*.tsx' ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ...parserOptions,
      sourceType: 'module',
      project: path.join('.', 'tsconfig.json')
    },
    globals: { ...globals, NodeJS: true },
    plugins: [ ...plugins, '@typescript-eslint' ],
    rules: {
      ...typescript
    }
  }
];

module.exports = {
  parserOptions,
  env,
  globals,
  plugins,
  settings,
  rules,
  overrides
};
