import { bounce, moveDown } from "../../helpers/effects";

export class Marker {
  domMarker;
  getVenueId;

  constructor(venue, getVenueId) {
    this.createMarker(venue);
    this.getVenueId = getVenueId;
  }

  createMarker = venue => {
    const domElement = document.createElement("img");
    domElement.src = "mapMarker.png";
    domElement.style.width = '25px';
    domElement.style.height = '25px';
    domElement.style.position = 'relative';
    domElement.style.left = '-25px';
    domElement.style.top = '-25px';
    domElement.className = "pin";
    domElement.textContent = venue.name;
    domElement.dataset.venueId = venue.foursquareId;
    // create icon for the marker and add event listener for animation
    const icon = new window.H.map.DomIcon(domElement, {
      onAttach: (clonedElement, icon, domMarker) =>
        clonedElement.addEventListener("click", e => bounce(e.target)),
      onDetach: (clonedElement, icon, domMarker) =>
        clonedElement.removeEventListener("click", e => bounce(e.target))
    });

    const { lat, lng } = venue;
    // set marker coordinates & icon
    this.domMarker = new window.H.map.DomMarker({ lat, lng }, { icon: icon });
    this.domMarker.addEventListener("tap", this.handleMarkerClick);
  };

  
  handleMarkerClick = e => {
    const elementClicked = e.target.icon.i;
    const venueId = elementClicked.dataset.venueId;
    // this.getVenueId(venueId)
  };

  getDomMarker = () => this.domMarker;
}
