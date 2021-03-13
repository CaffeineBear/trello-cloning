import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Styles from './Styles';

const CardListWrapper = (props) => {
  const { classes, children, position } = props;
  const [marginLeft, setMarginLeft] = useState('0px');
  const [marginRight, setMarginRight] = useState('0px');
  useEffect(() => {
    switch (position) {
      case 'left-most':
        setMarginRight('4px');
        break;
      case 'right-most':
        setMarginLeft('4px');
        break;
      default:
        setMarginRight('4px');
        setMarginLeft('4px');
        break;
    }
  }, []);
  return (
    <div
      className={classes.listWrapper}
      style={{ marginLeft, marginRight, height: '100%' }}
    >
      {children}
    </div>
  );
};

CardListWrapper.propTypes = {
  position: PropTypes.string.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default withStyles(Styles)(CardListWrapper);
