"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question no: 37
function shirts(size = "Large", printMessage = "I love TypeScript") {
    console.log(`make a ${size} shirt with the ${printMessage} print on it`);
}
shirts();
// changing size of shirt
shirts("Medium");
