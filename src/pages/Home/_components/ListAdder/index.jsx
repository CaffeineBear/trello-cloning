import React, { useState } from 'react';
import uuid from 'react-uuid';
import {
  Card, CardContent, Button, TextField, withStyles, CardActions,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Styles from './Styles';

const ListAdder = (props) => {
  const { listLength, classes } = props;
  const [newListTitle, updateNewListTitle] = useState('');
  const [isEnteringList, toggleEnteringList] = useState(false);

  const handleOnChange = (event) => {
    const newTitle = event.target.value;
    updateNewListTitle(newTitle);
  };

  const handleOnKeyDown = (event) => {
    if (event.key === 'Enter') {
      toggleEnteringList(false);
    }
  };

  const handleOnBlur = () => {
    toggleEnteringList(false);
  };

  const handleOnClick = (type) => {
    switch (type) {
      case 'openTextField':
        toggleEnteringList(true);
        break;

      default:
        break;
    }
  };

  return (
    <>
      {isEnteringList ? (
        <Card className={classes.listAdderContainer}>
          <CardContent className={classes.enteringFieldContainer}>
            <TextField
              className={classes.enteringField}
              value={newListTitle}
              id={uuid()}
              type="text"
              variant="outlined"
              onChange={(e) => handleOnChange(e)}
              onBlur={() => handleOnBlur()}
              onKeyDown={(e) => handleOnKeyDown(e)}
              autoFocus
              size="small"
              margin="dense"
              placeholder="Enter list title..."
            />
          </CardContent>
          <CardActions className={classes.listButtonContainer}>
            <Button className={classes.submitButton}>
              Add list
            </Button>
          </CardActions>
        </Card>
      ) : (
        <Button
          className={classes.addListButton}
          fullWidth
          style={{ justifyContent: 'flex-start' }}
          startIcon={<AddIcon />}
          onClick={() => { handleOnClick('openTextField'); }}
        >
          {listLength ? 'Add another list' : 'Add a new list'}
        </Button>
      )}
    </>
  );
};

ListAdder.propTypes = {
  listLength: PropTypes.number.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(Styles)(ListAdder);
