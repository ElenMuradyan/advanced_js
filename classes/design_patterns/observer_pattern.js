class Subject {
    constructor () {
        this.subscribers = {};
    }

    subscribe(user, theme) {
        if(!this.subscribers[theme]){
            this.subscribers[theme] = [];
        }
        this.subscribers[theme].push(user);
    }

    unsubscribe(user, theme) {
        this.subscribers[theme] = this.subscribers[theme].filter(i => i !== user);
    }

    notify(theme, data) {
        this.subscribers[theme].forEach(user => user.notifications.push(data));
    }

    unsubscribeAll(user){
        for(let theme in this.subscribers){
            this.subscribers[theme] = this.subscribers[theme].filter(i => i !== user);
        }
    }

    showSubscribers(theme) {
        this.subscribers[theme].forEach(user => console.log(user.name));
    }
}

class User{
    constructor(name) {
        this.name = name;
        this.notifications = [];
    }

    notifyUser(data) {
        console.log(`${this.name} received: ${data}`);
    }
}

const C = new User('C');
const B = new User('B');
const A = new User('A');

const news = new Subject();

news.subscribe(A, 'sports');
news.subscribe(B, 'weather');
news.subscribe(C, 'weather');

news.notify('sports', 'New moon game!');

console.log(A.notifications);
console.log(B.notifications);
console.log(C.notifications);

news.notify('weather', 'It’s raining stardust!');

console.log(A.notifications);
console.log(B.notifications);
console.log(C.notifications);

news.subscribe(A, 'technology');
news.notify('technology', 'New lunar AI discovered!');

console.log(A.notifications);
console.log(B.notifications);
console.log(C.notifications);

