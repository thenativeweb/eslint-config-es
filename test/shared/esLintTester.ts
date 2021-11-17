import { ESLint } from 'eslint';
import path from 'path';
import * as defaultConfiguration from '../../lib/defaultConfiguration';

const esLintTester = new ESLint({
  baseConfig: defaultConfiguration,
  useEslintrc: false
});

const lintJavascript = async (codeString: string): Promise<ESLint.LintResult[]> =>
  esLintTester.lintText(codeString, {
    filePath: 'testFile.js'
  });

const lintJsx = async (codeString: string): Promise<ESLint.LintResult[]> =>
  esLintTester.lintText(codeString, {
    filePath: 'testFile.jsx'
  });

const lintTypescript = async (codeString: string): Promise<ESLint.LintResult[]> =>
  esLintTester.lintText(codeString, {
    filePath: path.join(__dirname, 'dummyTs', 'dummy.ts')
  });

const lintTsx = async (codeString: string): Promise<ESLint.LintResult[]> =>
  esLintTester.lintText(codeString, {
    filePath: path.join(__dirname, 'dummyTs', 'dummyTsx.tsx')
  });

export {
  lintJavascript,
  lintTypescript,
  lintJsx,
  lintTsx
};
