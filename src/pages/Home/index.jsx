import React from 'react';
import PlainBackground from '../../components/backgrounds/Plain';
import BoardContainer from './_components/BoardContainer';

const Home = () => {
  const message = 'Trello Cloning';
  return (
    <PlainBackground>
      {message}
      <BoardContainer />
    </PlainBackground>
  );
};

export default Home;
