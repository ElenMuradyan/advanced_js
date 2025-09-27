const profile = {
  username: "MoonQueen",
  password: "secret"
};

const handler = {
    deleteProperty(target, prop) {
        console.log(`Attempt to delete ${prop}`);
        return false;
    }
}

const proxy = new Proxy(profile, handler);

delete proxy.username;

console.log(proxy);