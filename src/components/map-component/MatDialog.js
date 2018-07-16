import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Slide from '@material-ui/core/Slide';
import './Map.css';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const dialogHeaderTheme = createMuiTheme({
  typography: {
    fontSize: 16,
    fontWeight: 800
  },
});

const styles = theme => ({
	listItem: {
    padding: '0.3rem 1.5rem'
  },
  avatar: {
    float: 'left',
    marginRight: '1rem'
  }
});


class SimpleDialog extends React.Component {
    handleClose = () => {
      this.props.onClose(this.props.selectedValue);
    };
  
    render() {
      const { classes, onClose, selectedValue, venueData, ...other } = this.props;
      
      return (
        <Dialog 
          onClose={this.handleClose} 
          TransitionComponent={Transition}
          aria-labelledby="simple-dialog-title" 
          {...other}
          PaperProps={{
            style: {
              backgroundColor: 'white',
              width: '90%',
            },
          }}
        >
        
        {/* <List>
        <MuiThemeProvider theme={dialogHeaderTheme}>
          <ListItem className={classes.listItem}>
            <Avatar src='cud.jpg'></Avatar>
            <ListItemText primary={venueData.title} />
          </ListItem>
        </MuiThemeProvider>
          <ListItem className={classes.listItem}>
          <ListItemText  primary={venueData.title} />
          </ListItem>
          <ListItem className={classes.listItem}>
          <ListItemText primary={venueData.title} />
          </ListItem>
        </List>
         */}
          <List >
          <MuiThemeProvider theme={dialogHeaderTheme}>
            <DialogTitle className={classes.dialogTitle}>
              <Avatar className={classes.avatar} src={venueData.photoUrl && venueData.photoUrl} alt={venueData.name && venueData.name}></Avatar>
              {venueData.name}
              {/* {venueData.name && <ListItemText primary={venueData.name}/>}  <--- this is looks nice, but probably should use dialog title..*/}
            </DialogTitle>
          </MuiThemeProvider>
     
            {venueData.address && <ListItem className={classes.listItem}>
              <ListItemText primary={`Address: ${venueData.address}`}/>
            </ListItem>}
            {venueData.website && <ListItem component="a" href={venueData.website} className={classes.listItem}>
              <ListItemText primary={`Website: ${venueData.website}`}/>
            </ListItem>}
            {venueData.moreDetails && <ListItem component="a" href={venueData.moreDetails} className={classes.listItem}>
              <ListItemText primary={`Click to learn more...`}/>
            </ListItem>}
          </List>
          <DialogActions>
            <Button 
              onClick={this.handleClose}
            >Close</Button>
          </DialogActions>
        </Dialog>
      );
    }
  }
  
  SimpleDialog.propTypes = {
    onClose: PropTypes.func,
    selectedValue: PropTypes.string,
  };
  
  const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);
  
  class MatDialog extends React.Component {
    state = {
      open: false,
      venueData: {}
    };
  
    handleClickOpen = (data) => {
      this.setState({
        open: true,
        venueData: data
      });
    };
  
    handleClose = value => {
      this.setState({ open: false });
    };
  
    render() {
      return (
        <div>
          <SimpleDialogWrapped
            open={this.state.open}
            onClose={this.handleClose}
            venueData={this.state.venueData}
          />
        </div>
      );
    }
  }
  
  export default MatDialog;
  