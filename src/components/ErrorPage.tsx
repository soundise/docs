import Head from 'next/head';
import {
  GlobalStyle,
  darkTheme,
  lightTheme,
  HttpError,
} from '@soundise/react-components';
import { useDarkTheme } from 'hooks';
import { errors } from 'content';

interface IErrorPageProps {
  statusCode: number;
}

export const ErrorPage = ({ statusCode }: IErrorPageProps) => {
  const isDarkTheme = useDarkTheme();
  const error = errors[`error${statusCode}`] || errors.fallback;
  const title = `${statusCode} | Soundise`;

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
