// Q16: adding more guests to the array in middle, last or start.
import Guests from "./15ques";
console.log(`\t\n Great news! I  have booked a large space. \n\t`)

// this will add the name to start
Guests.unshift(`Laiba`);

// this will add the name in the middle where you want.  the starting number indicates where you want toadd and the second number shows whish name you want to delete.
//Guests.splice(Guests.length / 2, 0, `Simrah`);
Guests.splice(3 , 0, `Simrah`);

//this will add the guest to the array n last
Guests.push(`Tabie.`)

Guests.forEach(guest => {
    console.log(`Dear ${guest}, You are invited for the dinner at ---- place.`)
});

