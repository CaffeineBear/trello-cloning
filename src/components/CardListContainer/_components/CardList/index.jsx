/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardActions, withStyles, Typography,
} from '@material-ui/core';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import ItemAdder from 'components/ListAdder';
import Styles from './Styles';
import HoveredListItem from '../HoveredListItem';

const CardList = (props) => {
  const {
    classes, title, droppableId, items, onClick: handleOnClick,
  } = props;

  return (
    <Card className={classes.cardlistContainer}>
      <CardContent className={classes.cardlistContents}>
        <Typography className={classes.cardTitle} variant="subtitle1" gutterBottom>
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
        <ItemAdder
          listStates={{
            entryPlaceholder: 'Enter a title for this card...',
            containerOverridingProps: {
              style: {
                boxShadow: 'none',
              },
            },
            entryOverridingProps: {
              multiline: true,
              rows: 3,
            },
          }}
          submittingStates={{
            submitButtonText: 'Add new item',
            onSubmit: (newTitle) => { handleOnClick('AddItem', newTitle); },
            submitButtonOverridingProps: null,
          }}
          togglerStates={{
            togglerButtonText: 'Add a card',
            togglerButtonOverridingProps: null,
          }}
        />
      </CardActions>
    </Card>
  );
};

CardList.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  droppableId: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  onClick: PropTypes.func.isRequired,
};

CardList.defaultProps = {
  title: 'TODO',
  items: null,
};

export default withStyles(Styles)(CardList);
