require('dotenv').config({path: './.env'});

var keys = require("./keys.js");

var axios = require("axios");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

// function spotifySearch(response){
var input = process.argv.slice(2);
spotify.search({ type: 'artist', query: input, limit: 10 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(JSON.stringify(data, null, 2)); 
  });
//   console.log(response);
// }

// var artist = process.argv.slice().join("");
// axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
//   function(response) {
//     console.log(response);
//   })
//     .catch(function(error) {
//       // if(error.response){
//       //   console.log(error);
//       //   console.log("---------------Data---------------");
//       //   console.log(error.response.data);
//       //   console.log("---------------Status---------------");
//       //   console.log(error.response.status);
//       //   console.log("---------------Status---------------");
//       //   console.log(error.response.headers);
//       // } else if (error.request) {
//       //   console.log(error.request);
//       // } else {
//       //   console.log("Error", error.message);
//       // }
//       console.log(error);
//     });  