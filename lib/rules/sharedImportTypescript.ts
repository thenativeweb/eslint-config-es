import { Language } from '../Language';
import { BetterRulesRecord, withPlugin } from '../betterRules';

const sharedImportTypescript = ({ language }: { language: Language }): BetterRulesRecord =>
  withPlugin('import',
    {
      noCommonjs: language === 'javascript' ? false : []
    });

export {
  sharedImportTypescript
};
