class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

function validateVals (name, age) {
    if(typeof name !== 'string'){
        throw new Error('The type of name must be a string');
    }

    if(typeof age !== 'number'){
        throw new Error('The type of age must be a number');
    }
}

function validateClassInstantiations(obj) {
    return new Proxy(obj, {
        construct(target, argArray, newTarget) {
            validateVals(...argArray);
            return Reflect.construct(target, argArray, newTarget);
        }
    })
}

const ValidatedPerson = validateClassInstantiations(Person);

const p1 = new ValidatedPerson('Alice', 30);
console.log(p1);