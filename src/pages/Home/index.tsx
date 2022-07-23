import React from 'react';
import { useNavigate } from "react-router-dom";
import { INTRODUCTION_PAGE_URL } from '../../constants/urls';
import { RANK } from 'src/constants';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import Wrapper from '../../components/Wrapper';

import styles from './styles.module.scss';


function HomePage(): JSX.Element {
  const navigate = useNavigate();
  const onStart = () => navigate(INTRODUCTION_PAGE_URL);

  return (
    <Container className={styles.container} center>
      <Wrapper>
        <Heading bold tag="h1">Hello There!</Heading>
        <Paragraph>
          Let's buy some insurance. It is going to take only a few steps
        </Paragraph>
        <Button center onClick={onStart} rank={RANK.PRIMARY}>
          Start
        </Button>
      </Wrapper>
    </Container>
  );
}

export default HomePage;
