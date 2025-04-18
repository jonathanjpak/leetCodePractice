class Person {
    constructor(name, age, ethnicity) {
        this.name = name;
        this.age = age;
        this.ethnicity = ethnicity;
    }

    greet() {
        console.log('Greetings');
    }
}

const jpak = new Person('Jonathan Pak', 37, 'Korean');
jpak.greet();

// You can also use functions to perform this pattern

function American(name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;
    this.ethnicity = 'American';

    this.greet = () => {
        console.log(`Howdy y\'all! Proud to be ${this.ethnicity}!`);
    }
}

const erin = new American('Erin Pak', 33, 'California');
erin.greet();