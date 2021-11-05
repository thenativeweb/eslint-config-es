import { compile } from './betterRules';
import { isInstalled } from './isInstalled';
import { Linter } from 'eslint';
import { mapKeys } from 'lodash';
import path from 'path';
import {
  comments,
  coreRules,
  createSharedRulesFor,
  extended,
  mochaRules,
  react,
  typeScript,
  unicorn
} from './rules';

const parserOptions: Linter.ParserOptions = {
  sourceType: 'script',
  ecmaVersion: 12,
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

const plugins = [ 'eslint-comments', 'extended', 'mocha', 'unicorn' ];
const settings = {};

if (isInstalled('react')) {
  plugins.push('react');

  // @ts-expect-error react is actuall set by the plugin
  settings.react = { version: 'detect' };
}

let rules: Linter.RulesRecord = compile({
  ...comments,
  ...coreRules,
  ...extended,
  ...mochaRules,
  ...unicorn,
  ...createSharedRulesFor({ language: 'javaScript' })
});

// The ruleName of "react/prefer-es6-class" is wrongly converted to kebab-case
// as lodash's kebab function treats the "6" as its own word, resulting in prefer-es-6-class.
// The workaround below fixes this.
const fixReactEs6Rule = (reactRulesRecord: Linter.RulesRecord): Linter.RulesRecord =>
  mapKeys(reactRulesRecord, (value, key): string => {
    if (key === 'react/prefer-es-6-class') {
      return 'react/prefer-es6-class';
    }

    return key;
  });

if (plugins.includes('react')) {
  rules = {
    ...rules,
    ...fixReactEs6Rule(compile(react))
  };
}

const overrides: Linter.ConfigOverride[] = [
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
    rules: compile({
      ...typeScript,
      ...createSharedRulesFor({ language: 'typeScript' })
    })
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
