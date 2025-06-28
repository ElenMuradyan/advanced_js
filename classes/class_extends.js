import { Clock } from "./basicSyntax";

// corrected an error using super

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); 
// console.log(rabbit.name);

/*
Create a new class ExtendedClock that inherits from Clock and adds the parameter precision – the number of ms between “ticks”. Should be 1000 (1 second) by default.
 */
class ExtendedClock extends Clock {
  constructor(template, precision = 1000){
    super(template);
    this._precision = precision;
  }

  start() {
    const func = this.render.bind(this);
    const val = this._precision;
    this.timer = setInterval(func, val);
  }
}

// create employee class which extends from person
// write getter and setter functions
// add static method

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    greet() {
        return `Hi, I'm ${this._name} and I'm ${this._age} years old`;
    }

    static isAdult(age) {
        if(age >= 18){
            return true;
        }else{
            return false;
        }
    }

    get name () {
        return this._name.toUpperCase();
    } 

    set name (val) {
        this._name = val.trim(); 
    }
}

class Employee extends Person{
    constructor(name, age, position) {
        super(name, age);
        this._position = position;
    }

    greet() {
        return super.greet() + `, working as a ${this._position}`;
    }

    work() {
        return `${this._name} is working as a ${this._position}`;
    }

    showThis() {
        console.log(this)
    }

    arrowThis = () => console.log(this)
}