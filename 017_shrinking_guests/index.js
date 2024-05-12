"use strict";
// Question 17 : Shrinking Guests
Object.defineProperty(exports, "__esModule", { value: true });
// Guests Lists
let moreGuests = ["Amna", "Ayesha", "Vaniya", "Mannal"];
//  Not coming guests
let notComing = moreGuests[0];
console.log(notComing, "is not coming tonight.");
//  Adding new guests
moreGuests.splice(0, 1, "Shaista");
console.log("I have a good news! i found a bigger table for tonight's dinner.");
moreGuests.unshift("Manahil");
moreGuests.push("Fatima");
let middle = (moreGuests.length / 2);
moreGuests.splice(middle, 0);
//  updating guest list
console.log("Updated list of guests");
moreGuests.forEach(guest => console.log(`Hello! ${guest} the new dinner table is not available on time now i have space for only 2 guests for dinner tonight..  `));
// removing guests
while (moreGuests.length > 2) {
    let guestRemoved = moreGuests.pop();
    console.log(`sorry ${guestRemoved} i can't invite you for the dinner tonight let's have dinner together next time`);
}
;
//  last two guest list
console.log("2 guests invitation");
moreGuests.forEach(lastGuest => console.log(`hello ${lastGuest} you're invited for tonight's dinner party`));
// removing guests
moreGuests.pop();
moreGuests.pop();
console.log("list", moreGuests);
