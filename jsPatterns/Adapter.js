class LegacyPrinter {
    printLegacy(text) {
        console.log(`Legacy Printing:`);
        for (let char of text) {
            console.log(char);
        }
        console.log(`Finish Legacy Printing:`);
    }
}

class Printer {
    print(text) {
        console.log(text);
    }
}

class PrintAdapter extends Printer {
    constructor() {
        super();
        this.legacyPrinter = new LegacyPrinter();
    }

    print(text) {
        this.legacyPrinter.printLegacy(text);
    }
}

const oldPrinter = new PrintAdapter();
oldPrinter.print('Hello, World!');