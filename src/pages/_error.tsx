import type { NextPage, NextPageContext } from 'next';
import { ErrorPage } from 'components';

interface IErrorProps {
  statusCode?: number;
}

const Error: NextPage<IErrorProps> = ({ statusCode }) => (
  <ErrorPage statusCode={statusCode || 404} />
);

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
