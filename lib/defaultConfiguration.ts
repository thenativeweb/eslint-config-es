import { compile } from './betterRules';
import { isInstalled } from './isInstalled';
import { Linter } from 'eslint';
import { mapKeys } from 'lodash';
import path from 'path';
import {
  comments,
  coreRules,
  extended,
  importRules,
  mochaRules,
  react,
  reactHooks,
  sharedCoreTypescript,
  sharedImportTypescript,
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

const plugins = [ 'eslint-comments', 'extended', 'import', 'mocha', 'unicorn' ];
const settings = {};

if (isInstalled('react')) {
  plugins.push('react');
  plugins.push('react-hooks');

  // @ts-expect-error react is actually set by the plugin.
  settings.react = { version: 'detect' };
}

// eslint-disable-next-line import/no-mutable-exports
let rules: Linter.RulesRecord = compile({
  ...comments,
  ...coreRules,
  ...extended,
  ...importRules,
  ...mochaRules,
  ...unicorn,
  ...sharedCoreTypescript({ language: 'javascript' }),
  ...sharedImportTypescript({ language: 'javascript' })
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
    ...fixReactEs6Rule(compile(react)),
    ...compile(reactHooks)
  };
}

// This import config is necessary to make eslint-plugin-import work
// Import config taken from https://github.com/import-js/eslint-plugin-import/blob/main/config/typescript.js
const allExtensions = [ '.ts', '.tsx', '.js', '.jsx' ];
const pluginImportSettings: Linter.BaseConfig['settings'] = {
  'import/extensions': allExtensions,
  'import/external-module-folders': [ 'node_modules', 'node_modules/@types' ],
  'import/parsers': {
    '@typescript-eslint/parser': [ '.ts', '.tsx' ]
  },
  'import/resolver': {
    node: {
      extensions: allExtensions
    }
  }
};

const overrides: Linter.ConfigOverride[] = [
  {
    files: [ '*.ts', '*.tsx' ],
    parser: '@typescript-eslint/parser',
    settings: {
      ...pluginImportSettings
    },
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
      ...sharedCoreTypescript({ language: 'typescript' }),
      ...sharedImportTypescript({ language: 'typescript' })
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
