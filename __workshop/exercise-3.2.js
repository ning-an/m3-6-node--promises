// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  return opencage.geocode(requestObj)
    .then( data => data.results[0].geometry )
    .catch( err => 'error')

  // return something...
};

// getPositionFromAddress(
//   '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
// ).then((response) => console.log(response));
// getPositionFromAddress(
//   '9171 Ferndale Rd, Richmond, BC V6Y 0A5'
// ).then((response) => console.log(response));
// getPositionFromAddress(
//   '224 Banff Ave, Banff, AB T1L 1B3'
// ).then((response) => console.log(response));

module.exports = { getPositionFromAddress };