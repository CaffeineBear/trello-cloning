import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Styles from './Styles';

const PlainBackground = (props) => {
  const { color, children, classes } = props;
  return (
    <div className={classes.backgroundDiv} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};

PlainBackground.propTypes = {
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

PlainBackground.defaultProps = {
  color: 'rgb(0, 121, 191)',
  children: null,
};

export default withStyles(Styles)(PlainBackground);
