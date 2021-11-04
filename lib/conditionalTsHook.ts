import { Language } from './Language';
import { BetterRulesEntry, BetterRulesEntryFunction, BetterRulesRecord } from './betterRules/BetterRulesRecord';

interface SplitArgs {
  core: BetterRulesEntry;
  typeScript: BetterRulesEntry;
}
interface CombinedArgs {
  both: BetterRulesEntry;
}

type ConditionalHookArgs = SplitArgs | CombinedArgs;

type ConditionalTsHook = (args: ConditionalHookArgs) => BetterRulesEntryFunction;

const splitConfigsFrom = (args: ConditionalHookArgs): SplitArgs => {
  if ('both' in args) {
    return {
      core: args.both,
      typeScript: args.both
    };
  }

  return args;
};

const createOverrideFor = ({ language }: { language: Language}): ConditionalTsHook => {
  const overrideBaseWhenTypeScript = function (args: ConditionalHookArgs): BetterRulesEntryFunction {
    const { core, typeScript } = splitConfigsFrom(args);

    if (language === 'javaScript') {
      return ({ ruleName }): BetterRulesRecord => ({ [ruleName]: core });
    }

    return function ({ ruleName }): BetterRulesRecord {
      return {
        [ruleName]: false,
        [`@typescript-eslint/${ruleName}`]: typeScript
      };
    };
  };

  return overrideBaseWhenTypeScript;
};

export {
  createOverrideFor
};

export type {
  ConditionalHookArgs
};
