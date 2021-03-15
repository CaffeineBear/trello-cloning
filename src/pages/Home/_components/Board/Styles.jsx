const Styles = () => ({
  boardContainer: {
    display: 'flex',
    flexDirection: 'row',
    minWidth: '100vw',
    minHeight: ['-webkit-fill-available', '100vh'],
    width: '100%',
    height: '100%',
    overflowX: 'scroll',
    overflowY: 'auto',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    '-webkit-overflow-scrolling': 'touch',
  },
});
export default Styles;
