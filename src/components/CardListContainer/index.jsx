/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardActions, Button, withStyles, Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Styles from './Styles';
import HoveredListItem from './_components/HoveredListItem';

const CardListContainer = (props) => {
  const {
    classes, title, droppableId, items,
  } = props;

  return (
    <Card className={classes.cardlistContainer}>
      <CardContent className={classes.cardlistContents}>
        <Typography variant="subtitle1">
          <b>{title}</b>
        </Typography>
        <Droppable droppableId={droppableId}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              className={classes.cardList}
              ref={provided.innerRef}
            >
              {items && items.map((currItem, index) => (
                <Draggable key={currItem.id} draggableId={currItem.id} index={index}>
                  {(provided2, snapshot2) => (
                    <div
                      ref={provided2.innerRef}
                      {...provided2.draggableProps}
                      {...provided2.dragHandleProps}
                    >
                      <HoveredListItem
                        isDragging={snapshot2.isDragging}
                        isLastItem={index === items.length - 1}
                      >
                        {currItem.title}
                      </HoveredListItem>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </CardContent>
      <CardActions className={classes.buttonContainer}>
        <Button
          className={classes.addCardButton}
          variant="text"
          startIcon={<AddIcon />}
        >
          {/* Todo: if one item -> 'Add a card' instead */}
          Add another card
        </Button>
      </CardActions>
    </Card>
  );
};

CardListContainer.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  droppableId: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

CardListContainer.defaultProps = {
  title: 'TODO',
  items: null,
};

export default withStyles(Styles)(CardListContainer);