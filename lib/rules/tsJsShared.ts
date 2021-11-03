import { BetterRulesRecord } from '../betterRules';
import { createConditionalTsHook } from '../conditionalTsHook';

type Language = 'typescript' | 'javascript';
const createSharedRulesFor = ({ language }: { language: Language}): BetterRulesRecord => {
  const useConditionalTs = createConditionalTsHook({ language });

  return {
    braceStyle: useConditionalTs({ both: [ '1tbs', { allowSingleLine: false }]}),

    // Camlescase is a corner case - as for typescript, we only want it for javascript,
    // but for typescript we want it deactivated and replcaed by namingConvention
    camelcase (): BetterRulesRecord {
      if (language === 'javascript') {
        return {
          camelcase: [{
            properties: 'always',
            ignoreDestructuring: false,
            ignoreImports: false,
            allow: []
          }]
        };
      }

      return {
        camelcase: false,
        namingConvention: [
          [],
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
        ]

      };
    },
    commaSpacing: useConditionalTs({
      core: [{ before: false, after: true }],
      typescript: []
    }),
    dotNotation: useConditionalTs({
      core: [{ allowKeywords: true }],
      typescript: [{
        allowKeywords: true,
        allowPrivateClassPropertyAccess: false
      }]
    }),
    funcCallSpacing: useConditionalTs({
      both: [ 'never' ]
    }),
    indent: useConditionalTs({
      core: [ 2, {
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
      typescript: [ 2, {
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
      }]
    }),
    keywordSpacing: useConditionalTs({
      both: [{ before: true, after: true }]
    }),
    linesBetweenClassMembers: useConditionalTs({
      core: [ 'always', {
        exceptAfterSingleLine: false
      }],
      typescript: [ 'always', {
        exceptAfterSingleLine: false,
        exceptAfterOverload: false
      }]
    }),
    noArrayConstructor: useConditionalTs({
      both: []
    }),
    noDupeClassMembers: useConditionalTs({
      both: []
    }),
    noEmptyFunction: useConditionalTs({
      core: [{ allow: []}],
      typescript: []
    }),
    noExtraParens: useConditionalTs({ both: [ 'all', {
      conditionalAssign: false,
      enforceForArrowConditionals: false,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      ignoreJSX: 'all',
      nestedBinaryExpressions: false,
      returnAssign: false
    }]}),
    noExtraSemi: useConditionalTs({
      both: []
    }),
    noLoopFunc: useConditionalTs({
      both: []
    }),
    noLossOfPrecision: useConditionalTs({
      both: []
    }),
    noMagicNumbers: useConditionalTs({
      both: false
    }),
    noUnusedVars: useConditionalTs({
      core: [{
        args: 'afterUsed',
        caughtErrors: 'all',
        vars: 'all',
        ignoreRestSiblings: false
      }],
      typescript: [{ vars: 'all' }]
    }),
    noUseBeforeDefine: useConditionalTs({ core: [{
      functions: true,
      classes: true,
      variables: true
    }],
    typescript: [{
      functions: true,
      classes: true,
      enums: true,
      variables: true,
      typedefs: true
    }]}),
    noUselessConstructor: useConditionalTs({
      both: []
    }),
    requireAwait: useConditionalTs({
      both: false
    }),
    semi: useConditionalTs({
      both: [ 'always', { omitLastInOneLineBlock: false }]
    }),
    spaceBeforeFunctionParen: useConditionalTs({
      core: [ 'always' ],
      typescript: []
    }),
    spaceInfixOps: useConditionalTs({
      both: [{ int32Hint: false }]
    })
  };
};

export {
  createSharedRulesFor
};
