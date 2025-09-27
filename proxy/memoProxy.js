function memo (func) {
    const cache = {};

    return new Proxy(func, {
        apply(target, thisArg, argArray) {
            const key = argArray.join(', ');
            if(cache.hasOwnProperty(key)){
                return cache[key];
            }
            const val = Reflect.apply(target, thisArg, argArray);
            cache[key] = val;
            return val;
        }
    })
}