import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import Map from "../map-component/Map";
import Icon from "@material-ui/core/Icon";
import * as drawerStyles from "../../variables/styles";
import Filter from "../filter-component/Filter";

class Layout extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  filterVenueList = query => {
    this.props.filterVenueList(query);
  };

  handleButtonClick = e => {
    const venueId = e.currentTarget.dataset.key;
    this.props.getVenueId(venueId);
  };
  render() {
    const { classes, theme, venues, getVenueId } = this.props;

    const drawer = (
      <div>
        <Filter filterVenueList={this.filterVenueList} />
        {venues.map((venue) => {
          return (
            <Fragment key={venue.foursquareId}>
              <List className={classes.listItem}>
                <Button
                  className={classes.listButton}
                  onClick={this.handleButtonClick}
                  data-key={venue.foursquareId}
                >
                  {venue.name}
                </Button>
              </List>
              <Divider />
            </Fragment>
          );
        })}
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <Icon>menu</Icon>
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Discover Warsaw
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <Map venues={venues} getVenueId={getVenueId} />
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(drawerStyles.styles, { withTheme: true })(Layout);
