import { CalculatorState, Operation } from '../types';
import { getEffectiveValue, shouldHandleNegative, shouldUpdateOperation } from '../utils/operationUtils';
import { calculate, formatNumber } from '../utils/calculator';
export function handleOperation(state: CalculatorState, operation: Operation): CalculatorState {
  if (shouldHandleNegative(state, operation)) {
    return { ...state, isNegative: true };
  }

  if (state.overwrite) {
    return {
      ...state,
      operation,
      previousValue: state.currentValue,
      currentValue: '',
      overwrite: false,
      isNegative: false,
    };
  }

  if (state.currentValue === '' && shouldUpdateOperation(state, operation)) {
    return { ...state, operation, isNegative: false };
  }

  if (state.previousValue === '') {
    return { ...state, operation, previousValue: state.currentValue || '0', currentValue: '', isNegative: false };
  }

  const prevValue = getEffectiveValue(state.previousValue, false);
  const currentValue = getEffectiveValue(state.currentValue || '0', state.isNegative);

  const result = calculate(prevValue, currentValue, state.operation!);

  return {
    ...state,
    operation,
    previousValue: formatNumber(result),
    currentValue: '',
    overwrite: false,
    isNegative: false,
  };
}
