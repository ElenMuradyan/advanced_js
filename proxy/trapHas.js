function trapHas (obj) {
    return new Proxy(obj, {
        has(target, p) {
            if(p[0] === '_'){
                return true;
            }
            return false;
        }
    })
}

const data = {
    name: 'Alice',
    age: 30,
    _secret: 'classified'
};

const proxy = trapHas(data);

console.log('name' in proxy);     
console.log('age' in proxy);    
console.log('_secret' in proxy);  