import { BetterRulesRecord } from '../betterRules';
import { Language } from '../Language';
import { pickRulesFor } from '../pickRulesFor';

const createSharedRulesFor = ({ language }: { language: Language }): BetterRulesRecord => {
  // CamelCase is a corner case - as for TypeScript, we only want it for JavaScript,
  // but for TypeScript we want it deactivated and replaced by namingConvention
  const specialCamelCaseRule: BetterRulesRecord = language === 'javascript' ?
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
    ...specialCamelCaseRule,
    ...pickRulesFor({ language }, {
      braceStyle: { shared: [ '1tbs', { allowSingleLine: false }]},
      commaSpacing: {
        core: [{ before: false, after: true }],
        typescript: []
      },
      defaultParamLast: {
        shared: []
      },
      dotNotation: {
        core: [{ allowKeywords: true }],
        typescript: [{
          allowKeywords: true,
          allowPrivateClassPropertyAccess: false
        }]
      },
      funcCallSpacing: {
        shared: [ 'never' ]
      },
      indent: {
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
      },
      keywordSpacing: {
        shared: [{ before: true, after: true }]
      },
      linesBetweenClassMembers: {
        core: [ 'always', {
          exceptAfterSingleLine: false
        }],
        typescript: [ 'always', {
          exceptAfterSingleLine: false,
          exceptAfterOverload: false
        }]
      },
      noArrayConstructor: {
        shared: []
      },
      noDupeClassMembers: {
        shared: []
      },
      noEmptyFunction: {
        core: [{ allow: []}],
        typescript: []
      },
      noExtraParens: { shared: [ 'all', {
        conditionalAssign: false,
        enforceForArrowConditionals: false,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ignoreJSX: 'all',
        nestedBinaryExpressions: false,
        returnAssign: false
      }]},
      noExtraSemi: {
        shared: []
      },
      noLoopFunc: {
        shared: []
      },
      noLossOfPrecision: {
        shared: []
      },
      noMagicNumbers: {
        shared: false
      },
      noShadow: {
        shared: [{ builtinGlobals: false, hoist: 'functions', allow: []}]
      },
      noUnusedVars: {
        core: [{
          args: 'after-used',
          caughtErrors: 'all',
          vars: 'all',
          ignoreRestSiblings: false
        }],
        typescript: [{ vars: 'all' }]
      },
      noUseBeforeDefine: { core: [{
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
      }]},
      noUselessConstructor: {
        shared: []
      },
      objectCurlySpacing: {
        shared: [ 'always', { objectsInObjects: false, arraysInObjects: false }]
      },
      requireAwait: {
        shared: false
      },
      semi: {
        shared: [ 'always', { omitLastInOneLineBlock: false }]
      },
      spaceBeforeFunctionParen: {
        core: [ 'always' ],
        typescript: []
      },
      spaceInfixOps: {
        shared: [{ int32Hint: false }]
      }
    })
  };
};

export {
  createSharedRulesFor
};
