let arr = [1, 2, 3, 4, 5];

const handler = {
    get(target, prop, receiver) {
        if(typeof target[prop] == 'number') {
            console.log(prop);
        }
        return target[prop];
    }
}

const proxyArr = new Proxy(arr, handler);

// const result = proxyArr.push(6);  
// console.log(proxyArr[]);          
// console.log(result);              


proxyArr[0]