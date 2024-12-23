export const formatNumber = (num: number): string => {
  if (!isFinite(num)) return 'Error';
  const preciseNum = num.toPrecision(15);
  return parseFloat(preciseNum).toString();
};

export const calculate = (prevValue: number, currentValue: number, operation: string): number => {
  const a = parseFloat(prevValue.toString());
  const b = parseFloat(currentValue.toString());

  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) return Infinity;
      return a / b;
    default:
      return currentValue;
  }
};
