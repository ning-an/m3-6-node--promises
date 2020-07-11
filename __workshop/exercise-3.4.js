// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------
const { getIssPosition } = require('./exercise-3.1.js');
const { getPositionFromAddress } = require('./exercise-3.2.js')

const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
}

const getDistanceFromIss = (address) => {
  // write a new Promise here...
  let issPos, addressPos;
  return getIssPosition()
    .then( data => {
      issPos = data;
      return getPositionFromAddress(address)
        .then( data => {
          addressPos = data;
          return getDistance(addressPos, issPos);
        })
    })
};

getDistanceFromIss(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log(response));