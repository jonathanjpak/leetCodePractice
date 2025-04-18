class Employee {
    constructor(name, title) {
        this.name = name;
        this.title = title;
    }

    getInfo() {
        console.log(`Employee: ${this.name}, ${this.title}`);
    }
}

class Manager extends Employee {
    constructor(name, title) {
        super(name, title);
        this.reports = [];
    }

    addReport(emp) {
        this.reports.push(emp);
    }

    removeReport(emp) {
        const empIdx = this.reports.indexOf(emp);
        if (empIdx !== -1) {
            this.reports.splice(empIdx, 1);
        }
    }

    getInfo() {
        console.log(`Manager: ${this.name}, ${this.title}`);
        console.log(`===Direct Reports===`)
        for (const report of this.reports) {
            report.getInfo();
        }
    }
}

const jpak = new Employee('Jonathan Pak', 'Software Engineer');
const chase = new Employee('Chase McCarty', 'Senior Software Engineer');
const rushil = new Employee('Rushil Patel', 'Software Engineer');
const donovan = new Manager('Donovan Makund', 'Senior Manager');
donovan.addReport(jpak);
donovan.addReport(chase);
donovan.addReport(rushil);
donovan.getInfo();