let userNames : string[] = ['Admin', 'User1', 'User2', 'User3']
if (userNames.length === 0){
    console.log('We need to find some users..!');
} else {
userNames.forEach(userName => {
    if (userName === "Admin"){
        console.log('Hello Admin! some updates and changes to be made. Are you in for that?');
    }
    else if (userName === "User2"){
       console.log("Hello User2!, Haven't seen you for a while. ");
    }
    else {
        console.log(`Hello ${userName}! Thank you for logging again.`);
    }

}
    ) }