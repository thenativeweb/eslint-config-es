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
  typescript,
  unicorn
} from './rules';

const parserOptions: Linter.ParserOptions = {
  sourceType: 'script',

  // TODO [@types/eslint@>=7.28.3] The ts-expect-error can be removed once our
  // PR gets merged: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/57037
  // @ts-expect-error This is a bug in the ESLint-Typings
  // A string "latest" is actually allowed (the types only specify numbers)
  // see: https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options
  ecmaVersion: 'latest',
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

  // @ts-expect-error react is actually set by the plugin.
  settings.react = { version: 'detect' };
}

let rules: Linter.RulesRecord = compile({
  ...comments,
  ...coreRules,
  ...extended,
  ...mochaRules,
  ...unicorn,
  ...createSharedRulesFor({ language: 'javascript' })
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
      ...typescript,
      ...createSharedRulesFor({ language: 'typescript' })
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
