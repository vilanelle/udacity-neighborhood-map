import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        margin: '1rem 0.5rem',
    }
  });

class Filter extends Component {
    handleInputChange = (e) => {
            const query = e.target.value;
            this.props.filterVenueList(query);
    }

    render() {
        const { classes } = this.props;
        return (
            <TextField
                className={classes.root}
                onChange={this.handleInputChange} 
                label="Search locations"
            />
        )
    }
}

export default withStyles(styles)(Filter);