import React, { useState, useEffect } from 'react';
import './App.css';
import './assets/common.css';
import './assets/home-screen-1-3.css';
import HomeScreen13 from './screens/HomeScreen13';
import CafeScreen16 from './screens/CafeScreen16';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Simple toggle to preview either Home or Cafe screen if needed later
  const [showHome, setShowHome] = useState(true);

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: 'auto', backgroundColor: 'transparent' }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>
      {showHome ? <HomeScreen13 /> : <CafeScreen16 />}
    </div>
  );
}

export default App;
