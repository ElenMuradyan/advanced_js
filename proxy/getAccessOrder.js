function createTrackedObject(obj) {
    const order = [];

    return new Proxy(obj, {
        get(target, prop, receiver) {
            order.push(prop);
            if(prop === 'getAccessOrder'){
                return function() {
                    return [...order];
                }
            }
            return Reflect.get(target, prop, receiver);
        }
    })
}

const tracked = createTrackedObject({
    name: 'Alice',
    age: 30,
    greet() {
        return `Hello, I'm ${this.name}`;
    }
});

console.log(tracked.name);   
console.log(tracked.age);   
console.log(tracked.greet());

console.log(tracked.getAccessOrder()); 