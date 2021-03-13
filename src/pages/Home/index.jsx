import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
} from '@material-ui/core';
import Styles from './Styles';
import CardList from '../../components/CardList';
import CardListWrapper from './_components/CardListWrapper';
import PlainBackground from '../../components/backgrounds/Plain';

const Home = (props) => {
  const message = 'Trello Cloning';
  const { classes } = props;
  return (
    <PlainBackground>
      {message}
      <div className={classes.listContainer}>
        <CardListWrapper position="left-most">
          <CardList />
        </CardListWrapper>
        <CardListWrapper position="middle">
          <CardList />
        </CardListWrapper>
        <CardListWrapper position="middle">
          <CardList />
        </CardListWrapper>
        <CardListWrapper position="middle">
          <CardList />
        </CardListWrapper>
        <CardListWrapper position="right-most">
          <CardList />
        </CardListWrapper>
      </div>
    </PlainBackground>
  );
};

Home.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(Styles)(Home);
