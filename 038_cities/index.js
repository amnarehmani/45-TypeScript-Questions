"use strict";
// Question no: 38
Object.defineProperty(exports, "__esModule", { value: true });
function cityName(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
;
cityName("Karachi");
cityName("Islamabad");
cityName("Seoul", "South Korea");
