import React, { Component } from "react";
import "./App.css";
import MatDialog from "./components/dialog-component/MatDialog";
import * as Api from "./helpers/api/foursquareApiFunctions";
import Layout from './components/layout-component/Layout';

// TODOs:
// - check if png marker possible to animate
// - refactor drawer into layout and drawer
// - move venues to ./Constants
const initialVenues = [
    {
      name: "Copernicus Center",
      foursquareId: "4be577d1d4f7c9b6d3662520",
      lat: 52.2419,
      lng: 21.0287
    },
    {
      name: "Zoo Market",
      foursquareId: "5752ab6c498eb5968ed684fe",
      lat: 52.2538,
      lng: 21.0319
    },
    {
      name: "Skaryszewski Park",
      foursquareId: "4baf4453f964a5207af43be3",
      lat: 52.243,
      lng: 21.0561
    },
    {
      name: "Cud nad Wisłą",
      foursquareId: "518f8080498e9e76fac5a0af",
      lat: 52.2285,
      lng: 21.0435
    },
    {
      name: "Night Market",
      foursquareId: "5751c902498ecf01822b6dce",
      lat: 52.2254,
      lng: 20.9827
    }
  ];

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
