const Styles = (theme) => ({
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
