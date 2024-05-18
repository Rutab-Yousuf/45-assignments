function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwich using ".concat(items.join(', '), " "));
}
make_sandwich("tomato", "patty", "Lettuce");
make_sandwich("lettuce", "patty", "pickles", "onion");
