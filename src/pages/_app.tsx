import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@soundise/react-components';
import { config } from '@fortawesome/fontawesome-svg-core';
import { useNextraTheme } from 'hooks';

import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps) => {
  const isNextraThemeDark = useNextraTheme();

  return (
    <ThemeProvider theme={isNextraThemeDark ? darkTheme : lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
