import React from 'react';
import { withStyles, Container } from '@material-ui/core';
import Styles from './Styles';
import PlainBackground from '../../components/backgrounds/Plain';

const Home = () => {
  const message = 'hello';
  return (
    <PlainBackground>
      <Container>
        <p>{message}</p>
      </Container>
    </PlainBackground>
  );
};

export default withStyles(Styles)(Home);
