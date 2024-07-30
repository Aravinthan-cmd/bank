import React, { useState } from 'react';
// import './theme-toggle.scss';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme', !isDarkMode);
  };

  return (
    <div className="theme-btn" onClick={toggleTheme}>
      <span className={`material-icons-sharp ${isDarkMode ? '' : 'active'}`}>light_mode</span>
      <span className={`material-icons-sharp ${isDarkMode ? 'active' : ''}`}>dark_mode</span>
    </div>
  );
};

export default ThemeToggle;
