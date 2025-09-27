function createCustomIterableObject (obj, hideAndOrder) {
    const {hide, order} = hideAndOrder;

    return new Proxy(obj, {
        ownKeys(target) {
            let keys = Reflect.ownKeys(target).filter(i => !hide.includes(i));

            keys.sort((a, b) => {
                const A = order.indexOf(a);
                const B = order.indexOf(b);

                return A - B;
            })

            return keys;
        },
        getOwnPropertyDescriptor(target, prop) {
            const desc = Reflect.getOwnPropertyDescriptor(target, prop);
            if(hide.includes(prop)){
                desc.enumerable = false;
                return desc;
            }
            return desc;
        }
    })
}

const original = {
    name: 'Alice',
    age: 30,
    secret: 'hiddenValue',
    role: 'admin'
};

const proxy = createCustomIterableObject(original, {
    hide: ['secret'],            // Hide the 'secret' key
    order: ['role', 'name', 'age'] // Reorder keys
});

console.log(Object.keys(proxy)); 
// Output: [ 'role', 'name', 'age' ]

for (let key in proxy) {
    console.log(key);
}
// Output:
// role
// name
// age