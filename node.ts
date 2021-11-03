import { compile } from './lib/betterRules/compile';
import { esLintCore } from './lib/rules/base';
import { extended } from './lib/rules/extended';
import { isInstalled } from './lib/isInstalled';
import { mochaRules } from './lib/rules/mocha';
import path from 'path';
import { react } from './lib/rules/react';
import { typescript } from './lib/rules/typescript';
import { unicorn } from './lib/rules/unicorn';

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

  // @ts-expect-error react is actuall set by the plugin
  settings.react = { version: 'detect' };
}

let rules = {
  ...esLintCore,
  ...extended,
  ...compile(mochaRules),
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
    // eslint-disable-next-line @typescript-eslint/naming-convention
    globals: { ...globals, NodeJS: true },
    plugins: [ ...plugins, '@typescript-eslint' ],
    rules: {
      ...typescript
    }
  }
];

export {
  parserOptions,
  env,
  globals,
  plugins,
  settings,
  rules,
  overrides
};
