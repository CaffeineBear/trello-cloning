import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
} from '@material-ui/core';
import CardList from 'components/CardList';
import CardListWrapper from '../CardListWrapper';
import Styles from './Styles';

const Board = (props) => {
  const { classes } = props;
  return (
    <div className={classes.boardContainer}>
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
  );
};

Board.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(Styles)(Board);
