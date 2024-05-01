"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Q16: adding more guests to the array in middle, last or start.
const _15ques_1 = __importDefault(require("./15ques"));
console.log(`\t\n Great news! I  have booked a large space. \n\t`);
_15ques_1.default.unshift(`Laiba`);
//Guests.splice(Guests.length / 2, 0, `Simrah`);
_15ques_1.default.splice(3, 0, `Simrah`);
_15ques_1.default.push(`Tabie.`);
_15ques_1.default.forEach(guest => {
    console.log(`Dear ${guest}, You are invited for the dinner at ---- place.`);
});
