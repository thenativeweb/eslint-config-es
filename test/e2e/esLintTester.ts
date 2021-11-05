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

const lintJsx = async (codeString: string): Promise<ESLint.LintResult[]> =>
  esLintTester.lintText(codeString, {
    filePath: 'testFile.jsx'
  });

const lintTypeScript = async (codeString: string): Promise<ESLint.LintResult[]> =>
  esLintTester.lintText(codeString, {
    filePath: path.join(__dirname, 'dummyTs', 'dummy.ts')
  });

const lintTsx = async (codeString: string): Promise<ESLint.LintResult[]> =>
  esLintTester.lintText(codeString, {
    filePath: path.join(__dirname, 'dummyTs', 'dummyTsx.tsx')
  });

export {
  lintJavaScript,
  lintTypeScript,
  lintJsx,
  lintTsx
};
