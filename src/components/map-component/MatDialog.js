import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
// import PersonIcon from '@material-ui/icons/Person';
// import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

const styles = {

};

class SimpleDialog extends React.Component {
    handleClose = () => {
      this.props.onClose(this.props.selectedValue);
    };
  
    render() {
      const { classes, onClose, selectedValue, venueData, ...other } = this.props;
  
      return (
        <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
          <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
          <div>{venueData}</div>
          <div>
            <List>
            </List>
          </div>
        </Dialog>
      );
    }
  }
  
  SimpleDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    selectedValue: PropTypes.string,
  };
  
  const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);
  
  class MatDialog extends React.Component {
    state = {
      open: false,
      venueData: ''
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
  