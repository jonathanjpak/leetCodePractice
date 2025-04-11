const MyModule = (function() {
    // Private information
    let lastName = 'Pak';
    const privateMethod = () => {
        console.log(`My last name is private but it is ${lastName}.`);
    };

    return {
        // Public information
        firstName: 'Jonathan',
        publicMethod() {
            console.log(`My first name is: ${this.firstName}.`);
            privateMethod();
        }
    };
})();

console.log(MyModule.firstName); // Jonathan
console.log(MyModule.lastName); // undefined
MyModule.publicMethod();