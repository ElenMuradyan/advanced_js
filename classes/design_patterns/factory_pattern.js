class Car {
    constructor(name){
        this.name = name;
    }
    drive() {
        return `Driving a ${this.name}`;
    }
}

class Truck {
    constructor(name){
        this.name = name;
    }

    drive() {
        return `Driving a ${this.name}`;
    }
}

class createVehicle {
    create(type, name){
        switch(type) {
            case('car'): return new Car(name);
            case('truck'): return new Truck(name);
            default: throw new Error("Unknown vehicle type");
        }
    }
}

const factory = new VehicleFactory();

const car = factory.create('car', 'Toyota');
const truck = factory.create('truck', 'Volvo');

console.log(car.drive());   // Driving a Toyota
console.log(truck.drive()); // Driving a Volvo