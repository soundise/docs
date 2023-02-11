import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@soundise/react-components';

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setTheme(element.classList.contains('dark') ? 'dark' : 'light');
        }
      });
    });

    const element = document.documentElement;
    setTheme(element.classList.contains('dark') ? 'dark' : 'light');
    observer.observe(element, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
