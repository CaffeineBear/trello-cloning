const Styles = () => ({
  cardlistContainer: {
    backgroundColor: 'rgb(220, 220, 220)',
    width: '272px',
    minWidth: '272px',
    display: 'inline-block',
  },
  cardTitle: {
    wordWrap: 'break-word',
    whiteSpace: 'initial',
  },
  cardlistContents: {
    paddingBottom: 0,
  },
  cardList: {
    minHeight: '1px',
  },
  buttonContainer: {
    padding: '8px 16px 8px 16px',
  },
  addCardButton: {
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'grey',
      color: 'white',
    },
  },
});
export default Styles;
