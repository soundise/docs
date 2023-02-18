import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { styled } from 'styled-components';
import { GlobalStyle, darkTheme, lightTheme } from '@soundise/react-components';
import { useDarkTheme } from 'hooks';
import { errors } from 'content';

interface IErrorProps {
  statusCode?: number;
}

const Error: NextPage<IErrorProps> = ({ statusCode }) => {
  const isDarkTheme = useDarkTheme();
  const error = errors[`error${statusCode}`] || errors.fallback;

  return (
    <>
      <Head>
        <title>{statusCode} | Soundise</title>
      </Head>
      <Wrapper>
        <GlobalStyle theme={isDarkTheme ? darkTheme : lightTheme} />
        <Icon>{error.icon}</Icon>
        <Message>
          <Title>{error.title}</Title>
          <Description>{error.description}</Description>
        </Message>
      </Wrapper>
    </>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

const Wrapper = styled.div`
  max-width: 1232px;
  height: 100%;
  padding: 1.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Icon = styled.div`
  font-size: 4rem;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
`;
