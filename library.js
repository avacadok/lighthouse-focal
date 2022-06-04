const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
      
  for (let key in library.playlists) {
              
    const playlist = library.playlists[key]; //access the p01 object
    console.log(key + ": " + playlist.name + " - " + playlist.tracks.length + " tracks");

  }
       
  // console.log(library.playlists)
};


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {

  for (let key in library.tracks) {
    let track = library.tracks[key];
    console.log(`${key}: ${track.name} by ${track.artist} (${track.album})`);
  }
};


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  const playlistDetails = library.playlists[playlistId];
  console.log(playlistId + ": " + playlistDetails.name + " - " + playlistDetails.tracks.length + " tracks");
       
  for (let trackId of playlistDetails.tracks) {
    // console.log(trackId)
    const trackDetails = library.tracks[trackId];
    console.log(`${trackId}: ${trackDetails.name} by ${trackDetails.artist} (${trackDetails.album})`);
  }
       
};

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  let playlist = library.playlists[playlistId];
  let track = library.tracks[trackId];
  //track can only be added if it already exist in tracks/ if the track has a truly value
  if (!playlist.tracks.includes(trackId) && track) {
    playlist.tracks.push(trackId);
  }
};


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
  let id = generateUid();
  //add the new object into tracks
  //if the variable name is same as the properity key we can just leave it as it is
  //do not need to repeat
  library.tracks[id] = {id, name, artist, album};

  console.log(library.tracks);
};


// adds a playlist to the library
const addPlaylist = function(name) {

  let id = generateUid();
  //apply the same logic as i learn above
  return library.playlists[id] = {id, name, tracks: []};
};


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};

// printPlaylists()
// printTracks()

// printPlaylist("p01")


console.log(addPlaylist("trying to survive"));