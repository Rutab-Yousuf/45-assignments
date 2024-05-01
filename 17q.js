"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Q17: removing guests from the list.
const _15ques_1 = __importDefault(require("./15ques"));
console.log(`Sorry, but I can only invite a couple of friends`);
while (_15ques_1.default.length > 2) {
    let removeGuest = _15ques_1.default.pop();
    console.log(`Dear ${removeGuest} you are not invited to dinner.`);
}
// Guests.shift()
// console.log(Guests)
// Guests.splice(1, Guests.length)
// console.log(Guests)
_15ques_1.default.forEach(guest => {
    console.log(`Dear ${guest} you are still invited to the dinner`);
});
