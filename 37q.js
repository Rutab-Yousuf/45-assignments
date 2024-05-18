function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "Quality is the corner stone"; }
    console.log("Make a shirt of size ".concat(size, " with a message ").concat(message, " printed on it"));
}
make_shirt(); //it has still the same default size and message
make_shirt("medium"); // first parameter is size. the message is still default
make_shirt("small", "Everything is gonna be okay"); // custom message and size
