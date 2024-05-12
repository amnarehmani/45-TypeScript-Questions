// Question 15: Changing Guest List


let changingGuestLIist = ["Amna" , "Ayesha " , "Vaniya" , "Mannal"];

let notComing = changingGuestLIist[0];

console.log( notComing , "sorry, i can't come for dinner tonight");

changingGuestLIist.splice (0, 1, "Shaista");

changingGuestLIist.forEach(guest => console.log(`Hello! ${guest} Lets have dinner tonight.`))