import React, { Component } from "react";
import "./App.css";
import MatDialog from "./components/dialog-component/MatDialog";
import * as Api from "./helpers/api/foursquareApiFunctions";
import Layout from './components/layout-component/Layout';
import * as CONST from './variables/constants'; 
// TODOs:
// - REMOVE API KEY!!!!!!!!!!!!!!!!!!!
// - add loader/error handling for map load
// - update markers on scroll to maintain position
// - refactor drawer into layout and drawer

const initialVenues = CONST.initialVenues;

class App extends Component {
  state = {
    venues: initialVenues,
    usingMobile: false,
    dialogData: ""
  };

  checkUserDevice = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.setState({ usingMobile: true });
    }
  };

  getVenueId = id => {
    this.setState(
      state => ({ ...state, dialogData: id }),
      this.getVenueDetails
    );
  };

  getVenueDetails = () => {
    return Api.getVenueDetails(this.state.dialogData)
      .then((data) => {
       if(data) {
        this.openMarkerDialog(data)
       } else {
         this.openMarkerDialog({name: 'A network error has occurred :('})
       }
      })
      .catch(err => console.log(err));
  };

  openMarkerDialog = details => {
    this.refs.dialog.handleClickOpen(details);
  };

  filterVenueList = query => {
    if(!query) {
      this.setState(state => ({...state, venues: initialVenues}));
    } else {
      const filteredVenues = initialVenues.filter(venue => venue.name.toLowerCase().includes(query.toLowerCase()));
      this.setState(state => ({...state, venues: filteredVenues}));
    }
  }

  componentDidMount() {
    this.checkUserDevice();
  }
  
  render() {
    return (
      <div className="App">
        <Layout 
          venues={this.state.venues} 
          getVenueId={this.getVenueId} 
          filterVenueList={this.filterVenueList} />
        <MatDialog ref="dialog" />
      </div>
    );
  }
}

export default App;
