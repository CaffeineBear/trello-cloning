import React from 'react';
import PropTypes from 'prop-types';
import CardList from './_components/CardList';

const CardListContainer = (props) => {
  const {
    cardId, title, droppableId, items, addNewItem, dragHandleProps,
  } = props;

  const handleOnClick = (type, payload) => {
    switch (type) {
      case 'AddItem':
        addNewItem(cardId, payload);
        break;
      default:
        break;
    }
  };

  return (
    <CardList
      title={title}
      droppableId={droppableId}
      items={items}
      onClick={handleOnClick}
      headerDraggerProps={dragHandleProps}
    />
  );
};

CardListContainer.propTypes = {
  cardId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  droppableId: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  addNewItem: PropTypes.func.isRequired,
  dragHandleProps: PropTypes.objectOf(PropTypes.any),
};

CardListContainer.defaultProps = {
  items: null,
  dragHandleProps: null,
};

export default CardListContainer;
