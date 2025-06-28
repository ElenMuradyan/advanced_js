function Animal(name) {
  this.name = name;
}
Animal.prototype.sayHi = function () {
  return "Hi, I'm " + this.name;
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const myDog = new Dog("Luna", "Husky");
console.log(myDog.sayHi());