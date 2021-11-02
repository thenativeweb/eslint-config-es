'use strict';

const unicorn = {
  'unicorn/better-regex': [ 'error', { sortCharacterClasses: true }],
  'unicorn/catch-error-name': [ 'error', { name: 'ex', ignore: [ '^ex([A-Z0-9].*)?$' ]}],
  'unicorn/consistent-function-scoping': 'error',
  'unicorn/custom-error-definition': 'off',
  'unicorn/error-message': 'error',
  'unicorn/escape-case': 'error',
  'unicorn/expiring-todo-comments': [ 'error', {
    ignoreDatesOnPullRequests: false,
    terms: [ 'todo' ],
    allowWarningComments: false
  }],
  'unicorn/explicit-length-check': [ 'error', { 'non-zero': 'greater-than' }],
  'unicorn/filename-case': [ 'error', {
    cases: {
      camelCase: true,
      pascalCase: true,
      kebabCase: false,
      snakeCase: false
    },
    ignore: [
      'next-env.d.ts'
    ]
  }],
  'unicorn/import-index': [ 'error', { ignoreImports: false }],
  'unicorn/import-style': [ 'error', {
    styles: {
      crypto: { unassigned: false, default: true, namespace: false, named: false },
      fs: { unassigned: false, default: true, namespace: false, named: false },
      path: { unassigned: false, default: true, namespace: false, named: false },
      stream: { unassigned: false, default: false, namespace: false, named: true },
      url: { unassigned: false, default: false, namespace: false, named: true },
      util: { unassigned: false, default: false, namespace: false, named: true }
    },
    extendDefaultStyles: false,
    checkImport: true,
    checkDynamicImport: true,
    checkExportFrom: true,
    checkRequire: true
  }],
  'unicorn/new-for-builtins': 'error',
  'unicorn/no-abusive-eslint-disable': 'error',
  'unicorn/no-array-instanceof': 'error',
  'unicorn/no-console-spaces': 'error',
  'unicorn/no-fn-reference-in-iterator': 'error',
  'unicorn/no-for-loop': 'error',
  'unicorn/no-hex-escape': 'error',
  'unicorn/no-nested-ternary': 'error',

  // The unicorn/no-new-buffer rule does the same thing as ESLint's built-in
  // no-buffer-constructor rule.
  'unicorn/no-new-buffer': 'off',
  'unicorn/no-null': 'off',
  'unicorn/no-object-as-default-parameter': 'error',
  'unicorn/numeric-separators-style': [ 'error', {
    hexadecimal: { minimumDigits: 0, groupLength: 2 },
    binary: { minimumDigits: 0, groupLength: 4 },
    octal: { minimumDigits: 0, groupLength: 4 },
    number: { minimumDigits: 0, groupLength: 3 }
  }],
  'unicorn/prefer-math-trunc': 'error',
  'unicorn/prefer-ternary': 'error',
  'unicorn/no-process-exit': 'error',
  'unicorn/no-reduce': 'off',
  'unicorn/no-unreadable-array-destructuring': 'error',
  'unicorn/no-unsafe-regex': 'off',
  'unicorn/no-unused-properties': 'off',
  'unicorn/no-useless-undefined': 'error',
  'unicorn/no-zero-fractions': 'error',
  'unicorn/number-literal-case': 'error',
  'unicorn/prefer-add-event-listener': 'off',
  'unicorn/prefer-array-find': 'error',
  'unicorn/prefer-dataset': 'error',
  'unicorn/prefer-event-key': 'error',
  'unicorn/prefer-flat-map': 'error',
  'unicorn/prefer-includes': 'error',
  'unicorn/prefer-modern-dom-apis': 'off',
  'unicorn/prefer-negative-index': 'error',
  'unicorn/prefer-node-append': 'off',
  'unicorn/prefer-node-remove': 'off',
  'unicorn/prefer-number-properties': 'error',
  'unicorn/prefer-optional-catch-binding': 'error',
  'unicorn/prefer-query-selector': 'off',
  'unicorn/prefer-reflect-apply': 'error',
  'unicorn/prefer-replace-all': 'error',
  'unicorn/prefer-set-has': 'error',
  'unicorn/prefer-spread': 'error',
  'unicorn/prefer-starts-ends-with': 'error',
  'unicorn/prefer-string-slice': 'error',
  'unicorn/prefer-text-content': 'off',
  'unicorn/prefer-trim-start-end': 'error',
  'unicorn/prefer-type-error': 'off',
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/string-content': 'off',
  'unicorn/throw-new-error': 'error'
};

module.exports = {
  unicorn
};
