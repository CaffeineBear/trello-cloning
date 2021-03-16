import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
} from '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd';
import CardList from 'components/CardList';
import CardListWrapper from '../CardListWrapper';
import Styles from './Styles';

const Board = (props) => {
  const { classes } = props;
  const listArray = [
    {
      title: 'List1',
      cardItems: [
        {
          title: 'Hello',
        },
        {
          title: 'Hello',
        },
        {
          title: 'Hello',
        },
        {
          title: 'Hello',
        },
      ],
    },
    {
      title: 'List2',
      cardItems: [
        {
          title: 'Hello',
        },
        {
          title: 'Hello',
        },
        {
          title: 'Hello',
        },
        {
          title: 'Hello',
        },
      ],
    },
    {
      title: 'List3',
      cardItems: [
        {
          title: 'Hello',
        },
        {
          title: 'Hello',
        },
        {
          title: 'Hello',
        },
        {
          title: 'Hello',
        },
      ],
    },
    {
      title: 'List4',
      cardItems: [
        {
          title: 'Hello',
        },
        {
          title: 'Hello',
        },
        {
          title: 'Hello',
        },
        {
          title: 'Hello',
        },
      ],
    },
  ];
  const onDragEnd = useCallback(() => {});

  return (
    <div className={classes.boardContainer}>
      {listArray.map(({ title, cardItems }, index) => {
        let position = 'left-most';
        if (index > 0) {
          position = 'middle';
        } else if (index < listArray.length) {
          position = 'right-most';
        }
        return (
          <DragDropContext onDragEnd={onDragEnd}>
            <CardListWrapper position={position}>
              <CardList title={title} items={cardItems} />
            </CardListWrapper>
          </DragDropContext>
        );
      })}
    </div>
  );
};

Board.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(Styles)(Board);
