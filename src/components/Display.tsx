interface DisplayProps {
  value: string;
}

export const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div
      id="display"
      className="h-24 bg-gray-800/60 backdrop-blur-sm text-white text-right px-6 py-4 text-4xl font-mono flex items-center justify-end overflow-hidden rounded-2xl border border-white/5"
    >
      {value || '0'}
    </div>
  );
};
