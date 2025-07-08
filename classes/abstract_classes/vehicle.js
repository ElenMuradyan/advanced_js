class Vehicle {
    constructor() {
        if(new.target === Vehicle){
            throw new Error("Cannot instantiate abstract class directly");
        }
    }
    drive () {
        throw new Error("Must implement drive()");
    }
}

class Car extends Vehicle {
    drive(){
        return 'Driving';
    }
}

const myCar = new Car();
console.log(myCar.drive());