function createObservable (obj, callbacks) {
    return new Proxy(obj, {
        get(target, p, receiver) {
            if(typeof callbacks.onGet === 'function') {
                callbacks.onGet(p);
            }
            return Reflect.get(target, p, receiver);
        },
        set(target, p, newVal, receiver) {
            if(typeof callbacks.onSet === 'function') {
                callbacks.onSet(p, newVal);
            }
            return Reflect.set(target, p, newVal, receiver);
        }
    })
}

const user = {
    name: 'Alice',
    age: 30
};

const observableUser = createObservable(user, {
    onGet(prop) {
        console.log(`Property "${prop}" was read`);
    },
    onSet(prop, value) {
        console.log(`Property "${prop}" was set to "${value}"`);
    }
});

console.log(observableUser.name);  // Logs: Property "name" was read
observableUser.age = 31;            // Logs: Property "age" was set to "31"
observableUser.location = 'NYC';    // Logs: Property "location" was set to "NYC"