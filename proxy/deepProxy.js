function deepProxy (obj) {
    if(obj === null || typeof obj !== 'object') {
        return obj;
    }

    return new Proxy(obj, {
        get(target, prop, receiver) {
            const val = Reflect.get(target, prop, receiver);
            return deepProxy(val);
        }
    })
}