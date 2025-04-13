import { useState, useEffect } from 'react';

// ThemeToggle-komponent som hanterar växling mellan ljust och mörkt tema
function ThemeToggle() {
  // Hämta sparat tema från localStorage eller använd systemets inställning som standard
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Uppdatera DOM när temat ändras
  useEffect(() => {
    // Uppdatera dokumentets body och localStorage
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Växla mellan ljust och mörkt tema
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="theme-toggle">
      <button 
        onClick={toggleTheme} 
        className="theme-toggle-btn"
        title={theme === 'light' ? 'Byt till mörkt tema' : 'Byt till ljust tema'}
      >
        {theme === 'light' ? '🌙' : '☀️'} 
        <span className="theme-toggle-text">
          {theme === 'light' ? 'Mörkt tema' : 'Ljust tema'}
        </span>
      </button>
    </div>
  );
}

export default ThemeToggle; 