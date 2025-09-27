let arr = [1, 2, 3, 4, 5];

const handler = {
    get(target, prop, receiver) {
        if(typeof target[prop] == 'function') {
            return function(...args) {
                return target[prop].apply(target, args);
            }
        }
        return target[prop];
    }
}

const proxyArr = new Proxy(arr, handler);

const result = proxyArr.push(6);  
console.log(proxyArr);          
console.log(result);              