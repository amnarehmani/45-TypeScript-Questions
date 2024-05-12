// Question  16: Adding More Guests

// Guests Lists
let moreGuests = ["Amna" , "Ayesha" , "Vaniya" , "Mannal"];

let notComing = moreGuests[0];

console.log(notComing, "is not coming tonight.");
//  Adding new guests
moreGuests.splice(0, 1 , "Shaista");

console.log("I have a good news! i found a bigger table for tonight's dinner.");

moreGuests.unshift("Manahil");

moreGuests.push("Fatima");

let middle = (moreGuests.length /2 );

moreGuests.splice(middle, 0);

console.log("Updated list of guests")

moreGuests.forEach(guest => console.log(`Hello! ${guest} let's have dinner tonight `))


