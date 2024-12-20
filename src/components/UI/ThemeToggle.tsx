import { SunMoon } from 'lucide-react';
import { ThemeToggleProps } from '../../types';

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-lg hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <SunMoon size={25} className="text-yellow-400 hover:animation-duration-100 hover:animate-spin " />
      ) : (
        <SunMoon size={25} className="text-blue-400 hover:animation-duration-100 hover:animate-spin " />
      )}
    </button>
  );
}
