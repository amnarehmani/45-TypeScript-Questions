"use strict";
// Question no: 24
Object.defineProperty(exports, "__esModule", { value: true });
let red = "red";
let upercaseRed = "RED";
let num1 = 8;
let num2 = 4;
let colors = ["Red", "Purple", "Pink"];
// test string
console.log("red equal to red?");
console.log(red === red);
console.log("\n is red value is not equal to red?");
console.log(red != red);
console.log("\n red is equal to RED after converting to lowercase?");
console.log(upercaseRed.toLowerCase() == red);
console.log("\n red is equal not to RED after converting to lowercase?");
console.log(upercaseRed.toLowerCase() != red);
// test numericals
console.log("\n is num1 is equal to num2? ");
console.log(num1 === num2);
console.log("\n num1 is not equal to num2?");
console.log(num1 != num2);
console.log("\n 8 is equal to 0?");
console.log(num1 > 0);
console.log("\n 0 is not greater than 4?");
console.log(num2 < 0);
console.log("\n 8 is greater than 4?");
console.log(num1 >= num2);
console.log("\n 4 is greater than 8?");
console.log(num1 <= num2);
// & and OR
console.log("\n 8 is not equal to 4 and 8 is greater than 4");
console.log(num1 != num2 && num1 > num2);
console.log("\n 4 is equal not to 8 and 8 is smaller than 4 ");
console.log(num1 != num2 && num1 < num2);
console.log("\n 8 is greater than 4 OR 8 is equal to 8");
console.log(num1 > num2 || num1 == num1);
console.log("\n 8 is smaller than 4 OR 4 is equal to 8");
console.log(num1 < num2 || num1 != num1);
// Arrays
console.log("\n red color is in my arrays?");
console.log(colors.includes("Red"));
console.log("\n orange color is in my arrays?");
console.log(colors.includes("orange"));
