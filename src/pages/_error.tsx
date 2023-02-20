import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { GlobalStyle, darkTheme, lightTheme } from '@soundise/react-components';
import { useDarkTheme } from 'hooks';
import { HttpError } from 'components';
import { errors } from 'content';

interface IErrorProps {
  statusCode?: number;
}

const Error: NextPage<IErrorProps> = ({ statusCode }) => {
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

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
