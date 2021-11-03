import { BetterRulesRecord } from '../betterRules';

const esLintCore: BetterRulesRecord = {
  accessorPairs: [{
    getWithoutSet: false,
    setWithoutGet: true,
    enforceForClassMembers: true
  }],
  arrayCallbackReturn: [{ allowImplicit: true }],
  blockScopedVar: [],
  classMethodsUseThis: [{ exceptMethods: []}],
  complexity: false,
  consistentReturn: false,
  curly: [ 'all' ],
  defaultCase: [],
  defaultCaseLast: [],
  defaultParamLast: [],
  dotLocation: [ 'object' ],
  eqeqeq: [ 'always' ],
  forDirection: [],
  getterReturn: [{ allowImplicit: true }],
  groupedAccessorPairs: [ 'getBeforeSet' ],
  guardForIn: [],
  initDeclarations: false,
  maxClassesPerFile: false,
  noAlert: [],
  noAsyncPromiseExecutor: false,
  noAwaitInLoop: false,
  noCaller: [],
  noCaseDeclarations: [],
  noCompareNegZero: [],
  noConstructorReturn: [],
  noCondAssign: [ 'always' ],
  noConsole: [],
  noConstantCondition: [{ checkLoops: true }],
  noControlRegex: [],
  noDebugger: [],
  noDivRegex: [],
  noDupeArgs: [],
  noDupeElseIf: [],
  noDupeKeys: [],
  noDuplicateCase: [],
  noElseReturn: [{ allowElseIf: false }],
  noEmpty: [{ allowEmptyCatch: false }],
  noEmptyCharacterClass: [],
  noEmptyPattern: [],
  noEqNull: [],
  noEval: [{ allowIndirect: false }],
  noExAssign: [],
  noExtendNative: [{ exceptions: []}],
  noExtraBind: [],
  noExtraBooleanCast: [],
  noExtraLabel: [],
  noFallthrough: [],
  noFloatingDecimal: [],
  noFuncAssign: [],
  noGlobalAssign: [{ exceptions: []}],
  noImplicitCoercion: [],
  noImplicitGlobals: [{ lexicalBindings: false }],
  noImpliedEval: [],
  noImportAssign: [],
  noInvalidThis: false,
  noInnerDeclarations: [ 'both' ],
  noInvalidRegexp: [{ allowConstructorFlags: [ 'u', 'y' ]}],
  noIrregularWhitespace: [{
    skipComments: false,
    skipRegExps: false,
    skipStrings: false,
    skipTemplates: false
  }],
  noIterator: [],
  noLabels: [{ allowLoop: false, allowSwitch: false }],
  noLoneBlocks: [],
  noMisleadingCharacterClass: [],
  noMultiSpaces: [{
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ignoreEOLComments: false,
    exceptions: {
      BinaryExpression: false,
      ImportDeclaration: false,
      Property: false,
      VariableDeclarator: false
    }
  }],
  noMultiStr: [],
  noNew: [],
  noNewFunc: [],
  noNewWrappers: [],
  noObjCalls: [],
  noOctal: [],
  noOctalEscape: [],
  noParamReassign: [{
    props: true,
    ignorePropertyModificationsFor: []
  }],
  noPromiseExecutorReturn: false,
  noProto: [],
  noPrototypeBuiltins: [],
  noRedeclare: [{ builtinGlobals: true }],
  noRegexSpaces: [],

  // We disabled this rule since it doesn't make sense to say that we disallow
  // some properties, but then not provide any disallowed properties. But we
  // wanted to keep this line to show that we thought about this rule.
  // 'noRestrictedProperties': [  {}],
  noReturnAssign: [ 'always' ],
  noReturnAwait: false,
  noScriptUrl: [],
  noSelfAssign: [{ props: true }],
  noSelfCompare: [],
  noSequences: [],
  noSetterReturn: [],
  noSparseArrays: [],
  noTemplateCurlyInString: [],
  noThrowLiteral: [],
  noUnexpectedMultiline: [],
  noUnmodifiedLoopCondition: [],
  noUnreachable: [],
  noUnreachableLoop: [],
  noUnsafeFinally: [],
  noUnsafeNegation: [],
  noUnusedExpressions: [{
    allowShortCircuit: false,
    allowTernary: false,
    allowTaggedTemplates: false
  }],
  noUnusedLabels: [],
  noUselessBackreference: [],
  noUselessCall: [],
  noUselessCatch: [],
  noUselessConcat: [],
  noUselessEscape: [],
  noUselessReturn: [],
  noVoid: [],
  noWarningComments: false,
  noWith: [],
  preferNamedCaptureGroup: [],
  preferPromiseRejectErrors: [{ allowEmptyReject: false }],
  preferRegexLiterals: [],
  radix: [ 'always' ],
  requireAtomicUpdates: false,
  requireUnicodeRegexp: [],
  strict: [ 'global' ],
  useIsnan: [{ enforceForSwitchCase: true }],
  validTypeof: [{ requireStringLiterals: true }],
  varsOnTop: [],
  wrapIife: [ 'inside', { functionPrototypeMethods: true }],
  yoda: [ 'never', { exceptRange: true, onlyEquality: false }],

  // Variables
  noDeleteVar: [],
  noLabelVar: [],
  noRestrictedGlobals: [],
  noShadow: [{ builtinGlobals: false, hoist: 'functions', allow: []}],
  noShadowRestrictedNames: [],
  noUndef: [{ typeof: true }],
  noUndefInit: [],
  noUndefined: false,

  // Node.js and CommonJS
  callbackReturn: [[ 'callback', 'next' ]],
  globalRequire: [],
  // eslint-disable-next-line extended/consistent-err-names
  handleCallbackErr: [ 'err' ],
  noBufferConstructor: [],
  noMixedRequires: [{ grouping: true, allowCall: false }],
  noNewRequire: [],
  noPathConcat: [],
  noProcessEnv: [],

  // The noProcessExit rule is superseded by the unicorn/noProcessExit rule.
  noProcessExit: false,
  noRestrictedModules: false,
  noSync: [{ allowAtRootLevel: false }],

  // Stylistic issues
  arrayBracketNewline: false,
  arrayBracketSpacing: [ 'always', {
    singleValue: true,
    objectsInArrays: false,
    arraysInArrays: false
  }],
  arrayElementNewline: false,
  blockSpacing: [ 'always' ],
  capitalizedComments: [ 'always', {
    ignoreInlineComments: false,
    ignoreConsecutiveComments: true
  }],
  commaDangle: [ 'never' ],
  commaStyle: [ 'last' ],
  computedPropertySpacing: [ 'never', { enforceForClassMembers: true }],
  consistentThis: [ 'that' ],
  eolLast: [ 'always' ],
  funcNameMatching: false,
  funcNames: false,
  funcStyle: [ 'expression' ],
  functionCallArgumentNewline: [ 'consistent' ],
  functionParenNewline: [ 'consistent' ],
  idDenylist: false,
  idLength: [{
    min: 2,
    max: Number.POSITIVE_INFINITY,
    properties: 'always',
    exceptions: [ '_', 'i', 'j', 't', 'x', 'y', 'z' ]
  }],
  idMatch: false,
  implicitArrowLinebreak: false,
  jsxQuotes: [ 'prefer-single' ],
  keySpacing: [{ beforeColon: false, afterColon: true, mode: 'strict' }],
  lineCommentPosition: [{ position: 'above' }],
  linebreakStyle: [ 'unix' ],
  linesAroundComment: [{
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
  maxDepth: false,
  maxLen: false,
  maxLines: false,
  maxLinesPerFunction: false,
  maxNestedCallbacks: false,
  maxParams: false,
  maxStatements: false,
  maxStatementsPerLine: [{ max: 1 }],
  multilineCommentStyle: [ 'separate-lines' ],
  multilineTernary: [ 'always-multiline' ],
  newCap: [{
    newIsCap: true,
    capIsNew: true,
    newIsCapExceptions: [],
    capIsNewExceptions: [],
    properties: true
  }],
  newParens: [ 'always' ],
  newlinePerChainedCall: [{ ignoreChainWithDepth: 4 }],
  noBitwise: [{ allow: [], int32Hint: false }],
  noContinue: false,
  noInlineComments: [],
  noLonelyIf: [],
  noMixedOperators: [],
  noMixedSpacesAndTabs: [],
  noMultiAssign: [],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  noMultipleEmptyLines: [{ max: 1, maxEOF: 1, maxBOF: 0 }],
  noNegatedCondition: false,

  // The noNestedTernary rule is superseded by the unicorn/noNestedTernary
  // rule.
  noNestedTernary: false,
  noNewObject: [],
  noPlusplus: [{ allowForLoopAfterthoughts: true }],
  noRestrictedSyntax: false,
  noTabs: [{ allowIndentationTabs: false }],
  noTernary: false,
  noTrailingSpaces: [{
    ignoreComments: false,
    skipBlankLines: false
  }],
  noUnderscoreDangle: [{
    allow: [ '__html' ],
    allowAfterThis: false,
    allowAfterThisConstructor: false,
    allowAfterSuper: false,
    allowFunctionParams: false,
    enforceInMethodNames: true
  }],
  noUnneededTernary: [{ defaultAssignment: false }],
  noWhitespaceBeforeProperty: [],
  nonblockStatementBodyPosition: [ 'below' ],
  objectCurlyNewline: [{
    ObjectExpression: { consistent: true },
    ObjectPattern: { consistent: true },
    ImportDeclaration: { consistent: true },
    ExportDeclaration: { consistent: true }
  }],
  objectCurlySpacing: [ 'always', {
    objectsInObjects: false,
    arraysInObjects: false
  }],
  objectPropertyNewline: [{ allowAllPropertiesOnSameLine: true }],
  oneVar: false,
  oneVarDeclarationPerLine: [ 'always' ],
  operatorAssignment: [ 'always' ],
  operatorLinebreak: [ 'after' ],
  paddedBlocks: [ 'never', { allowSingleLineBlocks: true }],
  paddingLineBetweenStatements: [
    { blankLine: 'always', prev: '*', next: 'return' },
    { blankLine: 'always', prev: [ 'const', 'let', 'var' ], next: '*' },
    { blankLine: 'any', prev: [ 'const', 'let', 'var' ], next: [ 'const', 'let', 'var' ]},
    { blankLine: 'always', prev: 'directive', next: '*' },
    { blankLine: 'any', prev: 'directive', next: 'directive' }
  ],
  preferExponentiationOperator: [],
  preferObjectSpread: [],
  quoteProps: [ 'as-needed', {
    keywords: false,
    unnecessary: true,
    numbers: false
  }],
  quotes: [ 'single', { avoidEscape: false, allowTemplateLiterals: true }],
  semiSpacing: [{ before: false, after: true }],
  semiStyle: [ 'last' ],
  sortKeys: false,
  sortVars: [{ ignoreCase: true }],
  spaceBeforeBlocks: [ 'always' ],
  spaceInParens: [ 'never' ],
  spaceUnaryOps: [{ words: true, nonwords: false }],
  spacedComment: [ 'always', { exceptions: [], markers: []}],
  switchColonSpacing: [{ after: true, before: false }],
  templateTagSpacing: [ 'never' ],
  unicodeBom: [ 'never' ],
  wrapRegex: false,

  // EcmaScript 6
  arrowBodyStyle: [ 'as-needed', {
    requireReturnForObjectLiteral: false
  }],
  arrowParens: [ 'as-needed', {
    requireForBlockBody: false
  }],
  arrowSpacing: [{ before: true, after: true }],
  constructorSuper: [],
  generatorStarSpacing: [{ before: true, after: true }],
  noClassAssign: [],
  noConfusingArrow: false,
  noConstAssign: [],
  noDuplicateImports: [{ includeExports: true }],
  noNewSymbol: [],
  noRestrictedExports: false,
  noRestrictedImports: false,
  noThisBeforeSuper: [],
  noUselessComputedKey: [{ enforceForClassMembers: true }],
  noUselessRename: [{
    ignoreDestructuring: false,
    ignoreImport: false,
    ignoreExport: false
  }],
  noVar: [],
  objectShorthand: [ 'always', {
    avoidQuotes: false,
    ignoreConstructors: false,
    avoidExplicitReturnArrows: true
  }],
  preferArrowCallback: [{
    allowNamedFunctions: false,
    allowUnboundThis: true
  }],
  preferConst: [{
    destructuring: 'any',
    ignoreReadBeforeAssign: true
  }],

  // Arrays are disabled here because of the unicorn/noUnreadableArrayDestructuring
  // rule.
  preferDestructuring: [
    { array: false, object: true },
    { enforceForRenamedProperties: false }
  ],
  preferNumericLiterals: [],
  preferRestParams: [],
  preferSpread: [],
  preferTemplate: [],
  requireYield: [],
  restSpreadSpacing: [ 'never' ],
  sortImports: [{
    ignoreCase: true,
    ignoreDeclarationSort: false,
    ignoreMemberSort: false,
    memberSyntaxSortOrder: [ 'single', 'multiple', 'all', 'none' ]
  }],
  symbolDescription: [],
  templateCurlySpacing: [ 'never' ],
  yieldStarSpacing: [{ before: true, after: true }]
};

export {
  esLintCore
};
