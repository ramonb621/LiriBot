# LiriBot

## The language interpretation and recognition interface!
It works similarly to the iPhone's siri, except its running as a node application.  With it you can search for track from your favorite artist, look for information about some of your favorite movies, find upcoming concerts for some of your favorite performers, and a little bit of something extra.

## Why does this app matter?
This app showcases the ability to callback data from the Spotify, OMDB, and Bands In Town API's using various node packages and functions.

### How does it work?
You can request infor on a song from Spotify by typing the following:

    **node liri.js spotify-this-song <SONG NAME>**
        *(if song name is left blank a default search will be performed)*

To request information on a movie you type:

    **node liri.js movie-this <MOVIE NAME>**
        *(if movie name is left blank a default search will be performed)*

For upcoming concert information:

    **node liri.js concert-this <PERFORMER NAME>**
    
and for something random:

    **node liri.js do-what-it-says**
