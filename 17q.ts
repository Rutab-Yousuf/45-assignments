// Q17: removing guests from the list.
import Guests from "./15ques"
console.log(`Sorry, but I can only invite a couple of friends`)

while (Guests.length > 2){
    let removeGuest = Guests.pop();
    console.log(`Dear ${removeGuest} you are not invited to dinner.`)
}

// Guests.shift()
// console.log(Guests)

// Guests.splice(1, Guests.length)
// console.log(Guests)

Guests.forEach(guest => {
    console.log(`Dear ${guest} you are still invited to the dinner`)
})

