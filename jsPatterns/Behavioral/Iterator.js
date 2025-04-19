// Iterable Collection
class NameCollection {
    constructor() {
        this.names = [];
    }

    add(name) {
        this.names.push(name);
    }

    // Create an iterator this can also be abstracted
    [Symbol.iterator]() {
        let index = 0;
        const names = this.names;

        return {
            next: () => {
                if (index < names.length) {
                    return {
                        value: `${names[index].first} ${names[index++].last}`,
                        done: false
                    };
                } else {
                    return {done: true};
                }
            }
        };
    }
}

const collection = new NameCollection();
collection.add(
    {first: 'Jonathan', last: 'Pak'}
);
collection.add({first: 'Tenson', last: 'Cai'});
collection.add({first: 'Erin', last: 'Pak'});
collection.add({first: 'Kevin', last: 'Yoon'});

for (const name of collection) {
    console.log(name);
}

// An alternative
class PetCollection {
    constructor() {
        this.pets = [];
    }

    addPet(name, type) {
        this.pets.push({name, type});
    }

    createIterator() {
        return new PetIterator(this);
    }
}

class PetIterator {
    constructor(collection) {
        this.collection = collection;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.collection.pets.length;
    }

    next() {
        return `${this.collection.pets[this.index].type}: ${this.collection.pets[this.index++].name}`;
    }
}

const pakHome = new PetCollection();
pakHome.addPet('Bonnie', 'Dog');
pakHome.addPet('George', 'Baby');
const pakPetsIterator = pakHome.createIterator();
pakHome.addPet('Gertie', 'Bird');

while(pakPetsIterator.hasNext()) {
    console.log(pakPetsIterator.next());
}