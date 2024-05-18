function choosing_car(manufacturer, model) {
    var other = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        other[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    other.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(choosing_car("Honda", "Civic", ["color", "black"], ["year", 2022]));
