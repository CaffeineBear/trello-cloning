const Styles = () => ({
  cardlistContainer: {
    backgroundColor: 'rgb(220, 220, 220)',
    width: '272px',
    minWidth: '272px',
    display: 'inline-block',
  },
  cardlistContents: {
    paddingBottom: 0,
  },
  cardList: {
    marginTop: '8px',
    marginBottom: '8px',
    backgroundColor: 'white',
    borderRadius: '3px',
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
