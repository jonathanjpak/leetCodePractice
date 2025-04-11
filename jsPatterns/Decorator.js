class Coffee {
    constructor(origin) {
        this.origin = origin;
    };
    getCost() {
        return 3;
    }
}

class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost() + 0.5;
    }
}

const blackCoffee = new Coffee('Ethiopia');
console.log(`Black coffee cost: ${blackCoffee.getCost()}`);

const coffeeWithMilk = new CoffeeDecorator(blackCoffee);
console.log(`Black coffee with milk cost: ${coffeeWithMilk.getCost()}`);