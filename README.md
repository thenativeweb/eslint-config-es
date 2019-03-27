# eslint-config-es

eslint-config-es contains a strict ESLint configuration for ES2015+.

## Installation

```shell
$ npm install eslint-config-es \
              eslint
```

You may install additional plugins for ESLint. If you do, the following ones are automatically detected and configured for you.

-   [eslint-plugin-extended](https://www.npmjs.com/package/eslint-plugin-extended)
-   [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha)
-   [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)

## Quick Start

This module contains a very strict ESLint configuration for ES2015 and above, both for server and client development. Its aims to eradicate _any_ variation in code style. If you can not tell any more, based on little individual manners, who of your co-workers wrote a piece of code, this module succeeded. This helps you to narrow down your focus to pure functionality, as you do not have to think about code styling any more at all.

To use one of those configurations, create a `.eslintrc.json` file in your project and use the `extends` keyword.

```json
{
  "extends": "es/2015/server"
}
```

Alternatively, you may also use `es/2015/client`.

If you want to override any rules, you can do so in your configuration file.

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```shell
$ npx roboter
```

## License

The MIT License (MIT)
Copyright (c) 2015-2019 the native web.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
