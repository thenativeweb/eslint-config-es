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
$ npx roboter
```

**Note: As we switched this library to TypeScript which is not natively supported by ESLint, this command will execute a build before analysing to actually generate the necessary rules in JavaScript.**

## Better ESLint Rules

This package has a built-in library that allows defining ESLint-Rules in a more strict but (what we think) better and intuitive format.

A basic example looks like this:

```typescript
const betterRules: BetterRulesRecord = {
  camelcase: false, // compiles to "camelcase: 'off'"
  forDirection: [], // compiles to "for-direction: 'error'"
  noParens: [ 'always', { otherConfig: 'value' } ], // compiles to "no-parens: [ 'error', 'always', {otherConfig: 'value' } ]"
  noContinue: ({ ruleName }): BetterRulesRecord => ({
    [`unicorn/${ruleName}`]: []
  }); // compiles to "'unicorn/no-continue': 'error'"
}

// Then you can compile it with the compile function
import { compile } from './betterRules';
const compiledESLintRules = compile(betterRules);
export {
  rules: compiledESLintRules
}
```

### Differences to normal ESLint Rules

There are now only three accepted configuration-values for a rule:

1. `false` for turning it off.
2. a (possible empty) Array `[]` to turn it on and configure it.
3. a function `({ ruleName }) => BetterRulesRecord` to allow for more dynamic rules (explained later).

There are two more main differences:

1. Rules are now in **camelCase**.
2. **error** is the only and the default severity for all rules.

### Function Configuration

The function configuration allows you to easily define more dynamic rules. This is especially useful if you work with plugins that might overwrite core-rules.

### But why?

1. Turn Rules off with `false` rather than with a string `'off'` as it is easier to distinguish.
2. Turn Rules on with a (possible) empty Array-configuration `[]`. This streamlines the configuration.
3. Only allow `errors` and make them the default. We do not see a value in ESLint-Warnings, as warnings tend to get ignored.
4. Accept functions as configuration and work with their return arguments. This is a powerful addition as it allows for a more dynamic rules-definition as seen in the section below.

In order for the above to work with eslint, you have to compile it:

1. All rules `error` by default - so no need to explicitly set it every time.
2. Instead of 'off'
