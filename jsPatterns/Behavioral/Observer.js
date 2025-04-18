class Subject {
    constructor() {
        this.observers = [];
        this.messages = [];
    }

    addObserver(obs) {
        this.observers.push(obs);
    }

    removeObserver(obs) {
        const observerIndex = this.observers.indexOf(obs);
        if(obs !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    }

    addMessage(msg) {
        this.messages.push(msg);
        this.notifyObservers(msg);
    }

    notifyObservers(msg) {
        console.log('Notifying observers');
        this.observers.forEach((obs) => obs.update(msg));
    }
}

class Observer {
    constructor(id) {
        this.id = id;
        this.messages = [];
    }

    update(msg) {
        this.messages.push(msg);
        console.log(`Observer #${this.id} notified of new message: ${msg}`);
    }
}

const subject = new Subject();
const obs1 = new Observer(1);
const obs2 = new Observer(2);
const obs3 = new Observer(3);
subject.addObserver(obs1);
subject.addObserver(obs2);
subject.addObserver(obs3);

subject.addMessage('Dubu Goobins');
subject.removeObserver(obs2);
subject.addMessage('Googoo Boy!');