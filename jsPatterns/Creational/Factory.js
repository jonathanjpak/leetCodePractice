class Car {
    constructor(make, model, series) {
        this._make = make;
        this._model = model;
        this._series = series;
    }
}

// Encapsulates object creation away from its Car class
function carFactory(make, model, year) {
    if (year >= 1981 && year < 1996) {
        return new Car(make, model, 'Y');
    } else if (year >= 1996 && year < 2005) {
        return new Car(make, model, 'Z');
    } else {
        return new Car(make, model, 'Unknown series');
    }
}

const carA = carFactory('bmw', '325i', 1995);
const carB = carFactory('honda', 'civic', 2003);
const carC = carFactory('buick', 'navigator', 2020);

console.log(carA);
console.log(carB);
console.log(carC);