// Map styles
export const mapContainerStyle = {
    height: '100%',
    width: '100%'
}

// Drawer styles
const drawerWidth = 220;

export const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 99,
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  listItem: {
    padding: 0,
  },
  listButton: {
    width: '100%',
    padding: '10px',
    justifyContent: 'flex-start'
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});