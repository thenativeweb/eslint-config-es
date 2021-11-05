# eslint-config-es

eslint-config-es contains a strict ESLint configuration for ES2015+ and TypeScript.

## Status

| Category         | Status                                                                                                      |
| ---------------- | ----------------------------------------------------------------------------------------------------------- |
| Version          | [![npm](https://img.shields.io/npm/v/eslint-config-es)](https://www.npmjs.com/package/eslint-config-es)     |
| Dependencies     | ![David](https://img.shields.io/david/thenativeweb/eslint-config-es)                                        |
| Dev dependencies | ![David](https://img.shields.io/david/dev/thenativeweb/eslint-config-es)                                    |
| Build            | ![GitHub Actions](https://github.com/thenativeweb/eslint-config-es/workflows/Release/badge.svg?branch=main) |
| License          | ![GitHub](https://img.shields.io/github/license/thenativeweb/eslint-config-es)                              |

## Installation

```shell
$ npm install eslint-config-es \
              eslint
```

The following additional ESLint plugins are included by default, so you don't have to install them:

| Plugin                                                                                             | Automatically enabled |
| -------------------------------------------------------------------------------------------------- | --------------------- |
| [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments)       | Yes                   |
| [eslint-plugin-extended](https://www.npmjs.com/package/eslint-plugin-extended)                     | Yes                   |
| [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha)                           | Yes                   |
| [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)                           | No                    |
| [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)                       | Yes                   |
| [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) | No                    |

To enable support for React and JSX, all you need to do is to install the [react](https://www.npmjs.com/package/react) module. The appropriate rules will become enabled automatically.

To enable support for TypeScript, all you need to do is to install the [typescript](https://www.npmjs.com/package/typescript) module. The appropriate rules will become enabled automatically for `.ts` and `.tsx` files. The generated configuration expects a `tsconfig.json` at the project root.

## Quick Start

This module contains a very strict ESLint configuration for ES2015 and above, both for Node.js and browser development. Its aims to eradicate _any_ variation in code style. If you can not tell any more, based on little individual manners, who of your co-workers wrote a piece of code, this module succeeded. This helps you to narrow down your focus to pure functionality, as you do not have to think about code styling any more at all.

To use one of those configurations, create a `.eslintrc.json` file in your project and use the `extends` keyword.

```json
{
  "extends": "es/node"
}
```

Alternatively, you may also use `es/browser`.

If you want to override any rules, you can do so in your configuration file. For details on how to do this, e.g. to get an explanation on how to enable or disable specific rules, see the [ESLint documentation on extending configuration files](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files).

## Running quality assurance

To run quality assurance for this module use [roboter](https://www.npmjs.com/package/roboter):

```shell
$ npm run roboter
```

**Note: `npx roboter` will not work as our ESLint Rules are written in TypeScript, so  they have to be compiled before usage. `npm run roboter` will do this.**

## Better ESLint Rules

This package has a built-in library that allows defining ESLint-Rules in a more strict but (what we think) better and intuitive format.

A basic example looks like this:

```typescript
const betterRulesRecord: BetterRulesRecord = {
  camelcase: false, // compiles to "camelcase: 'off'"
  forDirection: [], // compiles to "for-direction: 'error'"
  noParens: [ 'always', { otherConfig: 'value' } ], // compiles to "no-parens: [ 'error', 'always', {otherConfig: 'value' } ]"
}
```

To be able to use those rules with ESLint, they have to be compiled with the `betterRules.compile` method. The whole `betterRules` package is exported by this library and can be used like this:

```typescript
import { betterRules } from 'eslint-config-es';
const compiledESLintRules = betterRules.compile(betterRulesRecord);

// Will produce:
{
  camelcase: 'off',
  'for-direction': [ 'error' ], 
  'no-parens': [ 'error', 'always', { otherConfig: 'value' } ],
}
```

### Differences to normal ESLint Rules

1. Only 2 allowed rule-configs exist:
    1. `false` for turning it off.
    2. `[]` (possible empty) to turn it on with severity `error` and provide additional configuration.
2. Rules are now in **camelCase**.
3. **error** is the default and only for all rules.

### UsePlugin-Hook

You can use the `usePlugin` hook to avoid having to put plugin-rules in quotes (`'react/test-rule'`) like this:

```typescript
import { betterRules } from 'eslint-config-es'

const reactRules: BetterRulesRecord = betterRules.usePlugin('react', {
  booleanPropNaming: false
});
```

#### Plugin names do not get compiled

Thus, you can use this hook to avoid weird constructs and streamline your configs:

```typescript
const weirdMix: BetterRulesRecord = {
  '@typescript-eslint/arrayType': []
};

const betterDefiniton: BetterRulesRecord = 
  betterRules.usePlugin('@typescript-eslint', {
    arrayType: []
  };
```

### But why?

1. Turning Rules off with `false` rather than with a string `'off'` is easier to distinguish from turned on rules and strictly avoids typos (`false` will yield a compiler error if mistyped).
2. We do not see a value in ESLint `warnings`, as warnings tend to get ignored.
3. Because of 2., there is no need for additional abilities to turn on a rule (`true`, or a string), thus only allowing arrays `[]` streamlines and simplifies the configuration a lot.
4. CamelCasing the rules avoids the need to sometimes type property-keys of rules with quotes `'` (e.g. `{ 'for-direction': 'off'}`), thus again streamlining configuration.
