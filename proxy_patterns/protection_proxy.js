class SecretInfo {
    access() {
        console.log('Very secretly Info');
        return 'Very secretly Info';
    }
}

class ProtectionProxy {
    constructor(user) {
        this.user = user;
        this.secret = new SecretInfo;
    }

    access() {
        if(this.user.isAdmin === true) {
            return this.secret.access();
        }
        return "You Are not Admin";
    }
}

const admin = { isAdmin: true };
const guest = { isAdmin: false };

const secureDataForAdmin = new ProtectionProxy(admin);
console.log(secureDataForAdmin.access()); // Access granted

const secureDataForGuest = new ProtectionProxy(guest);
console.log(secureDataForGuest.access()); // Access denied