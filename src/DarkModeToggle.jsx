import React, { useEffect, useState } from 'react';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button 
      onClick={toggleDarkMode} 
      className="p-3 cursor-pointer dark:bg-gray-800 dark:text-yellow-200 bg-blue-100 text-orange-500 rounded-full hover:scale-110 transform transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
    >
      <span className="inline-block transition-transform duration-300 ease-in-out hover:rotate-45">
        {isDarkMode ? '🌞' : '🌙'}
      </span>
      <span className="ml-2 text-sm font-medium">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </span>
    </button>
  );
}

export default DarkModeToggle;
