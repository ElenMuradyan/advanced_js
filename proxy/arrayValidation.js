let arr = [1, 2, 3, 4, 5];

const handler = {
    get(target, prop, receiver) {
        if(prop === 'push' && typeof target[prop] == 'function') {
            return function(...args) {
                if (!args.every(arg => typeof arg === 'number')) {
                    throw new Error("All arguments must be numbers");
                }
                return target[prop].apply(target, args);
            }
        }
        return target[prop];
    }
}

const proxyArr = new Proxy(arr, handler);