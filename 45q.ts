function choosing_car (manufacturer : string, model : string, ...other :[string,any][]): object {
    let car = { manufacturer, model}
    other.forEach(([key, value])=> car[key]= value )
    return car
}
console.log(choosing_car("Honda", "Civic", ["color", "black"], ["year", 2022]))
