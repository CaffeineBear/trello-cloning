import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardActions, Button, withStyles, Typography,
  List,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Droppable } from 'react-beautiful-dnd';
import uuid from 'react-uuid';
import Styles from './Styles';
import HoveredListItem from './_components/HoveredListItem';

const CardList = (props) => {
  const { classes, title, items } = props;
  return (
    <Card className={classes.cardlistContainer}>
      <CardContent className={classes.cardlistContents}>
        <Typography variant="subtitle">
          <b>{title}</b>
        </Typography>
        <Droppable droppableId={uuid()}>
          {(provided) => (
            <List className={classes.cardlist} ref={provided.innerRef}>
              {items && items.map((currList) => (
                <HoveredListItem key={`hoveredlistitem-${uuid()}`}>
                  {currList.title}
                </HoveredListItem>
              ))}
            </List>
          )}
        </Droppable>
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
  items: PropTypes.objectOf(PropTypes.object),
};

CardList.defaultProps = {
  title: 'TODO',
  items: null,
};

export default withStyles(Styles)(CardList);
