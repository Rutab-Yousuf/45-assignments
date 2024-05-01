// Q16: adding more guests to the array in middle, last or start.
import Guests from "./15ques";
console.log(`\t\n Great news! I  have booked a large space. \n\t`)

Guests.unshift(`Laiba`);

//Guests.splice(Guests.length / 2, 0, `Simrah`);
Guests.splice(3 , 0, `Simrah`);

Guests.push(`Tabie.`)

Guests.forEach(guest => {
    console.log(`Dear ${guest}, You are invited for the dinner at ---- place.`)
});

