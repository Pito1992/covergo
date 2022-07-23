import React from 'react';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { HOME_PAGE_URL } from '../../constants/urls';
import { ERRORS } from '../../constants/errors';
import { RANK } from 'src/constants';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import Wrapper from '../../components/Wrapper';

import styles from './styles.module.scss';

function ErrorPage(): JSX.Element {
  const navigate = useNavigate();
  const { state } = useLocation();
  const error = state && typeof state === 'object' && (state as any).error;

  if (!error) {
    return <Navigate to={HOME_PAGE_URL} />
  }

  const onBackHome = () => navigate(HOME_PAGE_URL);
  const { title, content, buttonText } = ERRORS[error as keyof typeof ERRORS];

  return (
    <Container className={styles.container} center>
      <Wrapper>
        <Heading bold tag="h1">{title}</Heading>
        <Paragraph>
          {content}
        </Paragraph>
        <Button center onClick={onBackHome} rank={RANK.PRIMARY}>
          {buttonText}
        </Button>
      </Wrapper>
    </Container>
  );
}

export default ErrorPage;
