"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = void 0;
const Vehicle_1 = require("./Vehicle");
class Truck extends Vehicle_1.Vehicle {
    constructor(make, model, year, towingCapacity) {
        super(make, model, year);
        this.towingCapacity = towingCapacity;
    }
    performAction() {
        console.log(`${this.make} ${this.model} is towing ${this.towingCapacity} lbs!`);
    }
}
exports.Truck = Truck;
