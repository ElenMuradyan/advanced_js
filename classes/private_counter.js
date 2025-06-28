class Counter {
    #count = 0;
    increment() {
        this.#count++;
    }

    decrement() {
        this.#count--;
    }

    value() {
        return this.#count;
    }
}

const c = new Counter(0);
c.increment();
c.increment();
console.log(c.value());   // 2
c.decrement();
console.log(c.value());   // 1


class User {
    static totalUsersCount = 0;
    constructor(name) {
        User.totalUsersCount++;
        this._name = name;
    }

    static totalUsers() {
        return User.totalUsersCount;
    }
}

const u1 = new User("A");
const u2 = new User("B");
console.log(User.totalUsers()); // 2
