export class Marker {
  domMarker;
  getVenueId;

  constructor(venue, getVenueId) {
    this.createMarker(venue);
    this.getVenueId = getVenueId;
  }
 
  createMarker = venue => {
    // create dom elements for map marker
    const wrapper = document.createElement("div");
    wrapper.dataset.venueId = venue.foursquareId;
    wrapper.style.position = 'relative';
    wrapper.style.left = '-20px';
    wrapper.style.top = '-20px';
    wrapper.id = venue.foursquareId;

    const markerElement = document.createElement("img");
    markerElement.src = "loc_icon.png";
    markerElement.style.width = '25px';
    markerElement.style.height = '25px';
    markerElement.className = "pin";
    markerElement.alt = `${venue.name}`;

    const caption = document.createElement('div');
    caption.textContent = venue.name;
    caption.style.fontSize = '1rem'
    caption.style.fontWeight = 800;
    
    // add marker and caption to wrapper div
    wrapper.appendChild(markerElement);
    wrapper.appendChild(caption);
    
    // create icon for the marker and add event listener for animation
    const icon = new window.H.map.DomIcon(wrapper);

    const { lat, lng } = venue;
    // set marker coordinates & icon
    this.domMarker = new window.H.map.DomMarker({ lat, lng }, { icon: icon });
    this.domMarker.addEventListener("tap", this.handleMarkerClick);
  };

  
  handleMarkerClick = e => {
    const elementClicked = e.target.icon.i;
    const venueId = elementClicked.dataset.venueId;
    this.getVenueId(venueId)
  };

  getDomMarker = () => this.domMarker;
}
