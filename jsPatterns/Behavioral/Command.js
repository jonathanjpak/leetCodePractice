// Receiver
class Light {
    constructor() {
        this.isLightOn = false;
    }

    turnOn() {
        if(!this.isLightOn) {
            this.isLightOn = true;
            console.log('Light is on!');
        } else {
            console.log('Light is already on!');
        }
    }

    turnOff() {
        if(this.isLightOn) {
            this.isLightOn = false;
            console.log('Light is off!');
        } else {
            console.log('Light is already off!');
        }
    }

    getInfo() {
        this.isLightOn ? console.log('Light is currently on.') : console.log('Light is currently off.');
    }
}

// Command Interface
class Command {
    execute() {

    }
    undo() {

    }
}

class TurnOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOn();
    }

    undo() {
        this.light.turnOff();
    }
}

class TurnOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOff();
    }

    undo() {
        this.light.turnOn();
    }
}

// Invoker
class RemoteControl {
    constructor() {
        this.command = null;
    }

    setCommand(command) {
        this.command = command;
    }

    pressButton() {
        this.command.execute();
    }

    pressUndo() {
        this.command.undo();
    }
}

const light = new Light();
const on = new TurnOnCommand(light);
const off = new TurnOffCommand(light);
const remote = new RemoteControl();
remote.setCommand(on);

remote.pressButton();
light.getInfo();
remote.pressButton();
remote.pressUndo();
light.getInfo();

remote.setCommand(off);
remote.pressUndo();
remote.pressButton();