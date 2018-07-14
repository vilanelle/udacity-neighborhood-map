import React, { Component } from 'react';
import './App.css';
import Map from './components/map-component/Map';
import MatDialog from './components/map-component/MatDialog';
import * as Api from "./helpers/api/foursquareApiFunctions";

class App extends Component {
  state = {
    venues: [
      {name: 'Copernicus Center', foursquareId: '4be577d1d4f7c9b6d3662520', lat: 52.2419, lng: 21.0287},
      {name: 'Zoo Market', foursquareId: '5752ab6c498eb5968ed684fe', lat: 52.2538, lng: 21.0319 },
      {name: 'Skaryszewski Park', foursquareId: '4baf4453f964a5207af43be3', lat: 52.2430, lng: 21.0561 },
      {name: 'Cud nad Wisłą', foursquareId: '518f8080498e9e76fac5a0af', lat: 52.2285, lng: 21.0435 },
      {name: 'Night Market', foursquareId: '5751c902498ecf01822b6dce', lat: 52.2254, lng: 20.9827}
    ],
    usingMobile: false,
    dialogData: ''
  }
  
  checkUserDevice = () => {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.setState( {usingMobile: true} );
     }
  }
  
  getVenueId = (id) => {
    console.log('venue id: ', id)
    this.setState(state => ({...state, dialogData: id}), this.openMarkerDialog(this.state.dialogData));
  }

  openMarkerDialog = (id) => {
    this.refs.dialog.handleClickOpen(id);
  }

  componentDidMount() {
    this.checkUserDevice();
  }

  render() {
    return (
      <div className="App">
        <Map 
          venues={this.state.venues}
          getVenueId={this.getVenueId}
        />
        <MatDialog ref="dialog"/>
      </div>
    );
  }
}

export default App;
