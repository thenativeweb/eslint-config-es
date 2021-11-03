import { BetterRulesRecord, usePlugin } from '../betterRules';

const unicorn: BetterRulesRecord = usePlugin('unicorn')({
  betterRegex: [{ sortCharacterClasses: true }],
  catchErrorName: [{ name: 'ex', ignore: [ '^ex([AZ0-9].*)?$' ]}],
  consistentFunctionScoping: [],
  customErrorDefinition: false,
  errorMessage: [],
  escapeCase: [],
  expiringTodoComments: [{
    ignoreDatesOnPullRequests: false,
    terms: [ 'todo' ],
    allowWarningComments: false
  }],
  explicitLengthCheck: [{ nonZero: 'greaterThan' }],
  filenameCase: [{
    cases: {
      camelCase: true,
      pascalCase: true,
      kebabCase: false,
      snakeCase: false
    },
    ignore: [
      'nextEnv.d.ts'
    ]
  }],
  importIndex: [{ ignoreImports: false }],
  importStyle: [{
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
  newForBuiltins: [],
  noAbusiveEslintDisable: [],
  noArrayInstanceof: [],
  noConsoleSpaces: [],
  noFnReferenceInIterator: [],
  noForLoop: [],
  noHexEscape: [],
  noNestedTernary: [],

  // The noNewBuffer rule does the same thing as ESLint's builtIn
  // noBufferConstructor rule.
  noNewBuffer: false,
  noNull: false,
  noObjectAsDefaultParameter: [],
  numericSeparatorsStyle: [{
    hexadecimal: { minimumDigits: 0, groupLength: 2 },
    binary: { minimumDigits: 0, groupLength: 4 },
    octal: { minimumDigits: 0, groupLength: 4 },
    number: { minimumDigits: 0, groupLength: 3 }
  }],
  preferMathTrunc: [],
  preferTernary: [],
  noProcessExit: [],
  noReduce: false,
  noUnreadableArrayDestructuring: [],
  noUnsafeRegex: false,
  noUnusedProperties: false,
  noUselessUndefined: [],
  noZeroFractions: [],
  numberLiteralCase: [],
  preferAddEventListener: false,
  preferArrayFind: [],
  preferDataset: [],
  preferEventKey: [],
  preferFlatMap: [],
  preferIncludes: [],
  preferModernDomApis: false,
  preferNegativeIndex: [],
  preferNodeAppend: false,
  preferNodeRemove: false,
  preferNumberProperties: [],
  preferOptionalCatchBinding: [],
  preferQuerySelector: false,
  preferReflectApply: [],
  preferReplaceAll: [],
  preferSetHas: [],
  preferSpread: [],
  preferStartsEndsWith: [],
  preferStringSlice: [],
  preferTextContent: false,
  preferTrimStartEnd: [],
  preferTypeError: false,
  preventAbbreviations: false,
  stringContent: false,
  throwNewError: []
});

export {
  unicorn
};
