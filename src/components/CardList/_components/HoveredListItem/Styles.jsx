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
  ellipsisText: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
});
export default Styles;
