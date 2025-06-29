class Light {
    turnOn() {
        console.log('Light turn on');
    }
    turnOff() {
        console.log('Light turn off');
    }
}

class Fan {
    start() {
        console.log('Fan start');
    }
    stop() {
        console.log('Fan stop');
    }
}

class AC {
    setTemperature(...degrees) {
        console.log(`Set temperatures ${degrees} degrees`);
    }
    turnOff() {
        console.log('AC turned off');
    }
}

class TurnOnLightCommand { 
    constructor(device){
        this.device = device;
    }
    execute() {
        this.device.turnOn();
    } 
}

class TurnOffLightCommand { 
    constructor(device){
        this.device = device;
    }
    execute() {
        this.device.turnoff();
    } 
}

class StopFanCommand { 
    constructor(device){
        this.device = device;
    }

    execute() { 
        this.device.stop();
    } 
}

class StartFanCommand { 
    constructor(device){
        this.device = device;
    }

    execute() { 
        this.device.start();
    } 
}

class SetACTemperatureCommand { 
    constructor(device){
        this.device = device;
    }

    execute(...degrees) {  
        this.device.setTemperature(...degrees);
    } 
}

class ACTurnOff { 
    constructor(device){
        this.device = device;
    }

    execute() {  
        this.device.turnOff();
    } 
}

class VoiceAssistant {
    setCommand(command) {
        this.command = command;
    }

    sayCommand() {
        this.command.execute();
    }
}

const fan = new Fan();
const light = new Light();

const assistant = new VoiceAssistant();

const turnOnLight = new TurnOnLightCommand(light);
assistant.setCommand(turnOnLight);
assistant.sayCommand(); // Should turn on the light

const stopFan = new StopFanCommand(fan);
assistant.setCommand(stopFan);
assistant.sayCommand(); // Should stop the fan
