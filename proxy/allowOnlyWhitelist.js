function createWriteProtectedProxy (obj, allowedKeys) {
    return new Proxy(obj, {
        set(target, p, newVal, receiver) {
            if(allowedKeys.includes(p)){
                console.log(`Changed the value of ${p}`);
                return Reflect.set(target, p, newVal, receiver);
            }
            console.log(`Failed to change the value of ${p}`);
            return false;
        }
    })
}

const user = {
    name: 'Alice',
    age: 30,
    role: 'user'
};

const allowedKeys = ['name', 'age'];
const protectedUser = createWriteProtectedProxy(user, allowedKeys);

protectedUser.name = 'Elena';    
protectedUser.age = 31;          
protectedUser.role = 'admin';  

console.log(user);