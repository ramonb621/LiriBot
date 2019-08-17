require('dotenv').config({path: './.env'});

var keys = require("./keys.js");

var axios = require("axios");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var input = process.argv.slice(2);
var params = input;
// var song = tracks.href.items;

switch(params[0]){
  case "do-what-it-says":
    break;
  case "spotify-this-song":
    if(params[1]){
      spotifySearch();
    }
    break;
}

function spotifySearch(){
  if(this.input = "spotify-this-song" + input){
    spotify.search({ type: 'track', query: params[1], limit: 10 }, function(err, data) {
        if (err) {

          console.log("What would you like to search? \nInput \'node liri.js concert-this <artist/band name here>\' for concert info, \nnode liri.js \'spotify-this-song <song name here>\' to search a song, \nnode liri.js \'movie-this <movie name here>\' to find movie info, \nor node liri.js \'do-what-it-says\'.")

          return console.log('Error occurred: ' + err);
        }
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
          console.log("Artist/Band: " + songs[i].artists[0].name);
          console.log("Song: " + songs[i].name);
          console.log("Track #: " + songs[i].track_number);
          console.log("Album: " + songs[i].album.name);
          console.log("Release Date: " + songs[i].album.release_date);
          console.log("Release Type: " + songs[i].album.album_type);
          console.log("Preview: " + songs[i].preview_url);
          console.log("----------------------------------------------------");
        }
      });
  }
}
// var artist = process.argv.slice().join("");
// axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp").then(
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