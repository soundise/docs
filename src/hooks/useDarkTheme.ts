import { useState, useEffect } from 'react';

export const useDarkTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const setTheme = () => {
      if (theme === 'system') {
        setIsDarkTheme(mediaQuery.matches);
      } else {
        setIsDarkTheme(theme === 'dark');
      }
    };

    setTheme();
    mediaQuery.addEventListener('change', setTheme);

    return () => {
      mediaQuery.removeEventListener('change', setTheme);
    };
  }, []);

  return isDarkTheme;
};
