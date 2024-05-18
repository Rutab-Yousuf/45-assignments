// another way
var magicians = ["Robert", "Charlie", "Cook"];
function magicians_name(magicians) {
    magicians.forEach(function (magician) {
        console.log("".concat(magician, " magician"));
        return magicians;
    });
}
function again_great(magicians) {
    var great_magicians = [];
    magicians.forEach(function (magician) {
        great_magicians.push("".concat(magician, " is The Great Magician"));
    });
    return great_magicians;
}
var great_magicians = again_great(magicians.slice());
magicians_name(magicians);
magicians_name(great_magicians);
