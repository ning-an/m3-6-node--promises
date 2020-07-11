// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// get the code you wrote in 2.2 and paste it here...
const greeting = (langCode) => {
    return request(`https://journeyedu.herokuapp.com/hello/${langCode}`)
        .then( res => JSON.parse(res) )
        .then( parsedRes => parsedRes.data )
        .catch( err => {
            return err.error ? JSON.parse(err.error) : err;
        })
}

greeting('fr').then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
greeting('es').then((result) => console.log(result));
greeting('en').then((result) => console.log(result));
greeting('cn').then((result) => console.log(result));