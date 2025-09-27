const person = {
  name: "Leo"
};

const handler = {
    set(target, property, val){
        if(property in target && typeof target[property] !== typeof val){
            throw new Error("Not Right data type");
        }else{
            target[property] = val;
            return true;
        }
    }
} 

const proxy = new Proxy(person, handler);

proxy.name = "Areg";

console.log(proxy.name);

