const esLintCore = {
  'accessor-pairs': [ 'error', {
    getWithoutSet: false,
    setWithoutGet: true,
    enforceForClassMembers: true
  }],
  'array-callback-return': [ 'error', { allowImplicit: true }],
  'block-scoped-var': 'error',
  'class-methods-use-this': [ 'error', { exceptMethods: []}],
  complexity: 'off',
  'consistent-return': 'off',
  curly: [ 'error', 'all' ],
  'default-case': 'error',
  'default-case-last': 'error',
  'default-param-last': 'error',
  'dot-location': [ 'error', 'object' ],
  'dot-notation': [ 'error', { allowKeywords: true }],
  eqeqeq: [ 'error', 'always' ],
  'for-direction': 'error',
  'getter-return': [ 'error', { allowImplicit: true }],
  'grouped-accessor-pairs': [ 'error', 'getBeforeSet' ],
  'guard-for-in': 'error',
  'init-declarations': 'off',
  'max-classes-per-file': 'off',
  'no-alert': 'error',
  'no-async-promise-executor': 'off',
  'no-await-in-loop': 'off',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-compare-neg-zero': 'error',
  'no-constructor-return': 'error',
  'no-cond-assign': [ 'error', 'always' ],
  'no-console': 'error',
  'no-constant-condition': [ 'error', { checkLoops: true }],
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-div-regex': 'error',
  'no-dupe-args': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-else-return': [ 'error', { allowElseIf: false }],
  'no-empty': [ 'error', { allowEmptyCatch: false }],
  'no-empty-character-class': 'error',
  'no-empty-function': [ 'error', { allow: []}],
  'no-empty-pattern': 'error',
  'no-eq-null': 'error',
  'no-eval': [ 'error', { allowIndirect: false }],
  'no-ex-assign': 'error',
  'no-extend-native': [ 'error', { exceptions: []}],
  'no-extra-bind': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-label': 'error',
  'no-extra-parens': [ 'error', 'all', {
    conditionalAssign: false,
    enforceForArrowConditionals: false,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ignoreJSX: 'all',
    nestedBinaryExpressions: false,
    returnAssign: false
  }],
  'no-extra-semi': 'error',
  'no-fallthrough': 'error',
  'no-floating-decimal': 'error',
  'no-func-assign': 'error',
  'no-global-assign': [ 'error', { exceptions: []}],
  'no-implicit-coercion': 'error',
  'no-implicit-globals': [ 'error', { lexicalBindings: false }],
  'no-implied-eval': 'error',
  'no-import-assign': 'error',
  'no-invalid-this': 'off',
  'no-inner-declarations': [ 'error', 'both' ],
  'no-invalid-regexp': [ 'error', { allowConstructorFlags: [ 'u', 'y' ]}],
  'no-irregular-whitespace': [ 'error', {
    skipComments: false,
    skipRegExps: false,
    skipStrings: false,
    skipTemplates: false
  }],
  'no-iterator': 'error',
  'no-labels': [ 'error', { allowLoop: false, allowSwitch: false }],
  'no-lone-blocks': 'error',
  'no-loop-func': 'error',
  'no-loss-of-precision': 'error',
  'no-magic-numbers': 'off',
  'no-misleading-character-class': 'error',
  'no-multi-spaces': [ 'error', {
    // eslint-disable-next-line @typescript-eslint/naming-convention
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
  'no-obj-calls': 'error',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': [ 'error', {
    props: true,
    ignorePropertyModificationsFor: []
  }],
  'no-promise-executor-return': 'off',
  'no-proto': 'error',
  'no-prototype-builtins': 'error',
  'no-redeclare': [ 'error', { builtinGlobals: true }],
  'no-regex-spaces': 'error',

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
  'no-setter-return': 'error',
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'error',
  'no-throw-literal': 'error',
  'no-unexpected-multiline': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unreachable': 'error',
  'no-unreachable-loop': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'no-unused-expressions': [ 'error', {
    allowShortCircuit: false,
    allowTernary: false,
    allowTaggedTemplates: false
  }],
  'no-unused-labels': 'error',
  'no-useless-backreference': 'error',
  'no-useless-call': 'error',
  'no-useless-catch': 'error',
  'no-useless-concat': 'error',
  'no-useless-escape': 'error',
  'no-useless-return': 'error',
  'no-void': 'error',
  'no-warning-comments': 'off',
  'no-with': 'error',
  'prefer-named-capture-group': 'error',
  'prefer-promise-reject-errors': [ 'error', { allowEmptyReject: false }],
  'prefer-regex-literals': 'error',
  radix: [ 'error', 'always' ],
  'require-atomic-updates': 'off',
  'require-await': 'off',
  'require-unicode-regexp': 'error',
  strict: [ 'error', 'global' ],
  'use-isnan': [ 'error', { enforceForSwitchCase: true }],
  'valid-typeof': [ 'error', { requireStringLiterals: true }],
  'vars-on-top': 'error',
  'wrap-iife': [ 'error', 'inside', { functionPrototypeMethods: true }],
  yoda: [ 'error', 'never', { exceptRange: true, onlyEquality: false }],

  // Variables
  'no-delete-var': 'error',
  'no-label-var': 'error',
  'no-restricted-globals': 'error',
  'no-shadow': [ 'error', { builtinGlobals: false, hoist: 'functions', allow: []}],
  'no-shadow-restricted-names': 'error',
  'no-undef': [ 'error', { typeof: true }],
  'no-undef-init': 'error',
  'no-unused-vars': [ 'error', {
    args: 'after-used',
    caughtErrors: 'all',
    vars: 'all',
    ignoreRestSiblings: false
  }],
  'no-undefined': 'off',
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

  // The no-process-exit rule is superseded by the unicorn/no-process-exit rule.
  'no-process-exit': 'off',
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
    ignoreImports: false,
    allow: []
  }],
  'capitalized-comments': [ 'error', 'always', {
    ignoreInlineComments: false,
    ignoreConsecutiveComments: true
  }],
  'comma-dangle': [ 'error', 'never' ],
  'comma-spacing': [ 'error', { before: false, after: true }],
  'comma-style': [ 'error', 'last' ],
  'computed-property-spacing': [ 'error', 'never', { enforceForClassMembers: true }],
  'consistent-this': [ 'error', 'that' ],
  'eol-last': [ 'error', 'always' ],
  'func-call-spacing': [ 'error', 'never' ],
  'func-name-matching': 'off',
  'func-names': 'off',
  'func-style': [ 'error', 'expression' ],
  'function-call-argument-newline': [ 'error', 'consistent' ],
  'function-paren-newline': [ 'error', 'consistent' ],
  'id-denylist': 'off',
  'id-length': [ 'error', {
    min: 2,
    max: Number.POSITIVE_INFINITY,
    properties: 'always',
    exceptions: [ '_', 'i', 'j', 't', 'x', 'y', 'z' ]
  }],
  'id-match': 'off',
  'implicit-arrow-linebreak': 'off',
  indent: [ 'error', 2, {
    SwitchCase: 1,
    VariableDeclarator: { var: 2, let: 2, const: 3 },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    outerIIFEBody: 1,
    MemberExpression: 1,
    FunctionDeclaration: { parameters: 1, body: 1 },
    FunctionExpression: { parameters: 1, body: 1 },
    CallExpression: { arguments: 1 },
    ArrayExpression: 1,
    ObjectExpression: 1,
    ImportDeclaration: 1,
    flatTernaryExpressions: false,
    ignoredNodes: [
      'JSXAttribute',
      'JSXClosingElement',
      'JSXClosingFragment',
      'JSXElement',
      'JSXElement > *',
      'JSXEmptyExpression',
      'JSXExpressionContainer',
      'JSXFragment',
      'JSXIdentifier',
      'JSXMemberExpression',
      'JSXNamespacedName',
      'JSXOpeningElement',
      'JSXOpeningFragment',
      'JSXSpreadAttribute',
      'JSXSpreadChild',
      'JSXText'
    ],
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
  'new-parens': [ 'error', 'always' ],
  'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 4 }],
  'no-array-constructor': 'error',
  'no-bitwise': [ 'error', { allow: [], int32Hint: false }],
  'no-continue': 'off',
  'no-inline-comments': 'error',
  'no-lonely-if': 'error',
  'no-mixed-operators': 'error',
  'no-mixed-spaces-and-tabs': 'error',
  'no-multi-assign': 'error',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 1, maxBOF: 0 }],
  'no-negated-condition': 'off',

  // The no-nested-ternary rule is superseded by the unicorn/no-nested-ternary
  // rule.
  'no-nested-ternary': 'off',
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
    allow: [ '__html' ],
    allowAfterThis: false,
    allowAfterThisConstructor: false,
    allowAfterSuper: false,
    allowFunctionParams: false,
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
  'prefer-exponentiation-operator': 'error',
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
  'no-restricted-exports': 'off',
  'no-restricted-imports': 'off',
  'no-this-before-super': 'error',
  'no-useless-computed-key': [ 'error', { enforceForClassMembers: true }],
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

  // Arrays are disabled here because of the unicorn/no-unreadable-array-destructuring
  // rule.
  'prefer-destructuring': [ 'error',
    { array: false, object: true },
    { enforceForRenamedProperties: false }
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

export {
  esLintCore
};
