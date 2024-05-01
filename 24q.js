"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
// console.log("apple" == "Apple"); // False because the case matters in binary language
// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True
// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true, false); // True
let vegetables = ["carrot", "capsicum", "lettuce", "okra"];
console.log("Is 'tomato' in vegetables?");
console.log(vegetables.includes("tomato")); // False
console.log("Is 'carrot' not in vegetables? ");
console.log(!vegetables.includes("carrot")); // True
//If we add ! before variable i.e !vegetables.includes() then it will print the opposite boolean value
