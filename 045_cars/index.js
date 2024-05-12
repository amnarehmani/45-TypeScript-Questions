"use strict";
// Question no: 45
Object.defineProperty(exports, "__esModule", { value: true });
function carInfo(manufacturer, model, ...options) {
    let carInfo = {
        manufacturer: manufacturer,
        model: model,
        ...Object.assign({}, ...options)
    };
    return carInfo;
}
let carPrint = carInfo("Civic", "Tesla", { color: "black" }, { features: ["navigation", "Power Window"] });
console.log(carPrint);
