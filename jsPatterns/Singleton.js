class Singleton {
    constructor(name) {
        // Check static property
        if (!Singleton.instance) {
            Singleton.instance = this;
            this._name = name;
        }
        return Singleton.instance;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
};

// Checking static property of class Singleton
// Should be undefined
console.log(Singleton.instance);

const single1 = new Singleton('jpak');

// Should be the new 'jpak' Singleton
console.log(Singleton.instance);

const single2 = new Singleton('erin');

console.log(Singleton.instance);
// Should still be new 'jpak';

single2.name = 'George';

// Should be George for both since there's only one instance that can exist
console.log(single1.name);
console.log(single2.name);
console.log(single1 === single2);