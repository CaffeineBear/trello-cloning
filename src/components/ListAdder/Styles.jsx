const Styles = (theme) => ({
  listAdderContainer: {
    backgroundColor: 'rgb(220, 220, 220)',
    width: '272px',
    minWidth: '272px',
    display: 'inline-block',
  },
  enteringFieldContainer: {
    paddingBottom: '0px',
  },
  enteringField: {
    backgroundColor: 'white',
  },
  addListButton: {
    width: '272px',
    background: 'rgb(220, 220, 220)',
    padding: '8px 16px 8px 16px ',
    textTransform: 'none',
    textAlign: 'left',
    '&:hover': {
      backgroundColor: 'grey',
      color: 'white',
    },
  },
  listButtonContainer: {
    padding: '8px 16px 8px 16px',
  },
  submitButton: {
    textTransform: 'none',
    color: 'white',
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.light,
    },
  },
});
export default Styles;
