const data = {
  title: "Moon Kingdom"
};

const handler = {
    get(target, prop, receiver) {
        if(prop in target){
            return target[prop];
        }else{
            return "Not Found";
        }
    }
}

const proxy = new Proxy(data, handler);

console.log(proxy.title);
console.log(proxy.queen);