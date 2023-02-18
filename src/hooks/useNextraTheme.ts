import { useState, useEffect } from 'react';

export const useNextraTheme = () => {
  const [isNextraThemeDark, setIsNextraThemeDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsNextraThemeDark(element.classList.contains('dark'));
        }
      });
    });

    const element = document.documentElement;
    setIsNextraThemeDark(element.classList.contains('dark'));
    observer.observe(element, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return isNextraThemeDark;
};
