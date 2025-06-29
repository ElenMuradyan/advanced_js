class User {
    constructor(name){
        this.name = name;
    }

    sayHi () {
        return `Hi ${this.name}`;
    }
}

function shoutDecorator (func) {    
    return function () {
        return `${func.call(this).toUpperCase()} !!!`;
    }
}

export class Calculator {
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

function calcDecorator (func, operator) {
    return function (...args) {
        const key = args.join(', ');
        if(!this.results[operator]){
            this.results[operator] = {};
        }
        if(!this.results[operator][key]){
            const val = func.call(this, ...args);
            this.results[operator][key] = val;
            return val;
        }else{
            return this.results[operator][key];
        }
    }
}

function decorateAllMethods (obj) {
    const proto = Object.getPrototypeOf(obj);
    for(let method of Object.getOwnPropertyNames(proto)) {
        if(typeof proto[method] === 'function' && method !== 'constructor'){
            const func = calcDecorator(proto[method], method)
            obj[method] = func;
        }
    }
}

const calc = new Calculator();
decorateAllMethods(calc);
