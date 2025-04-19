class General {
    constructor(name, strategy) {
        this.name = name;
        this.strategy = strategy;
    }

    executeStrategy() {
        console.log(`General ${this.name} executes ${this.strategy.execute()} strategy!`)
    }
}

class Strategy {
    constructor(plan) {
        this.plan = plan;
    }

    execute() {
        return this.plan;
    }
}

const ike = new General('Dwight D. Eisenhower', new Strategy('land pincer move'));
ike.executeStrategy();
const macarthur = new General('Douglas A. MacArthur', new Strategy('nuke North Korea'));
macarthur.executeStrategy();