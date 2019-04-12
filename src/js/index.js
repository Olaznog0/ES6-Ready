import x from './test';
console.log(`I imported this value: ${x} from another module called test.js `);

class Person {
    constructor(name) {
        this.name = name;
    }
}

let person = new Person('John Doe');

console.log(`${person.name} class ES6 syntax was here`);