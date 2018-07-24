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
    // uri: `https://api.foursquare.com/v2/venues/${venueId}/`,
    uri: 'https://jsonplaceholder.typicode.com/posts/1',
    qs: {
      client_id: "RHPU1FR2XDCXGDVKGCG2Q5PK4VKIEY1T2BGBRYLYWGDCT4HJ",
      client_secret: "GM1XWJ4GUYIFHTGW30Q0XPCCYYX5DCC1VUJECUORBL30UND4",
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