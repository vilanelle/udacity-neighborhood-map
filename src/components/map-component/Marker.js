import * as Api from "../../helpers/api/foursquareApiFunctions";
import { fadeInAndOut } from "../../helpers/effects";

export class Marker {
  domMarker;

  constructor(venue) {
    this.createMarker(venue);
  }

  createMarker = venue => {
    const domElement = document.createElement("div");
      domElement.className = "pin";
      domElement.style.font = "800 0.8rem Helvetica";
      domElement.style.opacity = "opacity: 1";
      domElement.textContent = venue.name;
      domElement.dataset.venueId = venue.foursquareId;
      // create icon for the marker and add event listener for animation
      const icon = new window.H.map.DomIcon(domElement, {
        onAttach: (clonedElement, icon, domMarker) =>
          clonedElement.addEventListener("click", e => fadeInAndOut(e.target)),
        onDetach: (clonedElement, icon, domMarker) =>
          clonedElement.removeEventListener("click", e =>
            fadeInAndOut(e.target)
          )
      });

      const { lat, lng } = venue;
      // set marker coordinates & icon
      this.domMarker = new window.H.map.DomMarker({ lat, lng }, { icon: icon });
      this.domMarker.addEventListener("tap", this.handleMarkerClick)

  }

  handleMarkerClick = e => {
    const elementClicked = e.target.icon.i;
    const venueId = elementClicked.dataset.venueId;
    Api.getVenueDetails(venueId);
  };

  getDomMarker = () => this.domMarker;
  

}

