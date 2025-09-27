function add(a, b) {
  return a + b;
}

const handler = {
    apply(target, thisArg, argumentsList) {
        console.log(`Counting result for ${argumentsList.join(', ')}`);
        const result = target.apply(thisArg, argumentsList);
        console.log(`Result for ${argumentsList.join(' + ')} is ${result}`);
        return result;
    }
}

const proxy = new Proxy(add, handler);

proxy(1, 2)