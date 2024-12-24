interface ButtonProps {
  onClick: () => void;
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, className = '', id, children }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`h-16 text-xl font-semibold transition-all duration-200 rounded-xl hover:scale-[0.98] active:scale-95 focus:ring-2 focus:ring-blue-300 ${className}`}
    >
      {children}
    </button>
  );
};
