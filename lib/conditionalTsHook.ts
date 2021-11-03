import { BetterRulesConfig, BetterRulesConfigFunction, BetterRulesRecord } from './betterRules/BetterRulesRecord';

type Language = 'javascript' | 'typescript';

interface SplitArgs {
  core: BetterRulesConfig;
  typescript: BetterRulesConfig;
}
interface CombinedArgs {
  both: BetterRulesConfig;
}

type ConditionalHookArgs = SplitArgs | CombinedArgs;

type ConditionalTsHook = (args: ConditionalHookArgs) => BetterRulesConfigFunction;

const splitConfigsFrom = (args: ConditionalHookArgs): SplitArgs => {
  if ('both' in args) {
    return {
      core: args.both,
      typescript: args.both
    };
  }

  return args;
};

const createConditionalTsHook = ({ language }: { language: Language}): ConditionalTsHook => {
  const useConditionalTs = function (args: ConditionalHookArgs): BetterRulesConfigFunction {
    const { core, typescript } = splitConfigsFrom(args);

    if (language === 'javascript') {
      return ({ ruleName }): BetterRulesRecord => ({ [ruleName]: core });
    }

    return function ({ ruleName }): BetterRulesRecord {
      return {
        [ruleName]: false,
        [`@eslint-typescript/${ruleName}`]: typescript
      };
    };
  };

  return useConditionalTs;
};

export {
  createConditionalTsHook
};
