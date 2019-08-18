require('dotenv').config({path: './.env'});

var keys = require("./keys.js");

var axios = require("axios");

var moment = require('moment');

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var input = process.argv.slice(2);

var params = input;



switch(params[0]){

  case "do-what-it-says":

    break;

  case "spotify-this-song":

      spotifySearch();

    break;

  case "concert-this":

      concertSearch();

    break;
  case "movie-this":

      movieSearch();

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
          console.log("Album: " + songs[i].album.name);
          console.log("Release Date: " + songs[i].album.release_date);
          console.log("Preview: " + songs[i].preview_url);
          console.log("----------------------------------------------------");
        }
      });
  }
}

function concertSearch(){
axios.get("https://rest.bandsintown.com/artists/" + params[1] + "/events?app_id=codingbootcamp").then(
  function(response) {
    var band = [
      response.data[0],
      response.data[1],
      response.data[2],
      response.data[3],
      response.data[4],
    ]
  
        console.log('Lineup: ' + band[0].lineup + '\nVenue Name: ' + band[0].venue.name +'\nCountry: ' + band[0].venue.country + '\nRegion: ' + band[0].venue.region + 
        '\nCity: ' +  band[0].venue.city);
        console.log('Date: ' + moment(band[0].datetime).format("MMMM Do YYYY, h:mm:ss a"));

        console.log("---------------------------");

        console.log('Lineup: ' + band[1].lineup + '\nVenue Name: ' + band[1].venue.name + '\nCountry: ' + band[1].venue.country + '\nRegion: ' + band[1].venue.region + 
        '\nCity: ' +  band[1].venue.city);
        console.log('Date: ' + moment(band[1].datetime).format("MMMM Do YYYY, h:mm:ss a"));

        console.log("---------------------------");

        console.log('Lineup: ' + band[2].lineup + '\nVenue Name: ' + band[2].venue.name +'\nCountry: ' + band[2].venue.country + '\nRegion: ' + band[2].venue.region + 
        '\nCity: ' +  band[2].venue.city);
        console.log('Date: ' + moment(band[2].datetime).format("MMMM Do YYYY, h:mm:ss a"));
      
        console.log("---------------------------");

        console.log('Lineup: ' + band[3].lineup + '\nVenue Name: ' + band[3].venue.name + '\nCountry: ' + band[3].venue.country + '\nRegion: ' + band[3].venue.region + 
        '\nCity: ' +  band[3].venue.city);
        console.log('Date: ' + moment(band[3].datetime).format("MMMM Do YYYY, h:mm:ss a"));
      
        console.log("---------------------------");

        console.log('Lineup: ' + band[4].lineup + '\nVenue Name: ' + band[4].venue.name + '\nCountry: ' + band[4].venue.country + '\nRegion: ' + band[4].venue.region + 
        '\nCity: ' +  band[4].venue.city);
        console.log('Date: ' + moment(band[4].datetime).format("MMMM Do YYYY, h:mm:ss a"));

  })
    .catch(function(error) {

      console.error(error);
      
    });  
}

function movieSearch(){
  axios.get("http://www.omdbapi.com/?apikey=trilogy&type=movie&t=" + input + "").then(
  function(response) {
    console.log(response);
  })
    .catch(function(error) {
      // if(error.response){
      //   console.log(error);
      //   console.log("---------------Data---------------");
      //   console.log(error.response.data);
      //   console.log("---------------Status---------------");
      //   console.log(error.response.status);
      //   console.log("---------------Status---------------");
      //   console.log(error.response.headers);
      // } else if (error.request) {
      //   console.log(error.request);
      // } else {
      //   console.log("Error", error.message);
      // }
      console.log(error);
    });  
}