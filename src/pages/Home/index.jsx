import React from 'react';
import PlainBackground from '../../components/backgrounds/Plain';
import Board from './_components/Board';

const Home = () => {
  const message = 'Trello Cloning';
  return (
    <PlainBackground>
      {message}
      <Board />
    </PlainBackground>
  );
};

export default Home;
