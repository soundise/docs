import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@soundise/react-components';

const App = ({ Component, pageProps }: AppProps) => {
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

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
