"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const Vehicle_1 = require("./Vehicle");
class Car extends Vehicle_1.Vehicle {
    performAction() {
        console.log(`${this.make} ${this.model} is driving smoothly!`);
    }
}
exports.Car = Car;
