"use strict";
// Question no: 33
Object.defineProperty(exports, "__esModule", { value: true });
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for loops
for (let oneNumber of numbers) {
    let ordinals;
    if (oneNumber === 1) {
        ordinals = "st";
    }
    else if (oneNumber === 2) {
        ordinals = "nd";
    }
    else if (oneNumber === 3) {
        ordinals = "rd";
    }
    else if (oneNumber === 4) {
        ordinals = "th";
    }
    else {
        ordinals = "th";
    }
    console.log(`${oneNumber}${ordinals}`);
}
