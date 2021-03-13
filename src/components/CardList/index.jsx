import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardActions, Button, withStyles, Typography,
  List,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Styles from './Styles';
import HoveredListItem from './_components/HoveredListItem';

const CardList = (props) => {
  const { classes, title } = props;
  return (
    <Card className={classes.cardlistContainer}>
      <CardContent className={classes.cardlistContents}>
        <Typography variant="subtitle">
          <b>{title}</b>
        </Typography>
        <List className={classes.cardlist}>
          <HoveredListItem>
            Hello
          </HoveredListItem>
        </List>
      </CardContent>
      <CardActions>
        <Button variant="text" startIcon={<AddIcon />}>
          {/* Todo: if one item -> 'Add a card' instead */}
          Add another card
        </Button>
      </CardActions>
    </Card>
  );
};

CardList.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

CardList.defaultProps = {
  title: 'TODO',
};

export default withStyles(Styles)(CardList);
