import { Language } from './Language';
import { BetterRulesEntry, BetterRulesRecord } from './betterRules/BetterRulesRecord';

interface IndividualEntries {
  core: BetterRulesEntry;
  typeScript: BetterRulesEntry;
}

interface SharedEntry {
  shared: BetterRulesEntry;
}

type PickRuleEntries = IndividualEntries | SharedEntry;

type PickRuleRecord = Record<string, PickRuleEntries>;

const splitEntries = (pickEntry: PickRuleEntries): IndividualEntries => {
  if ('shared' in pickEntry) {
    return {
      core: pickEntry.shared,
      typeScript: pickEntry.shared
    };
  }

  return pickEntry;
};

const pickRulesFor = ({ language }: { language: Language }, rulePickArgs: PickRuleRecord): BetterRulesRecord =>
  Object.entries(rulePickArgs).reduce((currentRules: BetterRulesRecord, currentRulePick): BetterRulesRecord => {
    const [ ruleName, pickEntry ] = currentRulePick;
    const { core, typeScript } = splitEntries(pickEntry);

    if (language === 'javaScript') {
      return {
        ...currentRules,
        [ruleName]: core
      };
    }

    return {
      ...currentRules,
      [ruleName]: false,
      [`@typescript-eslint/${ruleName}`]: typeScript
    };
  }, {});

export {
  pickRulesFor
};

export type {
  PickRuleRecord
};
