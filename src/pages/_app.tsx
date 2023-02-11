import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@soundise/react-components';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={darkTheme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
