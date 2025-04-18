class Shape {
    constructor(color) {
        this.color = color;
    };

    draw() {
        console.log('Draw Shape');
    }
}

class Circle extends Shape {
    draw() {
        console.log(`Drawing a ${this.color.getColor()} circle!`);
    }
}

class Square extends Shape {
    draw() {
        console.log(`Drawing a ${this.color.getColor()} square!`);
    }
}

class Color {
    getColor() {
        throw new Error('getColor must be implemented');
    }
}

class RedColor extends Color {
    getColor() {
        return 'red';
    }
}

class BlueColor extends Color {
    getColor() {
        return 'blue';
    }
}

const blueCirc = new Circle(new BlueColor());
blueCirc.draw();
const redSq = new Square(new RedColor());
redSq.draw();