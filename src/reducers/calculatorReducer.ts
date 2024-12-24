import { handleDigit } from '../handlers/digitHandler';
import { handleEvaluate } from '../handlers/evaluationHandler';
import { handleOperation } from '../handlers/operationsHandler';
import { Action, CalculatorState } from '../types';

export const initialiState: CalculatorState = {
  currentValue: '',
  previousValue: '',
  operation: null,
  overwrite: false,
  isNegative: false,
};

export function calculatorReducer(state: CalculatorState, action: Action): CalculatorState {
  switch (action.type) {
    case 'ADD_DIGIT':
      return handleDigit(state, action.digit);
    case 'CHOOSE_OPERATION':
      return handleOperation(state, action.operations);
    case 'CLEAR':
      return initialiState;
    case 'EVALUATE':
      return handleEvaluate(state);
    default:
      return state;
  }
}
