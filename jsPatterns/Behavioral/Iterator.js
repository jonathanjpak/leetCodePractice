// Iterable Collection
class NameCollection {
    constructor() {
        this.names = [];
    }

    add(name) {
        this.names.push(name);
    }

    // Create an iterator
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