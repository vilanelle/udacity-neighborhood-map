const request = require("request");

export const getVenueDetails = (venueId) => {

  request(
    {
        url: 'https://api.foursquare.com/v2/venues/trending',
    //   url: `https://api.foursquare.com/v2/venues/${venueId}/`,
      method: "GET",
      qs: {
        client_id: "RHPU1FR2XDCXGDVKGCG2Q5PK4VKIEY1T2BGBRYLYWGDCT4HJ",
        client_secret: "GM1XWJ4GUYIFHTGW30Q0XPCCYYX5DCC1VUJECUORBL30UND4",
        v: "20180323"    
      }
    },
    function(err, res, body) {
      if (err) {
        console.error(err);
      } else {
        console.log(body);
      }
    }
  );
};
