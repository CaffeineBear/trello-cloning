/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import {
  withStyles,
} from '@material-ui/core';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CardList from 'components/CardListContainer/';
import ListAdder from 'components/ListAdder';
import CardListWrapper from '../CardListWrapper';
import Styles from './Styles';

const Board = (props) => {
  const {
    classes, listArray, onDragEnd, addNewList, addNewItem,
  } = props;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.boardContainer}>
        <Droppable droppableId="board" type="board" direction="horizontal">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                display: 'flex',
                flowDirection: 'row',
              }}
            >
              {listArray.map(({ id, title, cardItems }, index) => {
                let position = 'left-most';
                if (index > 0) {
                  position = 'middle';
                } else if (index === listArray.length - 1) {
                  position = 'right-most';
                }
                return (
                  <Draggable
                    draggableId={`listDraggable-${id}`}
                    index={index}
                    key={`listDraggable-${id}`}

                  >
                    {(provided2, snapshot2) => (
                      <div
                        ref={provided2.innerRef}
                        {...provided2.draggableProps}
                        {...provided2.dragHandleProps}
                      >
                        <CardListWrapper
                          position={position}
                          key={`clw-${uuid()}`}
                          isDragging={snapshot2.isDragging}
                        >
                          <CardList
                            cardId={id}
                            title={title}
                            items={cardItems}
                            droppableId={id}
                            addNewItem={addNewItem}
                          />
                        </CardListWrapper>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <CardListWrapper position="right-most" key="newListWrapper">
          <ListAdder
            listEntryStates={{
              entryPlaceholder: 'Enter new list name...',
            }}
            submittingStates={{
              submitButtonText: 'Add List',
              onSubmit: addNewList,
              submitButtonOverridingProps: null,
            }}
            togglerStates={{
              togglerButtonText: listArray.length ? 'Add more list' : 'Add a new list',
              togglerButtonOverridingProps: null,
            }}
          />
        </CardListWrapper>
      </div>
    </DragDropContext>
  );
};

Board.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  listArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDragEnd: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  addNewList: PropTypes.func.isRequired,
  addNewItem: PropTypes.func.isRequired,
};

export default withStyles(Styles)(Board);
