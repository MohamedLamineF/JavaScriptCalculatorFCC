import { CalculatorState } from '../types';
import { calculate, formatNumber } from '../utils/calculator';
import { getEffectiveValue } from '../utils/operationUtils';

export function hanfleEveluate(state: CalculatorState): CalculatorState {
  if (!state.operation) return state;

  const prevValue = getEffectiveValue(state.previousValue, false);
  const currentValue = getEffectiveValue(state.currentValue || state.previousValue, state.isNegative);

  const result = calculate(prevValue, currentValue, state.operation);

  return {
    ...state,
    overwrite: true,
    previousValue: '',
    operation: null,
    currentValue: formatNumber(result),
    isNegative: false,
  };
}
