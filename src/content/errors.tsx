import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserLock,
  faFileCircleExclamation,
  faPlugCircleExclamation,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';

interface IError {
  [key: string]: {
    icon: ReactNode;
    title: string;
    description: string | ReactNode;
  };
}

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary.pr500};
`;

export const errors: IError = {
  error401: {
    icon: <FontAwesomeIcon icon={faUserLock} />,
    title: 'Sorry for the roadblock!',
    description:
      "You need to have admin's permission to get a peek of this page!",
  },
  error403: {
    icon: <FontAwesomeIcon icon={faUserLock} />,
    title: 'Sorry for the roadblock!',
    description:
      "You need to have admin's permission to get a peek of this page!",
  },
  error404: {
    icon: <FontAwesomeIcon icon={faFileCircleExclamation} />,
    title: 'Seems like you are lost...',
    description: (
      <>
        Return to the <Link href="/">homepage</Link>!
      </>
    ),
  },
  error500: {
    icon: <FontAwesomeIcon icon={faPlugCircleExclamation} />,
    title: "It's not you, it's us!",
    description: 'We are trying to fix things here! We won’t take that long!',
  },
  error503: {
    icon: <FontAwesomeIcon icon={faPlugCircleExclamation} />,
    title: "It's not you, it's us!",
    description: 'We are trying to fix things here! We won’t take that long!',
  },
  fallback: {
    icon: <FontAwesomeIcon icon={faCircleExclamation} />,
    title: 'Something went wrong!',
    description:
      "We're so sorry. We're not sure what happened. Please try again later!",
  },
};
