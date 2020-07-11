// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  // write some code
  return new Promise( (resolve, reject ) => {
    if ( array.every( elem => typeof elem === 'string') ) {
      resolve(array.map( elem => elem[0].toUpperCase() + elem.slice(1)));
    } else {
      reject('Check what your array has!');
    }
  } )
};

const sortWords = (array) => {
  // write some code
  return new Promise( (resolve) => {
    resolve(array.sort())
  })
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

