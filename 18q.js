"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// different orders of an array
let dreamCountries = ["Saudia", "Turkey", "Switzerland", "Japan", "New Zealand"];
exports.default = dreamCountries;
console.log("original order:", dreamCountries);
console.log("Alphabetical order:", [...dreamCountries].sort());
console.log("original order:", dreamCountries);
console.log("Reverse Alphabetical order:", [...dreamCountries].sort().reverse());
dreamCountries.reverse();
console.log(dreamCountries);
dreamCountries.sort();
console.log(dreamCountries);
dreamCountries.reverse();
console.log(dreamCountries);
