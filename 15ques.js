"use strict";
// RUTAB YOUSUF, 8-3-2024
// Q1: is to install all the things.
Object.defineProperty(exports, "__esModule", { value: true });
// Q2: make a variable of person's name and then print a message. i.e. put the variable instead of name in the text.
var my_name = "Rutab Yousuf";
console.log("Hello ".concat(my_name, ", how is your learning going?"));
console.log("\t\n");
// Q3: print the name in lower, upper and first letter big case.
console.log(my_name.toLowerCase());
console.log(my_name.toUpperCase());
console.log(my_name.charAt(0).toUpperCase() + my_name.slice(1).toLowerCase());
console.log(my_name.charAt(0).toLowerCase() + my_name.slice(1).toUpperCase());
console.log(my_name.charAt(0).toUpperCase() +
    my_name.slice(1, 5).toLowerCase() +
    " " +
    my_name.charAt(6).toUpperCase() +
    my_name.slice(7).toLowerCase());
console.log("\t\n");
// Q4: print a quote of famous person in a manner described.
console.log('"Someone said once,"If You Want it, Work for it.""');
console.log("\t\n");
// Q5: put the person name in variable then try to print the quote.
var famousPerson = "THOMAS A.EDISON";
console.log("\"".concat(famousPerson, " once said,\"I have never  failed, I've just found 10,000 ways that won't work.\"\""));
console.log("\t\n");
// Q6: white space around the text and how to clean the text
var whiteSpace = "\n Rutab \n";
console.log(whiteSpace);
console.log(whiteSpace.trim());
console.log("\t\n");
// Q7 and 8 Basic math operations:
console.log(2 + 3 + 2);
console.log(17 - 2 - 1);
console.log(2 * 2 + 4);
console.log(28 / 4);
var appreciation = "Great Job..!";
console.log("Rutab, ".concat(appreciation));
console.log("\t\n");
// Q9: favourite number in variable and print a message with it.
var favouriteNumber = 14;
console.log("".concat(favouriteNumber, " is my favourite number."));
// Q10: adding comment
console.log("\t\n");
//Q11 make an array. print names one by one.
var names = ["Areesha", "Laiba", "Simrah"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
// ORR:
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log("\t\n");
// Q12: print message usinng array names above.
var message = "How are you??";
console.log("".concat(names[0], ", ").concat(message));
console.log("".concat(names[1], ", ").concat(message));
console.log("".concat(names[2], ", ").concat(message));
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("hello, ".concat(name_1, "! ").concat(message, "."));
}
console.log("\t\n");
// Q13: same as above but with different function
var vehicles = ["honda civic", "125 motorcycle", "tesla"];
for (var _a = 0, vehicles_1 = vehicles; _a < vehicles_1.length; _a++) {
    var vehicle = vehicles_1[_a];
    console.log("I would like to own a ".concat(vehicle, "."));
}
console.log("\t\n");
vehicles.forEach(function (vehicle) {
    console.log("I would like to own a ".concat(vehicle, "."));
});
console.log("\t\n");
// Q14: guest list to invite them
var Guests = ["Rabiya", "Aroob", "Areesha"];
exports.default = Guests;
Guests.forEach(function (guest) {
    console.log("Hello ".concat(guest, ", I am inviting you for the dinner at my place. I would love to spent some real time with you. "));
});
console.log("\t\n");
//Q15: one can't make it to the dinner so replace it
var unableToAttend = "Aroob";
var newGuest = "Laiba";
Guests[Guests.indexOf(unableToAttend)] = newGuest;
Guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", Would you like to have a dinner at my place"));
});
console.log(Guests);
