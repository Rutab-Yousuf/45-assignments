var magicians = ["Robert", "Charlie", "Cook"];
function magicians_name(magicians) {
    magicians.forEach(function (magician) {
        console.log("".concat(magician, " magician"));
        return magicians;
    });
}
magicians_name(magicians);
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians);
magicians_name(magicians);
