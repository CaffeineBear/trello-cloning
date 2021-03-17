import React from 'react';
import { withStyles, ListItem, Grid } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import Styles from './Styles';

import useHover from '../../../../hooks/hover';

const HoveredListItem = (props) => {
  const {
    children, classes, isDragging, isLastItem,
  } = props;
  const [hoverRef, isHovered] = useHover();
  return (
    <>
      <ListItem
        ref={hoverRef}
        className={classes.card}
        style={{
          backgroundColor: (isDragging || isHovered) ? 'gray' : 'white',
          color: (isDragging || isHovered) ? 'white' : 'inherit',
          transform: isDragging ? 'rotate(3deg)' : null,
          marginBottom: isLastItem ? '0px' : null,
        }}
      >
        <Grid container direction="row" justify="space-between">
          <Grid item xs={10} className={classes.ellipsisText}>
            {children}
          </Grid>
          { isHovered
            ? (
              <Grid item>
                <EditIcon fontSize="inherit" />
              </Grid>
            ) : null }
        </Grid>
      </ListItem>
    </>
  );
};

HoveredListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  isDragging: PropTypes.bool,
  isLastItem: PropTypes.bool,
};

HoveredListItem.defaultProps = {
  children: null,
  isDragging: false,
  isLastItem: false,
};

export default withStyles(Styles)(HoveredListItem);
