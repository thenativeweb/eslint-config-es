import { BetterRulesRecord, usePlugin } from '../betterRules';

const typescript: BetterRulesRecord = {
  ...usePlugin('unicorn', {
    // This rule is already enforced via the type system and produces false-positives.
    requirePostMessageTargetOrigin: false
  }),

  ...usePlugin('@typescript-eslint', {
    adjacentOverloadSignatures: [],
    arrayType: [{ default: 'array' }],
    awaitThenable: [],
    banTsComment: [{
      'ts-ignore': true,
      'ts-nocheck': true,
      'ts-check': false
    }],
    banTslintComment: [],
    banTypes: [
      {
        types: {
          object: false
        }
      }
    ],
    classLiteralPropertyStyle: [ 'fields' ],
    consistentIndexedObjectStyle: [ 'record' ],
    consistentTypeAssertions: [{
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow'
    }],
    consistentTypeDefinitions: [ 'interface' ],
    consistentTypeImports: [{
      prefer: 'no-type-imports',
      disallowTypeAnnotations: true
    }],
    defaultParamLast: [],
    explicitFunctionReturnType: [{
      allowExpressions: false,
      allowTypedFunctionExpressions: false,
      allowHigherOrderFunctions: false
    }],
    explicitMemberAccessibility: [{
      accessibility: 'explicit'
    }],
    explicitModuleBoundaryTypes: false,
    initDeclarations: false,
    memberDelimiterStyle: [{
      multiline: { delimiter: 'semi', requireLast: true },
      singleline: { delimiter: 'semi', requireLast: false }
    }],
    memberOrdering: false,
    methodSignatureStyle: [ 'property' ],
    noBaseToString: [],
    noConfusingNonNullAssertion: [],
    noDynamicDelete: [],
    noEmptyInterface: [{
      allowSingleExtends: false
    }],
    noExplicitAny: false,
    noExtraneousClass: [{
      allowConstructorOnly: false,
      allowEmpty: false,
      allowStaticOnly: false
    }],
    noFloatingPromises: [{
      ignoreVoid: false
    }],
    noForInArray: [],
    noImplicitAnyCatch: [{
      allowExplicitAny: false
    }],
    noImpliedEval: [],
    noInferrableTypes: [{
      ignoreParameters: false,
      ignoreProperties: false
    }],
    noInvalidThis: false,
    noInvalidVoidType: false,
    noMisusedNew: [],
    noMisusedPromises: [{
      checksConditionals: true,
      checksVoidReturn: false
    }],
    noNamespace: [{
      allowDeclarations: false,
      allowDefinitionFiles: true
    }],
    noNonNullAssertedOptionalChain: [],
    noNonNullAssertion: false,
    noParameterProperties: false,
    noRequireImports: [],
    noThisAlias: [{
      allowDestructuring: false,
      allowedNames: []
    }],
    noThrowLiteral: [],
    noTypeAlias: false,
    noUnnecessaryBooleanLiteralCompare: [],
    noUnnecessaryCondition: [{
      allowConstantLoopConditions: false,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false
    }],
    noUnnecessaryQualifier: [],
    noUnnecessaryTypeArguments: [],
    noUnnecessaryTypeAssertion: [{
      typesToIgnore: []
    }],
    noUnnecessaryTypeConstraint: [],
    noUnsafeArgument: false,
    noUnsafeAssignment: false,
    noUnsafeCall: false,
    noUnsafeMemberAccess: false,
    noUnsafeReturn: false,
    noVarRequires: [],
    nonNullableTypeAssertionStyle: [],
    preferAsConst: [],
    preferEnumInitializers: false,
    preferForOf: [],
    preferFunctionType: [],
    preferIncludes: [],
    preferLiteralEnumMember: [],
    preferNamespaceKeyword: false,
    preferNullishCoalescing: [{
      ignoreConditionalTests: false,
      ignoreMixedLogicalExpressions: false
    }],
    preferReadonly: [{ onlyInlineLambdas: false }],
    preferReadonlyParameterTypes: false,
    preferReduceTypeParameter: [],
    preferRegexpExec: [],
    preferStringStartsEndsWith: [],
    preferTsExpectError: [],
    promiseFunctionAsync: [{
      allowAny: true,
      allowedPromiseNames: [],
      checkArrowFunctions: true,
      checkFunctionDeclarations: true,
      checkFunctionExpressions: true,
      checkMethodDeclarations: true
    }],
    requireArraySortCompare: [],
    restrictPlusOperands: [],
    restrictTemplateExpressions: false,
    strictBooleanExpressions: false,
    switchExhaustivenessCheck: [],
    tripleSlashReference: [],
    typeAnnotationSpacing: [{
      before: false,
      after: true,
      overrides: { arrow: { before: true, after: true }}
    }],
    typedef: false,
    unboundMethod: [{ ignoreStatic: true }],
    unifiedSignatures: []
  })
};

export {
  typescript
};
