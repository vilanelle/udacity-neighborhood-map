import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Map.css";
import { mapContainerStyle } from "../../variables";
import { Marker } from "../marker/Marker";

class Map extends Component {
  map;
  markers;

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
        zoom: 12,
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
    const { venues, getVenueId } = this.props;

    // loop creating DOM elements for markers
    venues.forEach(venue => {
      const marker = new Marker(venue, getVenueId);
      map.addObject(marker.getDomMarker());
    });
    this.markers = map.getObjects();
  };

  removeMarkers = () => {
    if (this.markers && this.markers.length > 0) {
      this.markers.forEach(m => this.map.removeObject(m));
    }
  };

  componentDidMount() {
    this.loadMap(this.props.displayMapOnLoad);
    this.addMarkers(this.map);
  }

  componentDidUpdate(prevProps) {
    this.removeMarkers();
    this.addMarkers(this.map);
  }

  render() {
    return <div id="mapContainer" style={mapContainerStyle} />
  }
}

Map.propTypes = {
  venues: PropTypes.array,
  getVenueId: PropTypes.func
};

export default Map;
