import { Language } from '../Language';
import { BetterRulesRecord, usePlugin } from '../betterRules';

const sharedImportTypescript = ({ language }: { language: Language }): BetterRulesRecord =>
  usePlugin('import',
    {
      noCommonjs: language === 'javascript' ? false : []
    });

export {
  sharedImportTypescript
};
