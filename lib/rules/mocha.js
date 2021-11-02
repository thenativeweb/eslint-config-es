'use strict';

const mochaRules = {
  'mocha/handle-done-callback': [ 'error', { ignoreSkipped: false }],
  'mocha/max-top-level-suites': [ 'error', { limit: 1 }],
  'mocha/no-async-describe': 'error',
  'mocha/no-exclusive-tests': 'error',
  'mocha/no-exports': 'error',
  'mocha/no-global-tests': 'error',
  'mocha/no-hooks': 'off',
  'mocha/no-hooks-for-single-case': 'off',
  'mocha/no-identical-title': 'error',
  'mocha/no-mocha-arrows': 'off',
  'mocha/no-nested-tests': 'error',
  'mocha/no-pending-tests': 'error',
  'mocha/no-return-and-callback': 'error',
  'mocha/no-return-from-async': 'error',
  'mocha/no-setup-in-describe': 'off',
  'mocha/no-sibling-hooks': 'error',
  'mocha/no-skipped-tests': 'error',
  'mocha/no-synchronous-tests': 'error',
  'mocha/no-top-level-hooks': 'error',
  'mocha/prefer-arrow-callback': 'off',
  'mocha/valid-suite-description': [ 'error', '[^\\.]$' ],
  'mocha/valid-test-description': [ 'error', '\\.$' ]
};

module.exports = {
  mochaRules
};
