import { BetterRulesRecord } from '../betterRules';
import { createOverrideFor } from '../conditionalTsHook';
import { Language } from '../Language';

const createSharedRulesFor = ({ language }: { language: Language}): BetterRulesRecord => {
  const overrideBaseWhenTypeScript = createOverrideFor({ language });

  // CamelCase is a corner case - as for typescript, we only want it for javascript,
  // but for typescript we want it deactivated and replaced by namingConvention
  const camelCaseRule: BetterRulesRecord = language === 'javaScript' ?
    {
      camelcase: [{
        properties: 'always',
        ignoreDestructuring: false,
        ignoreImports: false,
        allow: []
      }]
    } :
    {
      camelcase: false,
      '@typescript-eslint/namingConvention': [
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

  return {
    ...camelCaseRule,
    braceStyle: overrideBaseWhenTypeScript({ both: [ '1tbs', { allowSingleLine: false }]}),

    commaSpacing: overrideBaseWhenTypeScript({
      core: [{ before: false, after: true }],
      typeScript: []
    }),
    dotNotation: overrideBaseWhenTypeScript({
      core: [{ allowKeywords: true }],
      typeScript: [{
        allowKeywords: true,
        allowPrivateClassPropertyAccess: false
      }]
    }),
    funcCallSpacing: overrideBaseWhenTypeScript({
      both: [ 'never' ]
    }),
    indent: overrideBaseWhenTypeScript({
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
      typeScript: [ 2, {
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
    keywordSpacing: overrideBaseWhenTypeScript({
      both: [{ before: true, after: true }]
    }),
    linesBetweenClassMembers: overrideBaseWhenTypeScript({
      core: [ 'always', {
        exceptAfterSingleLine: false
      }],
      typeScript: [ 'always', {
        exceptAfterSingleLine: false,
        exceptAfterOverload: false
      }]
    }),
    noArrayConstructor: overrideBaseWhenTypeScript({
      both: []
    }),
    noDupeClassMembers: overrideBaseWhenTypeScript({
      both: []
    }),
    noEmptyFunction: overrideBaseWhenTypeScript({
      core: [{ allow: []}],
      typeScript: []
    }),
    noExtraParens: overrideBaseWhenTypeScript({ both: [ 'all', {
      conditionalAssign: false,
      enforceForArrowConditionals: false,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      ignoreJSX: 'all',
      nestedBinaryExpressions: false,
      returnAssign: false
    }]}),
    noExtraSemi: overrideBaseWhenTypeScript({
      both: []
    }),
    noLoopFunc: overrideBaseWhenTypeScript({
      both: []
    }),
    noLossOfPrecision: overrideBaseWhenTypeScript({
      both: []
    }),
    noMagicNumbers: overrideBaseWhenTypeScript({
      both: false
    }),
    noUnusedVars: overrideBaseWhenTypeScript({
      core: [{
        args: 'after-used',
        caughtErrors: 'all',
        vars: 'all',
        ignoreRestSiblings: false
      }],
      typeScript: [{ vars: 'all' }]
    }),
    noUseBeforeDefine: overrideBaseWhenTypeScript({ core: [{
      functions: true,
      classes: true,
      variables: true
    }],
    typeScript: [{
      functions: true,
      classes: true,
      enums: true,
      variables: true,
      typedefs: true
    }]}),
    noUselessConstructor: overrideBaseWhenTypeScript({
      both: []
    }),
    requireAwait: overrideBaseWhenTypeScript({
      both: false
    }),
    semi: overrideBaseWhenTypeScript({
      both: [ 'always', { omitLastInOneLineBlock: false }]
    }),
    spaceBeforeFunctionParen: overrideBaseWhenTypeScript({
      core: [ 'always' ],
      typeScript: []
    }),
    spaceInfixOps: overrideBaseWhenTypeScript({
      both: [{ int32Hint: false }]
    })
  };
};

export {
  createSharedRulesFor
};
