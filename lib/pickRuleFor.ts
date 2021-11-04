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

const pickRulesFor = ({ language }: { language: Language }, pickRuleRecord: PickRuleRecord): BetterRulesRecord => {
  const pickedRules: BetterRulesRecord = {};

  for (const [ ruleName, pickRuleEntry ] of Object.entries(pickRuleRecord)) {
    const { core, typeScript } = splitEntries(pickRuleEntry);

    if (language === 'javaScript') {
      pickedRules[ruleName] = core;
      continue;
    }

    pickedRules[ruleName] = false;
    pickedRules[`@typescript-eslint/${ruleName}`] = typeScript;
  }

  return pickedRules;
};

export {
  pickRulesFor
};

export type {
  PickRuleRecord
};
