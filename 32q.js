"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Admin", "user1", "user3", "user4", "user5"];
let new_users = ["User1", "User2", "User6", "admin", "User7"];
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
