import React, { Component } from 'react';
import './Map.css';
import { 
  mapContainerStyle
 } from './variables/index.js';

class MainMap extends Component {
  map;

  // add map
  loadMap = () => {
    const platform = new window.H.service.Platform({
      'app_id': 'KtfSRNjpHszyGuJKbvI7',
      'app_code': '8jAXhLQ2CDItBfi76Hkxyw'
  });
  // obtain the default map types from the platform object:
     const defaultLayers = platform.createDefaultLayers();
  // instantiate (and display) a map object:
    const map = new window.H.Map(
      document.getElementById('mapContainer'),
      defaultLayers.normal.map,
      {
          zoom: 10,
          center: { lat: 52.5, lng: 21.4 }
      });
      this.map = map;
      // add map events
      const behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(this.map));
      const ui = window.H.ui.UI.createDefault(this.map, defaultLayers);
  }

  // add marker to map
  addMarker = (map) => {
    // This awesome svg has been made for your viewing pleasure by Bryn Taylor; https://dribbble.com/bryntaylor
    //TODO needs attribution
    // const svgMarker = `<svg class="marker" viewBox="0 0 20 20"><path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path></svg>`;

    const domElement = document.createElement("div");
    domElement.className = 'pin';
    const icon = new window.H.map.DomIcon(domElement),
    coords = {  lat: 52.5, lng: 21.4  },
    marker = new window.H.map.DomMarker(coords, {icon: icon});

    // Add the marker to the map:
    map.addObject(marker);
    
  }
      
 
  componentDidMount(){
    this.loadMap();
    this.addMarker(this.map);
  }
    render(){
  
      return (
        <div id="mapContainer" style={mapContainerStyle} ></div>
      )
    }
  }
  
export default MainMap;