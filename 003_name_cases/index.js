"use strict";
// Question 03: name cases
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "amna Rehmani";
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName.replace(/\bw/g, c => c.toUpperCase()));
