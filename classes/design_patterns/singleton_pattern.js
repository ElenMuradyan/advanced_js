class ConfigManager {
    constructor() {
        if(ConfigManager.instance){
            return ConfigManager.instance;
        }
        this.config = {};
        ConfigManager.instance = this;
    }

    set(key, val) {
        this.config[key] = val;
    }

    get(key) {
        return this.config[key];
    }
}

class Logger {
    constructor() {
        if(Logger.instance){
            return Logger.instance;
        }
        Logger.instance = this;
    }
}

class DatabaseConnection {
    constructor() {
        if(DatabaseConnection.instance){
            return DatabaseConnection.instance;
        }
        DatabaseConnection.instance = this;
    }
}

class NotificationService {}

class ServiceFactory {
    static getService(type){
        switch(type) {
            case('logger'):
                return new Logger();
            case('databaseConnection'):
                return new DatabaseConnection();
            case('notificationService'):
                return new NotificationService();
            default:
                throw Error('Service not found.');
        }
    }    
}