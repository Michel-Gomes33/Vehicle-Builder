"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorbike = void 0;
const Vehicle_1 = require("./Vehicle");
class Motorbike extends Vehicle_1.Vehicle {
    constructor(make, model, year, type // e.g., "Cruiser", "Sportbike"
    ) {
        super(make, model, year);
        this.type = type;
    }
    performAction() {
        console.log(`${this.make} ${this.model} (${this.type}) is revving its engine!`);
    }
}
exports.Motorbike = Motorbike;
