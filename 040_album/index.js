"use strict";
// Question no : 40
Object.defineProperty(exports, "__esModule", { value: true });
function albumMaking(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling functions and creating variables
let album1 = albumMaking("Amna", "Album title 1");
let album2 = albumMaking("Amna", "Album title 2");
let album3 = albumMaking("Amna", "Album title 3", 5);
console.log(album1);
console.log(album2);
console.log(album3);
