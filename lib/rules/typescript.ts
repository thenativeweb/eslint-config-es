const typescript = {
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': [ 'error', { default: 'array' }],
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/ban-ts-comment': [ 'error', {
    'ts-ignore': true,
    'ts-nocheck': true,
    'ts-check': false
  }],
  '@typescript-eslint/ban-tslint-comment': 'error',
  '@typescript-eslint/ban-types': [
    'error',
    {
      types: {
        object: false
      }
    }
  ],
  'brace-style': 'off',
  '@typescript-eslint/brace-style': [ 'error', '1tbs', { allowSingleLine: false }],
  '@typescript-eslint/class-literal-property-style': [ 'error', 'fields' ],
  'comma-spacing': 'off',
  '@typescript-eslint/comma-spacing': 'error',
  '@typescript-eslint/consistent-indexed-object-style': [ 'error', 'record' ],
  '@typescript-eslint/consistent-type-assertions': [ 'error', {
    assertionStyle: 'as',
    objectLiteralTypeAssertions: 'allow'
  }],
  '@typescript-eslint/consistent-type-definitions': [ 'error', 'interface' ],
  '@typescript-eslint/consistent-type-imports': [ 'error', {
    prefer: 'no-type-imports',
    disallowTypeAnnotations: true
  }],
  '@typescript-eslint/default-param-last': 'error',
  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': [ 'error', {
    allowKeywords: true,
    allowPrivateClassPropertyAccess: false
  }],
  '@typescript-eslint/explicit-function-return-type': [ 'error', {
    allowExpressions: false,
    allowTypedFunctionExpressions: false,
    allowHigherOrderFunctions: false
  }],
  '@typescript-eslint/explicit-member-accessibility': [ 'error', {
    accessibility: 'explicit'
  }],
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  'func-call-spacing': 'off',
  '@typescript-eslint/func-call-spacing': [ 'error', 'never' ],
  indent: 'off',
  '@typescript-eslint/indent': [ 'error', 2, {
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
    ignoredNodes: [],
    ignoreComments: false
  }],
  '@typescript-eslint/init-declarations': [ 'off' ],
  'keyword-spacing': 'off',
  '@typescript-eslint/keyword-spacing': [ 'error', { before: true, after: true }],
  'lines-between-class-members': 'off',
  '@typescript-eslint/lines-between-class-members': [ 'error', 'always', {
    exceptAfterSingleLine: false,
    exceptAfterOverload: false
  }],
  '@typescript-eslint/member-delimiter-style': [ 'error', {
    multiline: { delimiter: 'semi', requireLast: true },
    singleline: { delimiter: 'semi', requireLast: false }
  }],
  '@typescript-eslint/member-ordering': 'off',
  '@typescript-eslint/method-signature-style': [ 'error', 'property' ],
  camelcase: 'off',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: [ 'variableLike', 'memberLike' ],
      format: [ 'strictCamelCase', 'StrictPascalCase' ],
      filter: { regex: '^__html$', match: false }
    },
    {
      selector: [ 'typeLike' ],
      format: [ 'StrictPascalCase' ]
    },
    {
      selector: [ 'typeParameter' ],
      format: [ 'StrictPascalCase' ],
      prefix: [ 'T' ]
    }
  ],
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-base-to-string': 'error',
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',
  'no-dupe-class-members': 'off',
  '@typescript-eslint/no-dupe-class-members': 'error',
  '@typescript-eslint/no-dynamic-delete': 'error',
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': 'error',
  '@typescript-eslint/no-empty-interface': [ 'error', {
    allowSingleExtends: false
  }],
  '@typescript-eslint/no-explicit-any': 'off',
  'no-extra-parens': 'off',
  '@typescript-eslint/no-extra-parens': [ 'error', 'all', {
    conditionalAssign: false,
    enforceForArrowConditionals: false,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ignoreJSX: 'all',
    nestedBinaryExpressions: false,
    returnAssign: false
  }],
  'no-extra-semi': 'off',
  '@typescript-eslint/no-extra-semi': 'error',
  '@typescript-eslint/no-extraneous-class': [ 'error', {
    allowConstructorOnly: false,
    allowEmpty: false,
    allowStaticOnly: false
  }],
  '@typescript-eslint/no-floating-promises': [ 'error', {
    ignoreVoid: false
  }],
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-implicit-any-catch': [ 'error', {
    allowExplicitAny: false
  }],
  '@typescript-eslint/no-implied-eval': 'error',
  '@typescript-eslint/no-inferrable-types': [ 'error', {
    ignoreParameters: false,
    ignoreProperties: false
  }],
  '@typescript-eslint/no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-void-type': 'off',
  'no-loop-func': 'off',
  '@typescript-eslint/no-loop-func': 'error',
  'no-loss-of-precision': 'off',
  '@typescript-eslint/no-loss-of-precision': 'error',
  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': 'off',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-misused-promises': [ 'error', {
    checksConditionals: true,
    checksVoidReturn: false
  }],
  '@typescript-eslint/no-namespace': [ 'error', {
    allowDeclarations: false,
    allowDefinitionFiles: true
  }],
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-parameter-properties': 'off',
  '@typescript-eslint/no-require-imports': 'error',
  '@typescript-eslint/no-this-alias': [ 'error', {
    allowDestructuring: false,
    allowedNames: []
  }],
  '@typescript-eslint/no-throw-literal': 'error',
  '@typescript-eslint/no-type-alias': 'off',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  '@typescript-eslint/no-unnecessary-condition': [ 'error', {
    allowConstantLoopConditions: false,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false
  }],
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': [ 'error', {
    typesToIgnore: []
  }],
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-unsafe-return': 'off',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [ 'error', { vars: 'all' }],
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': [ 'error', {
    functions: true,
    classes: true,
    enums: true,
    variables: true,
    typedefs: true
  }],
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-enum-initializers': 'off',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'off',
  '@typescript-eslint/prefer-nullish-coalescing': [ 'error', {
    ignoreConditionalTests: false,
    ignoreMixedLogicalExpressions: false
  }],
  '@typescript-eslint/prefer-readonly': [ 'error', { onlyInlineLambdas: false }],
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-regexp-exec': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  '@typescript-eslint/prefer-ts-expect-error': 'error',
  '@typescript-eslint/promise-function-async': [ 'error', {
    allowAny: true,
    allowedPromiseNames: [],
    checkArrowFunctions: true,
    checkFunctionDeclarations: true,
    checkFunctionExpressions: true,
    checkMethodDeclarations: true
  }],
  '@typescript-eslint/require-array-sort-compare': 'error',
  'require-await': 'off',
  '@typescript-eslint/require-await': 'off',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/restrict-template-expressions': 'off',
  semi: 'off',
  '@typescript-eslint/semi': [ 'error', 'always', { omitLastInOneLineBlock: false }],
  'space-before-function-paren': 'off',
  '@typescript-eslint/space-before-function-paren': 'error',
  'space-infix-ops': 'off',
  '@typescript-eslint/space-infix-ops': [ 'error', { int32Hint: false }],
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/type-annotation-spacing': [ 'error', {
    before: false,
    after: true,
    overrides: { arrow: { before: true, after: true }}
  }],
  '@typescript-eslint/typedef': 'off',
  '@typescript-eslint/unbound-method': [ 'error', { ignoreStatic: true }],
  '@typescript-eslint/unified-signatures': 'error'
};

export {
  typescript
};
