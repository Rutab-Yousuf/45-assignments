function make_shirt(size:string = "large", message: string = "Quality is the corner stone" ){
    console.log(`Make a shirt of size ${size} with a message ${message} printed on it`);
    
}
make_shirt(); //it has still the same default size and message
make_shirt("medium") // first parameter is size. the message is still default
make_shirt("small", "Everything is gonna be okay") // custom message and size

