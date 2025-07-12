import React from 'react';
import { useTheme } from '../ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-teal text-navy px-4 py-2 rounded-full font-bold hover:bg-white transition-colors duration-300"
    >
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default ThemeToggle;
