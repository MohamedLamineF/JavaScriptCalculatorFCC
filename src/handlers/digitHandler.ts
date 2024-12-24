import { CalculatorState } from '../types';

export function handleDigit(state: CalculatorState, digit: string): CalculatorState {
  if (state.overwrite) {
    return { ...state, currentValue: digit, overwrite: false, isNegative: false };
  }

  if (digit === '0' && state.currentValue === '0') {
    return state;
  }

  if (digit === '.') {
    if (state.currentValue.includes('.')) {
      return state;
    }

    if (state.currentValue === '') {
      return { ...state, currentValue: '0.' };
    }
  }
  return { ...state, currentValue: `${state.currentValue === '0' ? '' : state.currentValue}${digit}` };
}
