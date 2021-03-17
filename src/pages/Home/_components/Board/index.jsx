import React, { useState } from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import {
  withStyles, Button,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { DragDropContext } from 'react-beautiful-dnd';
import CardList from 'components/CardList';
import CardListWrapper from '../CardListWrapper';
import Styles from './Styles';
import temporaryListData from './listArray';

const Board = (props) => {
  const { classes } = props;
  const [listArray, updateListArray] = useState(temporaryListData);
  const reorderItem = (sourceIndex, destinationIndex, changedListId) => {
    updateListArray((oldList) => {
      const newList = oldList;
      const foundIndex = oldList.findIndex((itemList) => itemList.id === changedListId);
      const sourceItem = oldList[foundIndex].cardItems[sourceIndex];
      newList[foundIndex].cardItems[sourceIndex] = oldList[foundIndex].cardItems[destinationIndex];
      newList[foundIndex].cardItems[destinationIndex] = sourceItem;
      return newList;
    });
  };

  const onDragEnd = (({ source, destination }) => {
    // Outside the droppable.
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      reorderItem(source.index, destination.index, source.droppableId);
    }
  });

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.boardContainer}>
        {listArray.map(({ id, title, cardItems }, index) => {
          let position = 'left-most';
          if (index > 0) {
            position = 'middle';
          } else if (index === listArray.length - 1) {
            position = 'right-most';
          }
          return (
            <CardListWrapper position={position} key={`clw-${uuid()}`}>
              <CardList title={title} items={cardItems} droppableId={id} />
            </CardListWrapper>
          );
        })}
        <CardListWrapper position="right-most" key={`clw-${uuid()}`}>
          <Button
            className={classes.addListButton}
            fullWidth
            style={{ justifyContent: 'flex-start' }}
            startIcon={<AddIcon />}
          >
            {listArray.length ? 'Add another list' : 'Add a new list'}
          </Button>
        </CardListWrapper>
      </div>
    </DragDropContext>
  );
};

Board.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(Styles)(Board);
