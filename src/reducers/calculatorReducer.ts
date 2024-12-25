import { handleDigit } from '../handlers/digitHandler';
import { handleEvaluation } from '../handlers/evaluationHandler';
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
      return handleOperation(state, action.operation);
    case 'CLEAR':
      return initialiState;
    case 'EVALUATE':
      return handleEvaluation(state);
    case 'DELETE_DIGIT':
      if (state.currentValue === '') return state;
      return {
        ...state,
        currentValue: state.currentValue.slice(0, -1)
      };
    default:
      return state;
  }
}
