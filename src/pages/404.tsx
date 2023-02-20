import Head from 'next/head';
import { GlobalStyle, darkTheme, lightTheme } from '@soundise/react-components';
import { useDarkTheme } from 'hooks';
import { HttpError } from 'components';
import { errors } from 'content';

const Error404 = () => {
  const isDarkTheme = useDarkTheme();
  const error = errors.error404;
  const title = '404 | Soundise';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <HttpError
        icon={error.icon}
        title={error.title}
        description={error.description}
      >
        <GlobalStyle theme={isDarkTheme ? darkTheme : lightTheme} />
      </HttpError>
    </>
  );
};

export default Error404;
