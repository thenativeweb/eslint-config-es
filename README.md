# eslint-config-es

eslint-config-es contains a strict ESLint configuration for ES2015+ and TypeScript.

## Status

| Category         | Status                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------- |
| Version          | [![npm](https://img.shields.io/npm/v/eslint-config-es)](https://www.npmjs.com/package/eslint-config-es)       |
| Dependencies     | ![David](https://img.shields.io/david/thenativeweb/eslint-config-es)                                          |
| Dev dependencies | ![David](https://img.shields.io/david/dev/thenativeweb/eslint-config-es)                                      |
| Build            | ![GitHub Actions](https://github.com/thenativeweb/eslint-config-es/workflows/Release/badge.svg?branch=master) |
| License          | ![GitHub](https://img.shields.io/github/license/thenativeweb/eslint-config-es)                                |

## Installation

```shell
$ npm install eslint-config-es \
              eslint
```

The following additional ESLint plugins are included by default, so you don't have to install them:

| Plugin                                                                                             | Automatically enabled |
| -------------------------------------------------------------------------------------------------- | --------------------- |
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

If you want to override any rules, you can do so in your configuration file.

## Running the build

Since this module is required by [roboter](https://www.npmjs.com/package/roboter), it can not use roboter to build itself. Hence you have to use `npm` for that.

To analyse the source code run the following command:

```shell
$ npm run analyse
```
