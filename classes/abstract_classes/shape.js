class Shape {
    constructor() {
        if(new.target === Shape){
            throw new Error("Cannot instantiate abstract class directly");
        }
        if(this.name == undefined){
            throw new Error("Must have a name");
        }
        if (typeof this.area !== 'function') {
            throw new Error("Must implement area()");
        }
        if (typeof this.perimeter !== 'function') {
            throw new Error("Must implement perimeter()");
        }
    }
    area () {
        throw new Error("Must implement drive()");
    }
    perimeter(){
        throw new Error("Must implement perimeter()");
    }
}

class Rectangle extends Shape {
    name = 'Rectangle'

    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }

    area () {
        return this.height * this.width
    }

    perimeter(){
        return 2 * this.height + 2 * this.width;
    }
}