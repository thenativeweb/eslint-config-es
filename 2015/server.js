'use strict';

const includes = require('array-includes');

const isPluginInstalled = require('./isPluginInstalled');

// This is needed for Node.js 4.x support. Once we drop this, we can remove this
// line as well as the entire array-includes package.
includes.shim();

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'script',
  ecmaFeatures: {
    experimentalObjectRestSpread: true,
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

const plugins = [ 'extended', 'mocha', 'react' ].
  filter(plugin => isPluginInstalled(plugin));

const rules = {
  'comma-dangle': [ 2, 'never' ],
  'for-direction': 2,
  'getter-return': [ 2, { allowImplicit: true }],
  'no-await-in-loop': 0,
  'no-compare-neg-zero': 2,
  'no-cond-assign': [ 2, 'always' ],
  'no-console': 2,
  'no-constant-condition': 2,
  'no-control-regex': 2,
  'no-debugger': 2,
  'no-dupe-args': 2,
  'no-dupe-keys': 2,
  'no-duplicate-case': 2,
  'no-empty': 2,
  'no-empty-character-class': 2,
  'no-ex-assign': 2,
  'no-extra-boolean-cast': 2,
  'no-extra-parens': [ 2, 'all', {
    conditionalAssign: false,
    enforceForArrowConditionals: false,
    ignoreJSX: 'all',
    nestedBinaryExpressions: false,
    returnAssign: false
  }],
  'no-extra-semi': 2,
  'no-func-assign': 2,
  'no-inner-declarations': [ 2, 'both' ],
  'no-invalid-regexp': 2,
  'no-irregular-whitespace': 2,
  'no-obj-calls': 2,
  'no-regex-spaces': 2,
  'no-sparse-arrays': 2,
  'no-unexpected-multiline': 2,
  'no-template-curly-in-string': 2,
  'no-unreachable': 2,
  'no-unsafe-finally': 2,
  'no-unsafe-negation': 2,
  'use-isnan': 2,
  'valid-jsdoc': 0,
  'valid-typeof': 2,

  'accessor-pairs': [ 2, { getWithoutSet: false, setWithoutGet: true }],
  'array-callback-return': [ 2, { allowImplicit: true }],
  'block-scoped-var': 2,
  'class-methods-use-this': 2,
  complexity: 0,
  'consistent-return': 0,
  curly: [ 2, 'all' ],
  'default-case': 2,
  'dot-location': [ 2, 'object' ],
  'dot-notation': [ 2, { allowKeywords: true }],
  eqeqeq: 2,
  'guard-for-in': 2,
  'no-alert': 2,
  'no-caller': 2,
  'no-case-declarations': 2,
  'no-div-regex': 2,
  'no-else-return': 2,
  'no-empty-function': [ 2, { allow: [ 'methods' ]}],
  'no-eq-null': 2,
  'no-eval': 2,
  'no-extend-native': 2,
  'no-extra-bind': 2,
  'no-extra-label': 2,
  'no-fallthrough': 2,
  'no-floating-decimal': 2,
  'no-global-assign': 2,
  'no-implicit-coercion': 2,
  'no-implicit-globals': 2,
  'no-implied-eval': 2,
  'no-invalid-this': 0,
  'no-iterator': 2,
  'no-labels': 2,
  'no-lone-blocks': 2,
  'no-loop-func': 2,
  'no-magic-numbers': 0,
  'no-multi-spaces': 2,
  'no-multi-str': 2,
  'no-new': 2,
  'no-new-func': 2,
  'no-new-wrappers': 2,
  'no-octal': 2,
  'no-octal-escape': 2,
  'no-param-reassign': 0,
  'no-proto': 2,
  'no-redeclare': 2,

  // 'no-restricted-properties': [ 2, {}],

  'no-return-assign': [ 2, 'always' ],
  'no-script-url': 2,
  'no-self-assign': 2,
  'no-self-compare': 2,
  'no-sequences': 2,
  'no-throw-literal': 2,
  'no-unmodified-loop-condition': 2,
  'no-unused-expressions': 2,
  'no-unused-labels': 2,
  'no-useless-call': 2,
  'no-useless-concat': 2,
  'no-useless-escape': 2,
  'no-useless-return': 2,
  'no-void': 2,
  'no-warning-comments': 2,
  'no-with': 2,
  radix: 2,
  'vars-on-top': 2,
  'wrap-iife': [ 2, 'inside' ],
  yoda: [ 2, 'never' ],

  strict: [ 2, 'global' ],

  'init-declarations': 0,
  'no-catch-shadow': 2,
  'no-delete-var': 2,
  'no-label-var': 2,
  'no-restricted-globals': 2,
  'no-shadow': 2,
  'no-shadow-restricted-names': 2,
  'no-undef': 2,
  'no-undef-init': 2,
  'no-undefined': 0,
  'no-unused-vars': [ 2, { vars: 'all', args: 'after-used' }],
  'no-use-before-define': 2,

  'callback-return': [ 2, [ 'callback', 'done', 'next' ]],
  'global-require': 2,
  'handle-callback-err': [ 2, 'err' ],
  'no-buffer-constructor': 2,
  'no-mixed-requires': [ 2, true ],
  'no-new-require': 2,
  'no-path-concat': 2,
  'no-process-env': 2,
  'no-process-exit': 2,
  'no-restricted-modules': 0,
  'no-sync': [ 2, { allowAtRootLevel: false }],

  'array-bracket-newline': 0,
  'array-bracket-spacing': [ 2, 'always', {
    singleValue: true,
    objectsInArrays: false,
    arraysInArrays: false
  }],
  'array-element-newline': 0,
  'block-spacing': [ 2, 'always' ],
  'brace-style': [ 2, '1tbs', { allowSingleLine: false }],
  camelcase: 2,
  'comma-spacing': [ 2, { before: false, after: true }],
  'comma-style': [ 2, 'last' ],
  'computed-property-spacing': [ 2, 'never' ],
  'consistent-this': [ 2, 'that' ],
  'eol-last': 2,
  'func-names': 0,
  'func-call-spacing': [ 2, 'never' ],
  'func-name-matching': 0,
  'func-style': [ 2, 'expression' ],
  'function-paren-newline': [ 2, 'consistent' ],
  'id-blacklist': 0,
  'id-length': [ 2, {
    min: 2,
    max: Number.infinity,
    properties: 'always',
    exceptions: [ '_', 'i', 'j', 'x', 'y', 'z' ]
  }],
  'id-match': 0,
  'implicit-arrow-linebreak': 0,
  indent: [ 2, 2, {
    SwitchCase: 1,
    VariableDeclarator: { var: 2, let: 2, const: 3 }
  }],
  'jsx-quotes': [ 2, 'prefer-single' ],
  'key-spacing': [ 2, { beforeColon: false, afterColon: true, mode: 'strict' }],
  'keyword-spacing': [ 2, { before: true, after: true }],
  'line-comment-position': [ 2, { position: 'above' }],
  'linebreak-style': [ 2, 'unix' ],
  'lines-around-comment': [ 2, {
    beforeBlockComment: false,
    afterBlockComment: false,
    beforeLineComment: true,
    afterLineComment: false,
    allowBlockStart: true,
    allowBlockEnd: true,
    allowObjectStart: true,
    allowObjectEnd: true,
    allowArrayStart: true,
    allowArrayEnd: true
  }],
  'lines-between-class-members': [ 2, 'always' ],
  'max-depth': 0,
  'max-len': 0,
  'max-nested-callbacks': 0,
  'max-params': 0,
  'max-statements': 0,
  'max-statements-per-line': [ 2, { max: 1 }],
  'multiline-comment-style': [ 2, 'separate-lines' ],
  'multiline-ternary': [ 2, 'always-multiline' ],
  'new-cap': [ 2, {
    newIsCap: true,
    capIsNew: true,
    newIsCapExceptions: [],
    capIsNewExceptions: [],
    properties: true
  }],
  'new-parens': 2,
  'newline-per-chained-call': [ 2, { ignoreChainWithDepth: 2 }],
  'no-array-constructor': 2,
  'no-bitwise': 2,
  'no-continue': 0,
  'no-inline-comments': 2,
  'no-lonely-if': 2,
  'no-mixed-spaces-and-tabs': [ 2 ],
  'no-multiple-empty-lines': [ 2, { max: 1 }],
  'no-negated-condition': 0,
  'no-nested-ternary': 2,
  'no-new-object': 2,
  'no-plusplus': [ 2, { allowForLoopAfterthoughts: true }],
  'no-restricted-syntax': 0,
  'no-ternary': 0,
  'no-trailing-spaces': [ 2, {
    ignoreComments: false,
    skipBlankLines: false
  }],
  'no-underscore-dangle': 2,
  'no-unneeded-ternary': 2,
  'no-whitespace-before-property': 2,
  'object-curly-newline': [ 2, {
    ObjectExpression: { consistent: true },
    ObjectPattern: { consistent: true }
  }],
  'object-curly-spacing': [ 2, 'always', {
    objectsInObjects: false,
    arraysInObjects: false
  }],
  'object-property-newline': [ 2, { allowAllPropertiesOnSameLine: true }],
  'one-var': 0,
  'one-var-declaration-per-line': [ 2, 'always' ],
  'operator-assignment': [ 2, 'always' ],
  'operator-linebreak': [ 2, 'after' ],
  'padded-blocks': [ 2, 'never' ],
  'padding-line-between-statements': [
    2,
    { blankLine: 'always', prev: '*', next: 'return' },
    { blankLine: 'always', prev: [ 'const', 'let', 'var' ], next: '*' },
    { blankLine: 'any', prev: [ 'const', 'let', 'var' ], next: [ 'const', 'let', 'var' ]},
    { blankLine: 'always', prev: 'directive', next: '*' }, { blankLine: 'any', prev: 'directive', next: 'directive' }
  ],
  'quote-props': [ 2, 'as-needed' ],
  quotes: [ 2, 'single', { avoidEscape: false, allowTemplateLiterals: true }],
  'require-jsdoc': 0,
  semi: [ 2, 'always' ],
  'semi-spacing': [ 2, { before: false, after: true }],
  'semi-style': [ 2, 'last' ],
  'sort-keys': [ 0 ],
  'sort-vars': [ 2, { ignoreCase: true }],
  'space-before-blocks': [ 2, 'always' ],
  'space-before-function-paren': [ 2, { anonymous: 'always', named: 'always' }],
  'space-in-parens': [ 2, 'never' ],
  'space-infix-ops': [ 2, { int32Hint: false }],
  'space-unary-ops': [ 2, { words: true, nonwords: false }],
  'spaced-comment': [ 2, 'always' ],
  'switch-colon-spacing': [ 2, { after: true, before: false }],
  'wrap-regex': 0,

  'arrow-body-style': [ 2, 'as-needed' ],
  'arrow-parens': [ 2, 'as-needed' ],
  'arrow-spacing': [ 2, { before: true, after: true }],
  'constructor-super': 2,
  'generator-star-spacing': [ 2, { before: true, after: true }],
  'no-class-assign': 2,
  'no-confusing-arrow': 2,
  'no-const-assign': 2,
  'no-dupe-class-members': 2,
  'no-duplicate-imports': 2,
  'no-new-symbol': 2,
  'no-restricted-imports': 0,
  'no-this-before-super': 2,
  'no-useless-computed-key': 2,
  'no-useless-constructor': 2,
  'no-var': 2,
  'object-shorthand': [ 2, 'always' ],
  'prefer-arrow-callback': [ 2, { allowNamedFunctions: false, allowUnboundThis: true }],
  'prefer-const': [ 2, { destructuring: 'any', ignoreReadBeforeAssign: true }],
  'prefer-numeric-literals': 2,
  'prefer-reflect': [ 2, { exceptions: []}],
  'prefer-rest-params': 2,
  'prefer-spread': 2,
  'prefer-template': 2,
  'require-yield': 2,
  'sort-imports': [ 2, {
    ignoreCase: true,
    ignoreMemberSort: false,
    memberSyntaxSortOrder: [ 'single', 'multiple', 'all', 'none' ]
  }],
  'symbol-description': 2,
  'template-curly-spacing': [ 2, 'never' ],
  'yield-star-spacing': [ 2, { before: true, after: true }]
};

if (plugins.includes('extended')) {
  rules['extended/consistent-err-names'] = [ 2, 'prefix' ];
}

if (plugins.includes('mocha')) {
  rules['mocha/no-exclusive-tests'] = 2;
  rules['mocha/no-skipped-tests'] = 2;
  rules['mocha/no-pending-tests'] = 2;
  rules['mocha/handle-done-callback'] = 2;
  rules['mocha/no-synchronous-tests'] = 2;
  rules['mocha/no-global-tests'] = 2;
  rules['mocha/no-return-and-callback'] = 2;
  rules['mocha/valid-test-description'] = 0;
  rules['mocha/valid-suite-description'] = 0;
  rules['mocha/no-sibling-hooks'] = 2;
  rules['mocha/no-mocha-arrows'] = 0;
  rules['mocha/no-hooks'] = 0;
  rules['mocha/no-hooks-for-single-case'] = 0;
  rules['mocha/no-top-level-hooks'] = 2;
  rules['mocha/no-identical-title'] = 2;
  rules['mocha/max-top-level-suites'] = [ 2, { limit: 1 }];
}

if (plugins.includes('react')) {
  rules['react/display-name'] = 0;
  rules['react/forbid-component-props'] = 0;
  rules['react/forbid-prop-types'] = 0;
  rules['react/no-children-prop'] = 0;
  rules['react/no-danger'] = 0;
  rules['react/no-danger-with-children'] = 2;
  rules['react/no-deprecated'] = 0;
  rules['react/no-did-mount-set-state'] = 0;
  rules['react/no-did-update-set-state'] = 0;
  rules['react/no-direct-mutation-state'] = 2;
  rules['react/no-find-dom-node'] = 2;
  rules['react/no-is-mounted'] = 2;
  rules['react/no-multi-comp'] = 0;
  rules['react/no-render-return-value'] = 2;
  rules['react/no-set-state'] = 0;
  rules['react/no-string-refs'] = 2;
  rules['react/no-unescaped-entities'] = 2;
  rules['react/no-unknown-property'] = 2;
  rules['react/no-unused-prop-types'] = 2;
  rules['react/prefer-es6-class'] = [ 2, 'always' ];
  rules['react/prefer-stateless-function'] = [ 2, { ignorePureComponents: false }];
  rules['react/prop-types'] = 0;
  rules['react/react-in-jsx-scope'] = 2;
  rules['react/require-optimization'] = 0;
  rules['react/require-render-return'] = 2;
  rules['react/self-closing-comp'] = [ 2, { component: true, html: true }];
  rules['react/sort-comp'] = 2;
  rules['react/sort-prop-types'] = [ 2, { callbacksLast: true, ignoreCase: true, requiredFirst: true }];
  rules['react/style-prop-object'] = 2;

  rules['react/jsx-boolean-value'] = [ 2, 'always' ];
  rules['react/jsx-closing-bracket-location'] = [ 2, 'tag-aligned' ];
  rules['react/jsx-curly-spacing'] = [ 2, 'always', { spacing: { objectLiterals: 'never' }}];
  rules['react/jsx-equals-spacing'] = [ 2, 'never' ];
  rules['react/jsx-filename-extension'] = 2;
  rules['react/jsx-first-prop-new-line'] = [ 2, 'multiline' ];
  rules['react/jsx-handler-names'] = [ 2, { eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on' }];
  rules['react/jsx-indent'] = [ 2, 2 ];
  rules['react/jsx-indent-props'] = [ 2, 2 ];
  rules['react/jsx-key'] = 2;
  rules['react/jsx-max-props-per-line'] = 0;
  rules['react/jsx-no-bind'] = [ 2, { ignoreRefs: true, allowArrowFunctions: true, allowBind: false }];
  rules['react/jsx-no-comment-textnodes'] = 2;
  rules['react/jsx-no-duplicate-props'] = 2;
  rules['react/jsx-no-literals'] = 0;
  rules['react/jsx-no-target-blank'] = 2;
  rules['react/jsx-no-undef'] = 2;
  rules['react/jsx-pascal-case'] = [ 2, { allowAllCaps: false }];
  rules['react/jsx-sort-props'] = 0;
  rules['react/jsx-tag-spacing'] = 2;
  rules['react/jsx-uses-react'] = 2;
  rules['react/jsx-uses-vars'] = 2;
  rules['react/jsx-wrap-multilines'] = 2;
}

module.exports = { parserOptions, env, globals, plugins, rules };
