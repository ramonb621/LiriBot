require('dotenv').config({path: './.env'});

var keys = require("./keys.js");

var fs = require("fs");

var axios = require("axios");

var moment = require('moment');

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var input = process.argv.slice(2);

var params = input;



switch(params[0]){

  case "do-what-it-says":

      doWhat();

    break;

  case "spotify-this-song":

    if(params[1] === undefined){
      params[1] = "The Sign";
      console.log("\nDefaul Search Parameter: \"The Sign\" by Ace of Base");
      console.log("----------------------------------------------------");
    }
      spotifySearch();

    break;

  case "concert-this":

      concertSearch();

    break;
  case "movie-this":

    if(params[1] === undefined){
      params[1] = "Mr.Nobody";
      console.log("\nIf you haven't watched \"Mr. Nobody,\" then you should: http://www.imdb.com/title/tt0485947/ \nIt's on Netflix!\n");
    }

      movieSearch();

    break;
  
}

function spotifySearch(){
    spotify.search({ type: 'track', query: params[1], limit: 20 }, function(err, data) {
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

function concertSearch(){
axios.get("https://rest.bandsintown.com/artists/" + params[1] + "/events?app_id=codingbootcamp").then(
  function(response) {
    var band = response.data;
    for (var i = 0; i < band.length; i++){

        console.log('Lineup: ' + band[i].lineup + '\nVenue Name: ' + band[i].venue.name +'\nCountry: ' + band[i].venue.country + '\nRegion: ' + band[i].venue.region + 
        '\nCity: ' +  band[i].venue.city);
        console.log('Date: ' + moment(band[i].datetime).format("MM/DD/YYYY"));

        console.log("---------------------------");
  }

  })
    .catch(function(error) {

      console.error(error);

    });  
}

function movieSearch(){
  axios.get("http://www.omdbapi.com/?apikey=trilogy&type=movie&t=" + params[1] + "").then(
  function(response) {
    var movie = response.data; 
    if(params[1] == ' '){
      
      params[1] = "Mr.Nobody";

    }
      console.log('Title: ' + movie.Title + '\nRelease Date: ' + movie.Released+ '\nRating: ' + movie.Ratings[0].Source + '\n' + movie.Ratings[0].Value + '\nProduced in: ' + movie.Country + '\nLanguage: ' + movie.Language + '\nPlot: ' + movie.Plot + '\nStarring: ' + movie.Actors);

  })
    .catch(function(error) {

      console.log(error);

    });  
}

function doWhat(){
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
      // console.log(data);

      var dataArr = data.split(",");

      params[0] = dataArr[0];

      params[1] = dataArr[1];

      console.log(dataArr);
    if(dataArr[0] == "spotify-this-song"){

      spotifySearch();

    }else if(dataArr[0] == "movie-this"){

      movieSearch();

    }else if(dataArr[0] == "concert-this"){

      concertSearch();

    }
    
  });
}