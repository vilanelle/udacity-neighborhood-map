import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Map.css";
import { mapContainerStyle } from "../../variables";
import { Marker } from './Marker';
import SimpleDialogDemo from './MatDialog';

class MainMap extends Component {
  map;
  markers = [];

  loadMap = () => {
    console.log(SimpleDialogDemo)
    const platform = new window.H.service.Platform({
      app_id: "KtfSRNjpHszyGuJKbvI7",
      app_code: "8jAXhLQ2CDItBfi76Hkxyw"
    });
    // obtain the default map types from the platform object:
    const defaultLayers = platform.createDefaultLayers();
    // instantiate (and display) a map object:
    const map = new window.H.Map(
      document.getElementById("mapContainer"),
      defaultLayers.normal.map,
      {
        zoom: 13,
        center: { lat: 52.2299, lng: 21.0117 }
      }
    );
    this.map = map;

    // add map events
    const behavior = new window.H.mapevents.Behavior(
      new window.H.mapevents.MapEvents(this.map)
    );
    const ui = window.H.ui.UI.createDefault(this.map, defaultLayers);
  };

  // add marker to map
  addMarkers = map => {
    const { venues } = this.props;

    // loop creating DOM elements for markers
    venues.forEach(venue => {
      const marker = new Marker(venue);

      this.markers.push(marker.getDomMarker());
    });

    // put markers in a container and add them to map
    const container = new window.H.map.Group({
      objects: this.markers
    });
    map.addObject(container);
    
  };

  componentDidMount() {
    this.loadMap();
    this.addMarkers(this.map);
  }
  render() {
    return <div id="mapContainer" style={mapContainerStyle} />;
    <SimpleDialogDemo />
  }
}

MainMap.propTypes = {
  markers: PropTypes.array
};

export default MainMap;
