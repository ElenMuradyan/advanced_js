function makeReadOnly (obj) {
    if(obj === null || typeof obj !== 'object'){
        return obj;
    }

    return new Proxy(obj, {
        set(target, prop, newVal, receiver) {
            console.warn(`Attempt to modify read-only property "${String(prop)}" denied.`);
            return false; 
        },

        deleteProperty(target, prop) {
            console.warn(`Attempt to delete read-only property "${String(prop)}" denied.`);
            return false; // deny the write
        },

        get(target, p, receiver) {
            const val = Reflect.get(target, p, receiver);
            return makeReadOnly(val);
        },

        defineProperty(target, prop, attributes) {
            console.warn(`Attempt to add property "${String(prop)}" denied.`);
            return false; 
        }
    })
}

const person = {
  name: "Leo"
};

const proxy = makeReadOnly(person);

delete proxy.name

console.log(proxy.name);