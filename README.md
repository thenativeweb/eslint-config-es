# eslint-config-es

eslint-config-es contains a strict ESLint configuration for ES2015+.

## Installation

```shell
$ npm install eslint-config-es \
              eslint
```

The following additional ESLint plugins are included by default, so you don't have to install them:

| Plugin | Automatically enabled |
|-|-|
| [eslint-plugin-extended](https://www.npmjs.com/package/eslint-plugin-extended) | Yes |
| [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) | Yes |
| [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) | No |
| [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) | Yes |
| [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) | No |

To enable support for React and JSX, all you need to do is to install the [react](https://www.npmjs.com/package/react) module. The appropriate rules will become enabled automatically.

To enable support for TypeScript, all you need to do is to install the [typescript](https://www.npmjs.com/package/typescript) module. The appropriate rules will become enabled automatically.

## Quick Start

This module contains a very strict ESLint configuration for ES2015 and above, both for Node.js and browser development. Its aims to eradicate *any* variation in code style. If you can not tell any more, based on little individual manners, who of your co-workers wrote a piece of code, this module succeeded. This helps you to narrow down your focus to pure functionality, as you do not have to think about code styling any more at all.

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

To release a new version run the following command:

```shell
$ npm run publish-patch
```

Alternatively you may also use `publish-minor` and `publish-major`, depending on the changes you have made.

## License

The MIT License (MIT)
Copyright (c) 2015-2019 the native web.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
