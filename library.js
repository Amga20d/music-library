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
             },
  printPlaylists: function() {
    for (const key in this.playlists) {
    const element = this.playlists[key];
    console.log(`${element['id']}: ${element['name']} - ${element['tracks'].length} tracks`)
    }
  },
  printTracks: function() {
    for (const key in this.tracks) {
    const track = this.tracks[key];
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);   
    }
  },
  printPlaylist: function(playlistId) {
    const playlist = this.playlists[playlistId];
    console.log(`${playlist['id']}: ${playlist['name']} - ${playlist['tracks'].length} tracks`);
    for (const key of playlist['tracks']) {
      let track = this.tracks[key]
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`)
    }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    const playlist = this.playlists[playlistId];
    playlist['tracks'].push(trackId);
    console.log(this.playlists[playlistId]);
  },
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function(name, artist, album) {
    const newId = this.generateUid();
    this.tracks[newId] = {
      id: newId,
      name: name,
      artist: artist,
      album: album
    };
    console.log(this.tracks);
  
  },
  addPlaylist: function(name) {
    const newId = this.generateUid();
    this.playlists[newId] = {
      id: newId,
      name: name,
      tracks: []
    };
    console.log(this.playlists)
  }
};
library.printPlaylists();
/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
// const printPlaylists = function(obj) {
//   for (const key in obj['playlists']) {
//     const element = obj['playlists'][key];
//     console.log(`${element['id']}: ${element['name']} - ${element['tracks'].length} tracks`)
//   }
// }
// printPlaylists(library);

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
// const printTracks = function(obj) {
//   for (const key in obj['tracks']) {
//     const track = obj['tracks'][key];
//     console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);   
//   }
// }
// printTracks(library);

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// const printPlaylist = function(playlistId) {
//   const playlist = library['playlists'][playlistId];
//   console.log(`${playlist['id']}: ${playlist['name']} - ${playlist['tracks'].length} tracks`);
//   for (const key of playlist['tracks']) {
//     let track = library['tracks'][key]
//     console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`)
//   }
// }
// printPlaylist('p02');


// adds an existing track to an existing playlist
// const addTrackToPlaylist = function(trackId, playlistId) {
//   const playlist = library['playlists'][playlistId];
//   playlist['tracks'].push(trackId);
//   console.log(library['playlists'][playlistId]);
// }
// addTrackToPlaylist('t02', 'p02');


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
// const generateUid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }


// adds a track to the library
// const addTrack = function(name, artist, album) {
//   const newId = generateUid();
//   library['tracks'][newId] = {
//     id: newId,
//     name: name,
//     artist: artist,
//     album: album
//   };
//   console.log(library['tracks']);

// }
// addTrack('Ya layali', 'Ahmed', 'GamalRabanni');

// adds a playlist to the library
// const addPlaylist = function(name) {
//   const newId = generateUid();
//   library['playlists'][newId] = {
//     id: newId,
//     name: name,
//     tracks: []
//   };
//   console.log(library['playlists'])
// }
// addPlaylist('Chill Music')


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}