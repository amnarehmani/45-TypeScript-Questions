"use strict";
// Question no: 31
Object.defineProperty(exports, "__esModule", { value: true });
let usrNames = ["Amna", "Ayesha", "Vaniya", "Shaista", "Admin"];
usrNames = [];
if (usrNames.length === 0) {
    console.log("We are in empty array! we need to find some users");
}
else {
    usrNames.forEach(oneuser => {
        if (oneuser === "Admin") {
            console.log(`Hello ${oneuser}, would you like to see a report?`);
        }
        else {
            console.log(`Hello ${oneuser}, thank you for logging in again`);
        }
    });
}
;
