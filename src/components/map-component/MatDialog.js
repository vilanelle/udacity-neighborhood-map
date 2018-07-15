import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
// import PersonIcon from '@material-ui/icons/Person';
// import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

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
          <DialogTitle id="simple-dialog-title">
          <img src='./mapMarker.png' width='100px' height='100px'/>
          {JSON.stringify(venueData)}
            {/* <img alt={`${venueData.name}`} src={venueData.photoUrl && venueData.photoUrl}/>
            {venueData.name && venueData.name} */}
          </DialogTitle>
          {/* <div>{venueData.address && `Address: ${venueData.address}`}</div>
          <div>{venueData.website && `Website: ${venueData.website}`}</div>
          <div>{venueData.moreDetails && `More: ${venueData.moreDetails}`}</div>  */}
          <div>
            <List>
            </List>
          </div>
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
  
  const SimpleDialogWrapped = SimpleDialog;
  
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
  