function revocableProxy(obj) {
    const {proxy, revoke} = Proxy.revocable(obj, {
        get(target, prop) {
            console.log(`Accessing ${prop}`);
            return target[prop];
        }
    });

    return {session: proxy, endSession: revoke};
}

const { session, endSession } = revocableProxy({ id: 1, name: "Elena" });

console.log(session.name);

endSession();