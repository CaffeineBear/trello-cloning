import React from 'react';
import PropTypes from 'prop-types';
import CardList from './_components/CardList';

const CardListContainer = (props) => {
  const {
    cardId, title, droppableId, items, addNewItem,
  } = props;

  const handleOnClick = (type, payload) => {
    switch (type) {
      case 'AddItem':
        addNewItem(cardId, payload.title);
        break;

      default:
        break;
    }
  };

  return (
    <CardList title={title} droppableId={droppableId} items={items} onClick={handleOnClick} />
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
};

CardListContainer.defaultProps = {
  items: null,
};

export default CardListContainer;
