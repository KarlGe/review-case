const styles = (theme) => ({
  linkContainer: {
    flexGrow: 1,
    position: 'relative',
    textDecoration: 'none',
  },
  card: {
    height: '130px',
    boxShadow: '0 3px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    marginBottom: '30px',
    '&:last-child': {
      marginBottom: '10px',
    },
    position: 'relative',
    borderRadius: '20px',
    border: '1px solid',
    borderColor: theme.colors.mint,
  },
  imageContainer: {
    display: 'flex',
    marginRight: '26px',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageUploadButton: {
    bottom: '0',
    width: '100%',
    boxShadow: 'none',
    borderRight: '1px solid',
    borderRightColor: theme.colors.mint,
    borderRadius: 0,
    position: 'absolute',
    background: theme.palette.background.default,
    '&:hover': {
      background: theme.palette.background.default,
    },
  },
  image: {
    width: '174px',
    height: '130px',
    objectFit: 'cover',
    backgroundColor: theme.palette.primary.whiteDarker,
  },
  textContainer: {
    display: 'flex',
    padding: '20px 0',
    flexDirection: 'column',
    justifyContent: 'start',
    maxWidth: '776px',
    height: '100%',
    width: '80%',
  },
  actionsContainer: {
    top: '25px',
    right: '15px',
    marginLeft: 'auto',
    position: 'absolute',
  },
  date: {
    bottom: '2px',
    position: 'relative',
    fontWeight: 400,
    fontSize: '11px',
    color: theme.colors.greyLighter,
    marginTop: '6px',
  },
  arrowIcon: {
    left: '5px',
    width: '14px',
    height: '14px',
    position: 'relative',
    color: theme.palette.primary.main,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
  },
  eventCard: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default styles;
