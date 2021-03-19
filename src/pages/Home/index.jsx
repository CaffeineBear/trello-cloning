import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Typography } from '@material-ui/core';
import PlainBackground from '../../components/backgrounds/Plain';
import BoardContainer from './_components/BoardContainer';
import Styles from './Styles';

const Home = (props) => {
  const { classes } = props;
  return (
    <PlainBackground>
      <AppBar position="static" className={classes.homeHeader}>
        <Typography variant="h6" style={{ marginLeft: '30px' }}>
          Trello Cloning
        </Typography>
      </AppBar>
      <div className={classes.boardWrapper}>
        <BoardContainer />
      </div>
    </PlainBackground>
  );
};

Home.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(Styles)(Home);
