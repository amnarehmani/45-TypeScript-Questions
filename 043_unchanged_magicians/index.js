"use strict";
// Question no: 43
Object.defineProperty(exports, "__esModule", { value: true });
// Question 42
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
// Starting question 43 making a copy form function
let copyMagiciansName = magiciansNames.slice();
// modify the copied magicians name
let copyTheGreat = great(copyMagiciansName);
// Copied 
console.log("Modified function \n");
show_magicians(copyMagiciansName);
// Original
console.log("\nOriginal function \n");
show_magicians(greatMagicians);
