export interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export type Operation = '+' | '-' | '*' | '/' | null;

export interface CalculatorState {
  currentValue: string;
  previousValue: string;
  operation: Operation;
  overwrite: boolean;
  isNegative: boolean;
}

export type Action =
  | { type: 'ADD_DIGIT'; digit: string }
  | { type: 'CHOOSE_OPERATION'; operation: Operation }
  | { type: 'CLEAR' }
  | { type: 'EVALUATE' };
