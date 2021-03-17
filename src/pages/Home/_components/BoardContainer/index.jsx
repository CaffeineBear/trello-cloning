import React, { useState } from 'react';
import uuid from 'react-uuid';
import Board from '../Board';
import temporaryListData from './listArray';

const BoardContainer = () => {
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

  const moveItem = (source, destination) => {
    updateListArray((oldList) => {
      const newList = oldList;
      const sourceDroppableIndex = oldList.findIndex(
        (itemList) => itemList.id === source.droppableId,
      );
      const destinationDroppableIndex = oldList.findIndex(
        (itemList) => itemList.id === destination.droppableId,
      );
      const oldSourceItem = oldList[sourceDroppableIndex].cardItems[source.index];

      // Removing source item and inserting in destination.
      const sourceCardItems = newList[sourceDroppableIndex].cardItems;
      const destinationCardItems = newList[destinationDroppableIndex].cardItems;
      sourceCardItems.splice(source.index, 1);
      destinationCardItems.splice(destination.index, 0, oldSourceItem);
      return newList;
    });
  };

  const onDragEnd = (({ source, destination }) => {
    if (source.droppableId === 'board' || destination.droppableId === 'board') {
      return;
    }
    // Outside the droppable.
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      reorderItem(source.index, destination.index, source.droppableId);
    } else {
      moveItem(source, destination);
    }
  });

  const addNewList = (payload) => {
    updateListArray((oldList) => {
      const newList = [
        ...oldList,
        {
          title: payload.title,
          id: uuid(),
          cardItems: [],
        },
      ];
      return newList;
    });
  };

  const handleOnClick = (type, payload) => {
    switch (type) {
      case 'AddList':
        addNewList(payload);
        break;
      default:
        break;
    }
  };

  return (
    <Board listArray={listArray} onDragEnd={onDragEnd} onClick={handleOnClick} />
  );
};

export default BoardContainer;
