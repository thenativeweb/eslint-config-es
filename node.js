'use strict';

const isInstalled = require('./lib/isInstalled');

const parserOptions = {
  ecmaVersion: 2019,
  sourceType: 'script',
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

const plugins = [];
const settings = {};

if (isInstalled({ name: 'eslint-plugin-extended' })) {
  plugins.push('extended');
}
if (isInstalled({ name: 'eslint-plugin-mocha' })) {
  plugins.push('mocha');
}
if (
  isInstalled({ name: 'eslint-plugin-react' }) &&
  isInstalled({ name: 'react' })
) {
  plugins.push('react');
  settings.react = { version: 'detect' };
}

const rules = {
  // Possible errors
  'for-direction': 'error',
  'getter-return': [ 'error', { allowImplicit: true }],
  'no-async-promise-executor': 'off',
  'no-await-in-loop': 'off',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': [ 'error', 'always' ],
  'no-console': 'error',
  'no-constant-condition': [ 'error', { checkLoops: true }],
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-dupe-args': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-empty': [ 'error', { allowEmptyCatch: false }],
  'no-empty-character-class': 'error',
  'no-ex-assign': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-parens': [ 'error', 'all', {
    conditionalAssign: false,
    enforceForArrowConditionals: false,
    ignoreJSX: 'all',
    nestedBinaryExpressions: true,
    returnAssign: false
  }],
  'no-extra-semi': 'error',
  'no-func-assign': 'error',
  'no-inner-declarations': [ 'error', 'both' ],
  'no-invalid-regexp': [ 'error', { allowConstructorFlags: [ 'u', 'y' ]}],
  'no-irregular-whitespace': [ 'error', {
    skipComments: false,
    skipRegExps: false,
    skipStrings: false,
    skipTemplates: false
  }],
  'no-misleading-character-class': 'error',
  'no-obj-calls': 'error',
  'no-prototype-builtins': 'error',
  'no-regex-spaces': 'error',
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'error',
  'no-unexpected-multiline': 'error',
  'no-unreachable': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'require-atomic-updates': 'error',
  'use-isnan': 'error',
  'valid-typeof': [ 'error', { requireStringLiterals: true }],

  // Best practices
  'accessor-pairs': [ 'error', { getWithoutSet: false, setWithoutGet: true }],
  'array-callback-return': [ 'error', { allowImplicit: true }],
  'block-scoped-var': 'error',
  'class-methods-use-this': [ 'error', { exceptMethods: []}],
  complexity: 'off',
  'consistent-return': 'off',
  curly: [ 'error', 'all' ],
  'default-case': 'error',
  'dot-location': [ 'error', 'object' ],
  'dot-notation': [ 'error', { allowKeywords: true }],
  eqeqeq: [ 'error', 'always' ],
  'guard-for-in': 'error',
  'max-classes-per-file': [ 'error', 1 ],
  'no-alert': 'error',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-div-regex': 'error',
  'no-else-return': [ 'error', { allowElseIf: false }],
  'no-empty-function': [ 'error', { allow: []}],
  'no-empty-pattern': 'error',
  'no-eq-null': 'error',
  'no-eval': [ 'error', { allowIndirect: false }],
  'no-extend-native': [ 'error', { exceptions: []}],
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  'no-fallthrough': 'error',
  'no-floating-decimal': 'error',
  'no-global-assign': [ 'error', { exceptions: []}],
  'no-implicit-coercion': 'error',
  'no-implicit-globals': 'error',
  'no-implied-eval': 'error',
  'no-invalid-this': 'off',
  'no-iterator': 'error',
  'no-labels': [ 'error', { allowLoop: false, allowSwitch: false }],
  'no-lone-blocks': 'error',
  'no-loop-func': 'error',
  'no-magic-numbers': 'off',
  'no-multi-spaces': [ 'error', {
    ignoreEOLComments: false,
    exceptions: {
      BinaryExpression: false,
      ImportDeclaration: false,
      Property: false,
      VariableDeclarator: false
    }
  }],
  'no-multi-str': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': [ 'error', {
    props: true,
    ignorePropertyModificationsFor: []
  }],
  'no-proto': 'error',
  'no-redeclare': [ 'error', { builtinGlobals: true }],

  // We disabled this rule since it doesn't make sense to say that we disallow
  // some properties, but then not provide any disallowed properties. But we
  // wanted to keep this line to show that we thought about this rule.
  // 'no-restricted-properties': [ 'error', {}],

  'no-return-assign': [ 'error', 'always' ],
  'no-return-await': 'off',
  'no-script-url': 'error',
  'no-self-assign': [ 'error', { props: true }],
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-throw-literal': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unused-expressions': [ 'error', {
    allowShortCircuit: false,
    allowTernary: false,
    allowTaggedTemplates: false
  }],
  'no-unused-labels': 'error',
  'no-useless-call': 'error',
  'no-useless-catch': 'error',
  'no-useless-concat': 'error',
  'no-useless-escape': 'error',
  'no-useless-return': 'error',
  'no-void': 'error',
  'no-warning-comments': [ 'error', { terms: [ 'todo' ], location: 'start' }],
  'no-with': 'error',
  'prefer-named-capture-group': 'error',
  'prefer-promise-reject-errors': [ 'error', { allowEmptyReject: false }],
  radix: [ 'error', 'always' ],
  'require-await': 'off',
  'require-unicode-regexp': 'error',
  'vars-on-top': 'error',
  'wrap-iife': [ 'error', 'inside', { functionPrototypeMethods: true }],
  yoda: [ 'error', 'never', { exceptRange: true, onlyEquality: false }],

  // Strict mode
  strict: [ 'error', 'global' ],

  // Variables
  'init-declarations': 'off',
  'no-delete-var': 'error',
  'no-label-var': 'error',
  'no-restricted-globals': 'error',
  'no-shadow': [ 'error', { builtinGlobals: true, hoist: 'functions', allow: []}],
  'no-shadow-restricted-names': 'error',
  'no-undef': [ 'error', { typeof: true }],
  'no-undef-init': 'error',
  'no-undefined': 'off',
  'no-unused-vars': [ 'error', {
    args: 'after-used',
    caughtErrors: 'all',
    vars: 'all',
    ignoreRestSiblings: false
  }],
  'no-use-before-define': [ 'error', {
    functions: true,
    classes: true,
    variables: true
  }],

  // Node.js and CommonJS
  'callback-return': [ 'error', [ 'callback', 'next' ]],
  'global-require': 'error',
  'handle-callback-err': [ 'error', 'err' ],
  'no-buffer-constructor': 'error',
  'no-mixed-requires': [ 'error', { grouping: true, allowCall: false }],
  'no-new-require': 'error',
  'no-path-concat': 'error',
  'no-process-env': 'error',
  'no-process-exit': 'error',
  'no-restricted-modules': 'off',
  'no-sync': [ 'error', { allowAtRootLevel: false }],

  // Stylistic issues
  'array-bracket-newline': 'off',
  'array-bracket-spacing': [ 'error', 'always', {
    singleValue: true,
    objectsInArrays: false,
    arraysInArrays: false
  }],
  'array-element-newline': 'off',
  'block-spacing': [ 'error', 'always' ],
  'brace-style': [ 'error', '1tbs', { allowSingleLine: false }],
  camelcase: [ 'error', {
    properties: 'always',
    ignoreDestructuring: false,
    allow: []
  }],
  'capitalized-comments': [ 'error', 'always', {
    ignoreInlineComments: false,
    ignoreConsecutiveComments: true
  }],
  'comma-dangle': [ 'error', 'never' ],
  'comma-spacing': [ 'error', { before: false, after: true }],
  'comma-style': [ 'error', 'last' ],
  'computed-property-spacing': [ 'error', 'never' ],
  'consistent-this': [ 'error', 'that' ],
  'eol-last': [ 'error', 'always' ],
  'func-call-spacing': [ 'error', 'never' ],
  'func-name-matching': 'off',
  'func-names': 'off',
  'func-style': [ 'error', 'expression' ],
  'function-paren-newline': [ 'error', 'consistent' ],
  'id-blacklist': 'off',
  'id-length': [ 'error', {
    min: 2,
    max: Number.infinity,
    properties: 'always',
    exceptions: [ '_', 'i', 'j', 'x', 'y', 'z' ]
  }],
  'id-match': 'off',
  'implicit-arrow-linebreak': 'off',
  indent: [ 'error', 2, {
    SwitchCase: 1,
    VariableDeclarator: { var: 2, let: 2, const: 3 },
    outerIIFEBody: 1,
    MemberExpression: 1,
    FunctionDeclaration: { parameters: 1, body: 1 },
    FunctionExpression: { parameters: 1, body: 1 },
    CallExpression: { arguments: 1 },
    ArrayExpression: 1,
    ObjectExpression: 1,
    ImportDeclaration: 1,
    flatTernaryExpressions: false,
    ignoredNodes: [],
    ignoreComments: false
  }],
  'jsx-quotes': [ 'error', 'prefer-single' ],
  'key-spacing': [ 'error', { beforeColon: false, afterColon: true, mode: 'strict' }],
  'keyword-spacing': [ 'error', { before: true, after: true }],
  'line-comment-position': [ 'error', { position: 'above' }],
  'linebreak-style': [ 'error', 'unix' ],
  'lines-around-comment': [ 'error', {
    beforeBlockComment: false,
    afterBlockComment: false,
    beforeLineComment: true,
    afterLineComment: false,
    allowBlockStart: true,
    allowBlockEnd: true,
    allowObjectStart: true,
    allowObjectEnd: true,
    allowArrayStart: true,
    allowArrayEnd: true,
    allowClassStart: true,
    allowClassEnd: true,
    applyDefaultIgnorePatterns: true
  }],
  'lines-between-class-members': [ 'error', 'always', {
    exceptAfterSingleLine: false
  }],
  'max-depth': 'off',
  'max-len': 'off',
  'max-lines': 'off',
  'max-lines-per-function': 'off',
  'max-nested-callbacks': 'off',
  'max-params': 'off',
  'max-statements': 'off',
  'max-statements-per-line': [ 'error', { max: 1 }],
  'multiline-comment-style': [ 'error', 'separate-lines' ],
  'multiline-ternary': [ 'error', 'always-multiline' ],
  'new-cap': [ 'error', {
    newIsCap: true,
    capIsNew: true,
    newIsCapExceptions: [],
    capIsNewExceptions: [],
    properties: true
  }],
  'new-parens': 'error',
  'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 4 }],
  'no-array-constructor': 'error',
  'no-bitwise': [ 'error', { allow: [], int32Hint: false }],
  'no-continue': 'off',
  'no-inline-comments': 'error',
  'no-lonely-if': 'error',
  'no-mixed-operators': 'error',
  'no-mixed-spaces-and-tabs': 'error',
  'no-multi-assign': 'error',
  'no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 1, maxBOF: 0 }],
  'no-negated-condition': 'off',
  'no-nested-ternary': 'error',
  'no-new-object': 'error',
  'no-plusplus': [ 'error', { allowForLoopAfterthoughts: true }],
  'no-restricted-syntax': 'off',
  'no-tabs': [ 'error', { allowIndentationTabs: false }],
  'no-ternary': 'off',
  'no-trailing-spaces': [ 'error', {
    ignoreComments: false,
    skipBlankLines: false
  }],
  'no-underscore-dangle': [ 'error', {
    allow: [],
    allowAfterThis: false,
    allowAfterSuper: false,
    enforceInMethodNames: true
  }],
  'no-unneeded-ternary': [ 'error', { defaultAssignment: false }],
  'no-whitespace-before-property': 'error',
  'nonblock-statement-body-position': [ 'error', 'below' ],
  'object-curly-newline': [ 'error', {
    ObjectExpression: { consistent: true },
    ObjectPattern: { consistent: true },
    ImportDeclaration: { consistent: true },
    ExportDeclaration: { consistent: true }
  }],
  'object-curly-spacing': [ 'error', 'always', {
    objectsInObjects: false,
    arraysInObjects: false
  }],
  'object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: true }],
  'one-var': 'off',
  'one-var-declaration-per-line': [ 'error', 'always' ],
  'operator-assignment': [ 'error', 'always' ],
  'operator-linebreak': [ 'error', 'after' ],
  'padded-blocks': [ 'error', 'never', { allowSingleLineBlocks: true }],
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: '*', next: 'return' },
    { blankLine: 'always', prev: [ 'const', 'let', 'var' ], next: '*' },
    { blankLine: 'any', prev: [ 'const', 'let', 'var' ], next: [ 'const', 'let', 'var' ]},
    { blankLine: 'always', prev: 'directive', next: '*' },
    { blankLine: 'any', prev: 'directive', next: 'directive' }
  ],
  'prefer-object-spread': 'error',
  'quote-props': [ 'error', 'as-needed', {
    keywords: false,
    unnecessary: true,
    numbers: false
  }],
  quotes: [ 'error', 'single', { avoidEscape: false, allowTemplateLiterals: true }],
  semi: [ 'error', 'always', { omitLastInOneLineBlock: false }],
  'semi-spacing': [ 'error', { before: false, after: true }],
  'semi-style': [ 'error', 'last' ],
  'sort-keys': 'off',
  'sort-vars': [ 'error', { ignoreCase: true }],
  'space-before-blocks': [ 'error', 'always' ],
  'space-before-function-paren': [ 'error', 'always' ],
  'space-in-parens': [ 'error', 'never' ],
  'space-infix-ops': [ 'error', { int32Hint: false }],
  'space-unary-ops': [ 'error', { words: true, nonwords: false }],
  'spaced-comment': [ 'error', 'always', { exceptions: [], markers: []}],
  'switch-colon-spacing': [ 'error', { after: true, before: false }],
  'template-tag-spacing': [ 'error', 'never' ],
  'unicode-bom': [ 'error', 'never' ],
  'wrap-regex': 'off',

  // EcmaScript 6
  'arrow-body-style': [ 'error', 'as-needed', {
    requireReturnForObjectLiteral: false
  }],
  'arrow-parens': [ 'error', 'as-needed', {
    requireForBlockBody: false
  }],
  'arrow-spacing': [ 'error', { before: true, after: true }],
  'constructor-super': 'error',
  'generator-star-spacing': [ 'error', { before: true, after: true }],
  'no-class-assign': 'error',
  'no-confusing-arrow': 'off',
  'no-const-assign': 'error',
  'no-dupe-class-members': 'error',
  'no-duplicate-imports': [ 'error', { includeExports: true }],
  'no-new-symbol': 'error',
  'no-restricted-imports': 'off',
  'no-this-before-super': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': [ 'error', {
    ignoreDestructuring: false,
    ignoreImport: false,
    ignoreExport: false
  }],
  'no-var': 'error',
  'object-shorthand': [ 'error', 'always', {
    avoidQuotes: false,
    ignoreConstructors: false,
    avoidExplicitReturnArrows: true
  }],
  'prefer-arrow-callback': [ 'error', {
    allowNamedFunctions: false,
    allowUnboundThis: true
  }],
  'prefer-const': [ 'error', {
    destructuring: 'any',
    ignoreReadBeforeAssign: true
  }],
  'prefer-destructuring': [ 'error',
    { array: true, object: true },
    { enforceForRenamedProperties: true }
  ],
  'prefer-numeric-literals': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'require-yield': 'error',
  'rest-spread-spacing': [ 'error', 'never' ],
  'sort-imports': [ 'error', {
    ignoreCase: true,
    ignoreDeclarationSort: false,
    ignoreMemberSort: false,
    memberSyntaxSortOrder: [ 'single', 'multiple', 'all', 'none' ]
  }],
  'symbol-description': 'error',
  'template-curly-spacing': [ 'error', 'never' ],
  'yield-star-spacing': [ 'error', { before: true, after: true }]
};

if (plugins.includes('extended')) {
  rules['extended/consistent-err-names'] = [ 'error', 'prefix' ];
}

if (plugins.includes('mocha')) {
  rules['mocha/handle-done-callback'] = 'error';
  rules['mocha/max-top-level-suites'] = [ 'error', { limit: 1 }];
  rules['mocha/no-async-describe'] = 'error';
  rules['mocha/no-exclusive-tests'] = 'error';
  rules['mocha/no-global-tests'] = 'error';
  rules['mocha/no-hooks'] = 'off';
  rules['mocha/no-hooks-for-single-case'] = 'off';
  rules['mocha/no-identical-title'] = 'error';
  rules['mocha/no-mocha-arrows'] = 'off';
  rules['mocha/no-nested-tests'] = 'error';
  rules['mocha/no-pending-tests'] = 'error';
  rules['mocha/no-return-and-callback'] = 'error';
  rules['mocha/no-setup-in-describe'] = 'off';
  rules['mocha/no-sibling-hooks'] = 'error';
  rules['mocha/no-skipped-tests'] = 'error';
  rules['mocha/no-synchronous-tests'] = 'error';
  rules['mocha/no-top-level-hooks'] = 'error';
  rules['mocha/prefer-arrow-callback'] = 'off';
  rules['mocha/valid-suite-description'] = [ 'error', '[^\\.]$' ];
  rules['mocha/valid-test-description'] = [ 'error', '\\.$' ];
}

if (plugins.includes('react')) {
  rules['react/boolean-prop-naming'] = 'off';
  rules['react/button-has-type'] = [ 'error', {
    button: true,
    submit: true,
    reset: true
  }];
  rules['react/default-props-match-prop-types'] = 'off';
  rules['react/destructuring-assignment'] = [ 'error', 'always' ];
  rules['react/display-name'] = 'off';
  rules['react/forbid-component-props'] = 'off';
  rules['react/forbid-dom-props'] = 'off';
  rules['react/forbid-elements'] = 'off';
  rules['react/forbid-prop-types'] = 'off';
  rules['react/forbid-foreign-prop-types'] = 'off';
  rules['react/no-access-state-in-setstate'] = 'error';
  rules['react/no-array-index-key'] = 'error';
  rules['react/no-children-prop'] = 'error';
  rules['react/no-danger'] = 'off';
  rules['react/no-danger-with-children'] = 'error';
  rules['react/no-deprecated'] = 'error';
  rules['react/no-did-mount-set-state'] = 'error';
  rules['react/no-did-update-set-state'] = 'error';
  rules['react/no-direct-mutation-state'] = 'error';
  rules['react/no-find-dom-node'] = 'error';
  rules['react/no-is-mounted'] = 'error';
  rules['react/no-multi-comp'] = 'off';
  rules['react/no-redundant-should-component-update'] = 'error';
  rules['react/no-render-return-value'] = 'error';
  rules['react/no-set-state'] = 'off';
  rules['react/no-string-refs'] = [ 'error', { noTemplateLiterals: true }];
  rules['react/no-this-in-sfc'] = 'error';
  rules['react/no-typos'] = 'error';
  rules['react/no-unescaped-entities'] = 'error';
  rules['react/no-unknown-property'] = 'error';
  rules['react/no-unsafe'] = 'off';
  rules['react/no-unused-prop-types'] = 'error';
  rules['react/no-unused-state'] = 'error';
  rules['react/no-will-update-set-state'] = 'error';
  rules['react/prefer-es6-class'] = [ 'error', 'always' ];
  rules['react/prefer-read-only-props'] = 'off';
  rules['react/prefer-stateless-function'] = [ 'error', {
    ignorePureComponents: false
  }];
  rules['react/prop-types'] = 'off';
  rules['react/react-in-jsx-scope'] = 'error';
  rules['react/require-default-props'] = 'off';
  rules['react/require-optimization'] = 'off';
  rules['react/require-render-return'] = 'error';
  rules['react/self-closing-comp'] = [ 'error', {
    component: true,
    html: true
  }];
  rules['react/sort-comp'] = 'error';
  rules['react/sort-prop-types'] = [ 'error', {
    callbacksLast: true,
    ignoreCase: true,
    requiredFirst: true,
    sortShapeProp: true,
    noSortAlphabetically: false
  }];
  rules['react/state-in-constructor'] = [ 'error', 'always' ];
  rules['react/static-property-placement'] = 'off';
  rules['react/style-prop-object'] = 'error';
  rules['react/void-dom-elements-no-children'] = 'error';

  rules['react/jsx-boolean-value'] = [ 'error', 'always' ];
  rules['react/jsx-child-element-spacing'] = 'error';
  rules['react/jsx-closing-bracket-location'] = [ 'error', 'tag-aligned' ];
  rules['react/jsx-closing-tag-location'] = 'error';
  rules['react/jsx-curly-spacing'] = [ 'error', {
    when: 'always',
    spacing: { objectLiterals: 'never' }
  }];
  rules['react/jsx-equals-spacing'] = [ 'error', 'never' ];
  rules['react/jsx-filename-extension'] = 'error';
  rules['react/jsx-first-prop-new-line'] = [ 'error', 'multiline' ];
  rules['react/jsx-handler-names'] = [ 'error', {
    eventHandlerPrefix: 'handle',
    eventHandlerPropPrefix: 'on'
  }];
  rules['react/jsx-indent'] = [ 'error', 2 ];
  rules['react/jsx-indent-props'] = [ 'error', 2 ];
  rules['react/jsx-key'] = 'error';
  rules['react/jsx-max-depth'] = 'off';
  rules['react/jsx-max-props-per-line'] = 'off';
  rules['react/jsx-no-bind'] = [ 'error', {
    ignoreRefs: false,
    ignoreDOMComponents: false,
    allowArrowFunctions: true,
    allowBind: false,
    allowFunctions: false
  }];
  rules['react/jsx-no-comment-textnodes'] = 'error';
  rules['react/jsx-no-duplicate-props'] = [ 'error', { ignoreCase: true }];
  rules['react/jsx-no-literals'] = 'off';
  rules['react/jsx-no-target-blank'] = [ 'error', {
    enforceDynamicLinks: 'always'
  }];
  rules['react/jsx-no-undef'] = [ 'error', { allowGlobals: false }];
  rules['react/jsx-one-expression-per-line'] = 'off';
  rules['react/jsx-curly-brace-presence'] = [ 'error', 'never' ];
  rules['react/jsx-fragments'] = [ 'error', 'element' ];
  rules['react/jsx-pascal-case'] = [ 'error', { allowAllCaps: false, ignore: []}];
  rules['react/jsx-props-no-multi-spaces'] = 'error';
  rules['react/jsx-props-no-spreading'] = 'off';
  rules['react/jsx-sort-default-props'] = 'off';
  rules['react/jsx-sort-props'] = 'off';
  rules['react/jsx-tag-spacing'] = [ 'error', {
    closingSlash: 'never',
    beforeSelfClosing: 'always',
    afterOpening: 'never',
    beforeClosing: 'never'
  }];
  rules['react/jsx-uses-react'] = 'error';
  rules['react/jsx-uses-vars'] = 'error';
  rules['react/jsx-wrap-multilines'] = 'error';
}

module.exports = { parserOptions, env, globals, plugins, settings, rules };
