"use strict";
// Question no: 42
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
;
function great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
;
let magiciansNames = ["Harry Potter", "Docter Strange", "Zatanna"];
let greatMagicians = great(magiciansNames);
show_magicians(greatMagicians);
