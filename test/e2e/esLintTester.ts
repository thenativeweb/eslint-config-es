import { ESLint } from 'eslint';
import path from 'path';
import * as defaultConfig from '../../lib/defaultConfiguration';

const esLintTester = new ESLint({
  baseConfig: defaultConfig,
  useEslintrc: false
});

const lintJavaScript = async (codeString: string): Promise<ESLint.LintResult[]> =>
  esLintTester.lintText(codeString, {
    filePath: 'testFile.js'
  });

const lintTypeScript = async (codeString: string): Promise<ESLint.LintResult[]> =>
  esLintTester.lintText(codeString, {
    filePath: path.join(__dirname, 'dummy.ts')
  });

export {
  lintJavaScript,
  lintTypeScript
};
