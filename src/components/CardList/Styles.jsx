const Styles = (theme) => ({
  cardlistContainer: {
    backgroundColor: 'rgb(220, 220, 220)',
    width: '272px',
    minWidth: '272px',
    display: 'inline-block',
  },
  cardlistContents: {
    paddingBottom: 0,
  },
  card: {
    backgroundColor: 'white',
    marginBottom: theme.spacing(1),
    borderRadius: '3px',
    '&:hover': {
      backgroundColor: 'grey',
      color: 'white',
    },
  },
});
export default Styles;
