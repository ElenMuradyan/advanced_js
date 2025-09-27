const user = {
  name: "Elen",
  age: 25
};

// Create proxy that logs property access

const handler = {
    get(target, prop, receiver) {
        console.log(`Accessing property "${prop}":`, target[prop]);
        return target[prop];
    }
}