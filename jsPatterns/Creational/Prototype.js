// Prototype Object
const dogPrototype = {
    awake: true,
    legs: 4,
    bark() {
        console.log('Woof!');
    },
    wake() {
        awake = true;
    },
    sleep() {
        awake = false;
    }
}

const bonnie = Object.create(dogPrototype);
bonnie.name = 'Bonnie';
bonnie.color = 'Tri-color Merle';
bonnie.weight = 45;
bonnie.eat = () => {
    bonnie.weight++;
};
bonnie.potty = () => {
    bonnie.weight -= 0.7;
}

bonnie.bark();
bonnie.eat();
bonnie.potty();
console.log(bonnie.weight);

const butters = Object.create(dogPrototype);
butters.name = 'Butters';
butters.color = 'Tan';
butters.weight = 32;
butters.bark();
// Should do nothing since eat() is not defined for butters object prototype
butters.eat();