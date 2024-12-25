import { useEffect } from 'react';
import { Action } from '../types';

export const useKeyboardInput = (dispatch: React.Dispatch<Action>) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key;

      if (/^[0-9.]$/.test(key) || ['+', '-', '*', '/', '=', 'Enter', 'Escape', 'Backspace'].includes(key)) {
        event.preventDefault();
      }

      if (/^[0-9.]$/.test(key)) {
        dispatch({ type: 'ADD_DIGIT', digit: key });
        return;
      }

      switch (key) {
        case '+':
        case '-':
        case '*':
        case '/':
          dispatch({ type: 'CHOOSE_OPERATION', operation: key });
          break;
        case '=':
        case 'Enter':
          dispatch({ type: 'EVALUATE' });
          break;
        case 'Escape':
          dispatch({ type: 'CLEAR' });
          break;
        case 'Backspace':
          dispatch({ type: 'DELETE_DIGIT' });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [dispatch]);
};
