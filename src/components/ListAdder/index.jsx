/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react';
import uuid from 'react-uuid';
import {
  Card, CardContent, Button, TextField, withStyles, CardActions,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Styles from './Styles';

const ListAdder = (props) => {
  const {
    classes,
    listEntryStates: {
      entryPlaceholder,
    },
    submittingStates: {
      submitButtonText,
      onSubmit: handleOnSubmit,
      submitButtonOverridingProps,
    },
    togglerStates: {
      togglerButtonText,
      togglerButtonOverridingProps,
    },
  } = props;

  const [newListString, updateListEntry] = useState('');
  const [isEnteringList, toggleEnteringList] = useState(false);
  const submitButtonRef = useRef();

  const handleOnChange = (event) => {
    const newStringValue = event.target.value;
    updateListEntry(newStringValue);
  };

  const submitNewListTitle = () => {
    toggleEnteringList(false);
    // If it was empty string, dont submit.
    if (newListString === '') {
      return;
    }
    handleOnSubmit(newListString);
    updateListEntry('');
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
              value={newListString}
              id={uuid()}
              type="text"
              variant="outlined"
              onChange={(e) => handleOnChange(e)}
              onBlur={(e) => handleOnBlur(e)}
              onKeyDown={(e) => handleOnKeyDown(e)}
              autoFocus
              size="small"
              margin="dense"
              placeholder={entryPlaceholder}
            />
          </CardContent>
          <CardActions className={classes.listButtonContainer}>
            <Button
              className={classes.submitButton}
              onClick={() => { handleOnClick('submit'); }}
              ref={submitButtonRef}
              {...submitButtonOverridingProps}
            >
              {submitButtonText}
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
          {...togglerButtonOverridingProps}
        >
          {togglerButtonText}
        </Button>
      )}
    </>
  );
};

ListAdder.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  listEntryStates: PropTypes.shape({
    entryPlaceholder: PropTypes.string,
  }).isRequired,
  submittingStates: PropTypes.shape({
    submitButtonText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    submitButtonOverridingProps: PropTypes.arrayOf(PropTypes.any),
  }).isRequired,
  togglerStates: PropTypes.shape({
    togglerButtonText: PropTypes.string.isRequired,
    togglerButtonOverridingProps: PropTypes.arrayOf(PropTypes.any),
  }).isRequired,
};

export default withStyles(Styles)(ListAdder);
