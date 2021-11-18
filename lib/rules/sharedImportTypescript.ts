import { BetterRulesRecord } from '../betterRules';
import { Language } from '../Language';
import { pickRulesFor } from '../pickRulesFor';

const sharedImportTypescript = ({ language }: { language: Language }): BetterRulesRecord => ({
  ...pickRulesFor({ language }, {})
});

export {
  sharedImportTypescript
};
