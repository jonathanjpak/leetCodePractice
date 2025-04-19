class ChatRoom {
    constructor() {
        this.users = {};
    }

    register(user) {
        this.users[user.name] = user;
        user.chatRoom = this;
    }

    send(message, from, to) {
        if (to) {
            console.log(`✉️ ${from.name} to ${to.name}: ${message}`);
        } else {
            for (const key in this.users) {
                if(this.users[key] !== from) {
                    console.log(`📢 ${from.name} to ${key}: ${message}`);
                }
            }
        }
    }
}

class User {
    constructor(name) {
        this.name = name;
        this.chatRoom = null;
    }

    send(message, to = null) {
        this.chatRoom.send(message, this, to);
    }

    receive(message, from) {
        console.log(`${this.name} received message from ${from.name}: ${message}`);
    }
}

const chatroom = new ChatRoom();
const alice = new User('Alice');
const jpak = new User('JPak');
const erin = new User('Erin');

chatroom.register(alice);
chatroom.register(jpak);
chatroom.register(erin);

alice.send('Hey everyone!');
jpak.send('Dude Alice is here', erin);
erin.send('Yeah let\'s leave', jpak);
jpak.send('Gotta go!');
erin.send('Sorry me too!');