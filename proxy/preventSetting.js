const settings = {
  theme: "dark"
};

const handler = {
    set(target, prop, val, receiver) {
        if(prop in target){
            target[prop] = val;
            return true;
        }else{
            console.log(`Adding new property "${prop}" is not allowed.`);
            return false;
        }
    }
}

const proxy = new Proxy(settings, handler);

proxy.theme = 'hi';
proxy.mode = 'hi';

console.log(proxy.theme);