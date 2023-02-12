import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@soundise/react-components';
import { useDarkMode } from 'hooks';

const App = ({ Component, pageProps }: AppProps) => {
  const isDarkMode = useDarkMode();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
