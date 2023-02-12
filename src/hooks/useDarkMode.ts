import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(element.classList.contains('dark'));
        }
      });
    });

    const element = document.documentElement;
    setIsDarkMode(element.classList.contains('dark'));
    observer.observe(element, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return isDarkMode;
};
