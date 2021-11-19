import { usePlugin } from '../betterRules';

const unicorn = usePlugin('unicorn', {
  betterRegex: [{ sortCharacterClasses: true }],
  catchErrorName: [{ name: 'ex', ignore: [ '^ex([AZ0-9].*)?$' ]}],
  consistentDestructuring: [],
  consistentFunctionScoping: [],
  customErrorDefinition: false,
  emptyBraceSpaces: false,
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
  noArrayCallbackReference: [],
  noArrayMethodThisArgument: [],
  noArrayReduce: false,
  noConsoleSpaces: [],
  noDocumentCookie: [],
  noForLoop: [],
  noHexEscape: [],
  noInstanceofArray: [],
  noInvalidRemoveEventListener: [],
  noLonelyIf: [],
  noNestedTernary: [],
  noNewArray: [],

  // The noNewBuffer rule does the same thing as ESLint's built-in
  // noBufferConstructor rule.
  noNewBuffer: false,
  noNull: false,
  noObjectAsDefaultParameter: [],
  noProcessExit: [],
  noStaticOnlyClass: [],
  noUnreadableArrayDestructuring: [],
  noUnsafeRegex: false,
  noUnusedProperties: false,
  noUselessFallbackInSpread: [],
  noUselessLengthCheck: [],
  noUselessSpread: [],
  noUselessUndefined: [],
  noZeroFractions: [],
  numberLiteralCase: [],
  numericSeparatorsStyle: [{
    hexadecimal: { minimumDigits: 0, groupLength: 2 },
    binary: { minimumDigits: 0, groupLength: 4 },
    octal: { minimumDigits: 0, groupLength: 4 },
    number: { minimumDigits: 0, groupLength: 3 }
  }],
  preferAddEventListener: false,
  preferArrayFind: [],
  preferArrayFlat: [],
  preferArrayFlatMap: [],
  preferArrayIndexOf: [],
  preferArraySome: [],
  preferAt: [],
  preferDateNow: [],
  preferDefaultParameters: [],
  preferDomNodeAppend: false,
  preferDomNodeDataset: [],
  preferDomNodeRemove: false,
  preferDomNodeTextContent: false,
  preferObjectHasOwn: [],
  preferIncludes: [],
  preferKeyboardEventKey: [],
  preferMathTrunc: [],
  preferModernDomApis: false,
  preferNegativeIndex: [],
  preferNumberProperties: [],
  preferObjectFromEntries: [],
  preferOptionalCatchBinding: [],
  preferPrototypeMethods: [],
  preferQuerySelector: false,
  preferReflectApply: [],
  preferRegexpTest: [],
  preferSetHas: [],
  preferSpread: [],
  preferStringReplaceAll: [],
  preferStringSlice: [],
  preferStringStartsEndsWith: [],
  preferStringTrimStartEnd: [],

  // This rule is turned off since it not only applies to assignments, but to
  // expressions using await/throw/yield as well. We have opened an issue to try
  // to remedy this: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1079
  preferTernary: false,
  preferTopLevelAwait: false,
  preferTypeError: false,
  preventAbbreviations: false,
  requireArrayJoinSeparator: [],
  requireNumberToFixedDigitsArgument: [],
  requirePostMessageTargetOrigin: [],
  stringContent: false,
  throwNewError: []
});

export {
  unicorn
};
