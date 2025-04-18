class SalesTax {
    constructor(subtotal) {
        this.subtotal = subtotal;
    }

    addTax() {
        return this.subtotal * 0.0925;
    }
}

class Shipping {
    constructor(weight) {
        this.weight = weight;
    }
    addShipping() {
        let shippingCost;
        if (this.weight < 5) {
            return 3;
        } else if (this.weight >= 5 && this.weight < 10) {
            return 5;
        } else {
            return 10;
        }
    }
}

class TotalCostFacade {
    constructor(subtotal, weight) {
        this.subtotal = subtotal;
        this.salesTax = new SalesTax(subtotal);
        this.shipping = new Shipping(weight);
    }

    getTotalCost() {
        return Math.round((this.subtotal + this.salesTax.addTax() + this.shipping.addShipping()) * 100)/100;
    }
}

const amazonPackage = new TotalCostFacade(45, 7);
console.log(amazonPackage.getTotalCost());