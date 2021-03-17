import React, { useCallback, useState } from 'react';
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
  const [listArray] = useState(temporaryListData);
  const onDragEnd = useCallback(() => {
    // console.log(result);
  });

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.boardContainer}>
        {listArray.map(({ title, cardItems }, index) => {
          let position = 'left-most';
          if (index > 0) {
            position = 'middle';
          } else if (index === listArray.length - 1) {
            position = 'right-most';
          }
          return (
            <CardListWrapper position={position} key={`clw-${uuid()}`}>
              <CardList title={title} items={cardItems} />
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
