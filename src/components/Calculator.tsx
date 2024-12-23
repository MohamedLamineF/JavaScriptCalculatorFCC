interface CalculatorProps {
  children: React.ReactNode;
}

export const Calculator: React.FC<CalculatorProps> = ({ children }) => {
  return (
    <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-3xl shadow-2xl w-full max-w-md border border-white/10">
      {children}
    </div>
  );
};
