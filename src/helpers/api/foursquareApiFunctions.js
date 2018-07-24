var request = require('request-promise-native');


export const getVenueDetails = (venueId) => {
 
  const mapJsonResponse = (res) => {
    const venueDetails = res.response.venue;
    const details = {
      name: venueDetails.name,
      address: venueDetails.location.address,
      moreDetails: venueDetails.shortUrl,
      photoUrl: venueDetails.bestPhoto.prefix + '100x100' + venueDetails.bestPhoto.suffix,
      website: venueDetails.url
    }
    return details;
  }

  const options = {
    uri: `https://api.foursquare.com/v2/venues/${venueId}/`,
    qs: {
      // to get the app working get a client id and code from Foursquare Api and replace placeholders below
      client_id: "<4SQUARE_CLIENT_ID>",
      client_secret: "<4SQUARE_CLIENT_CODE>",
      v: "20180323"    
    },
    json: true // Automatically parses the JSON string in the response
  };

  return request(options)
  .then((res) => {
    const venueData = mapJsonResponse(res);
    return new Promise(function(resolve) {
      resolve(venueData);
  });
  })
  .catch(err => console.error(err));
}