import { compile } from './betterRules';
import { esLintCore } from './rules/base';
import { extended } from './rules/extended';
import { isInstalled } from './isInstalled';
import { mochaRules } from './rules/mocha';
import path from 'path';
import { react } from './rules/react';
import { typescript } from './rules/typescript';
import { unicorn } from './rules/unicorn';

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
