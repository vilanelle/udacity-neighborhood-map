import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Map.css";
import { mapContainerStyle } from "../../variables";
import { Marker } from './Marker';
import { timingSafeEqual } from "crypto";

class Map extends Component {
  map;
  markers = [];

  loadMap = () => {
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
    const { venues,  getVenueId } = this.props;

    // loop creating DOM elements for markers
    venues.forEach(venue => {
      const marker = new Marker(venue, getVenueId);
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
    return(
      <div id="mapContainer" style={mapContainerStyle} />
    )
  }
}

Map.propTypes = {
  venues: PropTypes.array,
  getVenueId: PropTypes.func
};

export default Map;
