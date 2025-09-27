class Calculator {
    constructor(){
        this.results = {}
    }

    increment (a, b) {
        return a + b;
    }
    mult (a, b) {
        return a * b;
    }
    divide (a, b) {
        return a / b;
    }
    power (a, b) {
        return a ** b;
    }
    decrement(a, b) {
        return a - b;
    }
}

const calc = new Calculator();

const loggingHandler = {
    get(target, propKey, receiver) {
        const origMethod = target[propKey];
        if(typeof origMethod === 'function'){
            return function(...args){
                console.log(`Calling ${propKey} with args: ${args}`);
                const result = origMethod.apply(this, args);
                console.log(`Result: ${result}`);
                return result;
            }
        }
        return origMethod;
    }
}

const obj = new Proxy(calc, loggingHandler);

obj.power(2, 3)