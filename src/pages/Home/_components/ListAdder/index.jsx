import React, { useRef, useState } from 'react';
import uuid from 'react-uuid';
import {
  Card, CardContent, Button, TextField, withStyles, CardActions,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Styles from './Styles';

const ListAdder = (props) => {
  const { listLength, classes, onSubmit: handleOnSubmit } = props;
  const [newListTitle, updateNewListTitle] = useState('');
  const [isEnteringList, toggleEnteringList] = useState(false);
  const submitButtonRef = useRef();

  const handleOnChange = (event) => {
    const newTitle = event.target.value;
    updateNewListTitle(newTitle);
  };

  const submitNewListTitle = () => {
    toggleEnteringList(false);
    handleOnSubmit({ title: newListTitle });
    updateNewListTitle('');
  };

  const handleOnKeyDown = (event) => {
    if (event.key === 'Enter') {
      submitNewListTitle();
    }
  };

  const handleOnBlur = (e) => {
    // if blurred target was the submit button, ignore toggling the list entering.
    if (e.relatedTarget === submitButtonRef.current) {
      return;
    }
    toggleEnteringList(false);
  };

  const handleOnClick = (type) => {
    switch (type) {
      case 'openTextField':
        toggleEnteringList(true);
        break;
      case 'submit':
        submitNewListTitle();
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
              onBlur={(e) => handleOnBlur(e)}
              onKeyDown={(e) => handleOnKeyDown(e)}
              autoFocus
              size="small"
              margin="dense"
              placeholder="Enter list title..."
            />
          </CardContent>
          <CardActions className={classes.listButtonContainer}>
            <Button
              className={classes.submitButton}
              onClick={() => { handleOnClick('submit'); }}
              ref={submitButtonRef}
            >
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
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(Styles)(ListAdder);
