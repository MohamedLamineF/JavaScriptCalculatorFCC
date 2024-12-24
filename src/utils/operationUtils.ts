import { CalculatorState, Operation } from '../types';

export function isOperator(value: string | null): value is Operation {
  return ['+', '-', '*', '/'].includes(value as string);
}

export function shouldHandleNegative(state: CalculatorState, operation: Operation): boolean {
  if (state.currentValue === '' && state.previousValue === '') {
    return operation === '-';
  }
  if (operation === '-' && state.operation && state.currentValue === '') {
    return !state.isNegative;
  }
  return false;
}

export function shouldUpdateOperation(state: CalculatorState, operation: Operation): boolean {
  if (state.isNegative && operation !== '-' && state.currentValue === '') {
    return true;
  }
  if (shouldHandleNegative(state, operation)) {
    return false;
  }
  return state.previousValue !== '';
}

export function getEffectiveValue(value: string, isNegative: boolean): number {
  if (!value) return 0;
  const numericValue = parseFloat(value);
  return isNegative ? -numericValue : numericValue;
}
