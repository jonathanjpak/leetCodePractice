class Car {
    constructor() {
        this.year = '';
        this.make = '';
        this.model = '';
        this.engine = '';
    }

    displayInfo() {
        console.log(`Year: ${this.year}, Make: ${this.make}, Model: ${this.model}, Engine: ${this.engine}`);
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    setYear(year) {
        this.car.year = year;
        return this;
    }

    setMake(make) {
        this.car.make = make;
        return this;
    }

    setModel(model) {
        this.car.model = model;
        return this;
    }

    setEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    build() {
        return this.car;
    }
}

const carBuilder = new CarBuilder();
const brian = carBuilder.setYear(2009).setMake('Toyota').setModel('Prius').setEngine('Hybrid V4').build();
brian.displayInfo();