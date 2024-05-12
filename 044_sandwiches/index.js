"use strict";
// Question no: 44
Object.defineProperty(exports, "__esModule", { value: true });
function makeSandwiches(...items) {
    console.log("Making a sandwich with following items: \n");
    items.forEach(oneitem => console.log(oneitem));
    console.log("\nEnjoy your sandwich!!! \n");
}
// calling function 3 times
makeSandwiches("Chicken", "Cheese", "Sauces", "Bread");
makeSandwiches("Butter", "Bread");
makeSandwiches("Tomato", "Chicken", "Egg", "Sauces", "Bread", "Butter", "Salad", "Fries", "Ketchup");
