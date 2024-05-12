"use strict";
// Question no: 32
Object.defineProperty(exports, "__esModule", { value: true });
let usersCurrent = ["Amna", "Ayesha", "Vaniya", "Shaista", "Admin"];
let usersNew = ["vaniya", "Aziza", "Manahil", "ayesha"];
usersNew.forEach(newuser => {
    let usercondition = usersCurrent.some(currentuser => currentuser.toLowerCase() === newuser.toLowerCase());
    if (usercondition) {
        console.log(`Sorry Username ${newuser} is already taken`);
    }
    else {
        console.log(` Username ${newuser} is available`);
    }
});
