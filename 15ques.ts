// RUTAB YOUSUF, 8-3-2024
// Q1: is to install all the things.

// Q2: make a variable of person's name and then print a message. i.e. put the variable instead of name in the text.
let my_name: string = "Rutab Yousuf";
console.log(`Hello ${my_name}, how is your learning going?`);
console.log(`\t\n`);

// Q3: print the name in lower, upper and first letter big case.
console.log(my_name.toLowerCase());
console.log(my_name.toUpperCase());
console.log(my_name.charAt(0).toUpperCase() + my_name.slice(1).toLowerCase());
console.log(my_name.charAt(0).toLowerCase() + my_name.slice(1).toUpperCase());
console.log(
  my_name.charAt(0).toUpperCase() +
    my_name.slice(1, 5).toLowerCase() +
    " " +
    my_name.charAt(6).toUpperCase() +
    my_name.slice(7).toLowerCase()
);
console.log(`\t\n`);

// Q4: print a quote of famous person in a manner described.
console.log('"Someone said once,"If You Want it, Work for it.""');
console.log(`\t\n`);

// Q5: put the person name in variable then try to print the quote.
let famousPerson = "THOMAS A.EDISON";
console.log(
  `"${famousPerson} once said,"I have never  failed, I've just found 10,000 ways that won't work.""`
);
console.log(`\t\n`);

// Q6: white space around the text and how to clean the text
let whiteSpace = "\n Rutab \n";
console.log(whiteSpace);
console.log(whiteSpace.trim());
console.log(`\t\n`);

// Q7 and 8 Basic math operations:
console.log(2 + 3 + 2);
console.log(17 - 2 - 1);
console.log(2 * 2 + 4);
console.log(28 / 4);
const appreciation = "Great Job..!";
console.log(`Rutab, ${appreciation}`);
console.log(`\t\n`);

// Q9: favourite number in variable and print a message with it.
let favouriteNumber: number = 14;
console.log(`${favouriteNumber} is my favourite number.`);

// Q10: adding comment
console.log(`\t\n`);

//Q11 make an array. print names one by one.
let names: string[] = [`Areesha`, `Laiba`, `Simrah`];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
// ORR:
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
console.log(`\t\n`);

// Q12: print message usinng array names above.
let message: string = "How are you??";
console.log(`${names[0]}, ${message}`);
console.log(`${names[1]}, ${message}`);
console.log(`${names[2]}, ${message}`);

for (let name of names) {
  console.log(`hello, ${name}! ${message}.`);
}
console.log(`\t\n`);

// Q13: same as above but with different function
let vehicles: string[] = [`honda civic`, `125 motorcycle`, `tesla`];
for (let vehicle of vehicles) {
  console.log(`I would like to own a ${vehicle}.`);
}
console.log(`\t\n`);

vehicles.forEach((vehicle) => {
  console.log(`I would like to own a ${vehicle}.`);
});
console.log(`\t\n`);

// Q14: guest list to invite them
let Guests: string[] = [`Rabiya`, `Aroob`, `Areesha`];
export default Guests;
Guests.forEach((guest) => {
  console.log(
    `Hello ${guest}, I am inviting you for the dinner at my place. I would love to spent some real time with you. `
  );
});
console.log(`\t\n`);

//Q15: one can't make it to the dinner so replace it
let unableToAttend = "Aroob";
let newGuest = "Laiba";
Guests[Guests.indexOf(unableToAttend)] = newGuest;
Guests.forEach((guest) => {
  console.log(`Dear ${guest}, Would you like to have a dinner at my place`);
});
console.log(Guests);
