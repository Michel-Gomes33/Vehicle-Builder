"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = require("inquirer");
const Car_1 = require("./Car");
const Truck_1 = require("./Truck");
const Motorbike_1 = require("./Motorbike");
const vehicles = [];
function mainMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        const { choice } = yield inquirer_1.default.prompt([
            {
                type: "list",
                name: "choice",
                message: "What would you like to do?",
                choices: ["Create a new vehicle", "Select an existing vehicle", "Exit"]
            }
        ]);
        if (choice === "Create a new vehicle") {
            yield createVehicle();
        }
        else if (choice === "Select an existing vehicle") {
            yield selectVehicle();
        }
        else {
            console.log("Goodbye!");
            process.exit();
        }
        mainMenu();
    });
}
function createVehicle() {
    return __awaiter(this, void 0, void 0, function* () {
        const { type } = yield inquirer_1.default.prompt([
            {
                type: "list",
                name: "type",
                message: "Choose the type of vehicle:",
                choices: ["Car", "Truck", "Motorbike"]
            }
        ]);
        const { make, model, year } = yield inquirer_1.default.prompt([
            { type: "input", name: "make", message: "Enter vehicle make:" },
            { type: "input", name: "model", message: "Enter vehicle model:" },
            { type: "number", name: "year", message: "Enter vehicle year:" }
        ]);
        if (type === "Truck") {
            const { towingCapacity } = yield inquirer_1.default.prompt([
                { type: "number", name: "towingCapacity", message: "Enter towing capacity (lbs):" }
            ]);
            vehicles.push(new Truck_1.Truck(make, model, year, towingCapacity));
        }
        else if (type === "Motorbike") {
            const { bikeType } = yield inquirer_1.default.prompt([
                { type: "input", name: "bikeType", message: "Enter motorbike type (e.g., Cruiser, Sportbike):" }
            ]);
            vehicles.push(new Motorbike_1.Motorbike(make, model, year, bikeType));
        }
        else {
            vehicles.push(new Car_1.Car(make, model, year));
        }
        console.log(`${type} created successfully!`);
    });
}
function selectVehicle() {
    return __awaiter(this, void 0, void 0, function* () {
        if (vehicles.length === 0) {
            console.log("No vehicles available. Please create one first.");
            return;
        }
        const { selectedVehicle } = yield inquirer_1.default.prompt([
            {
                type: "list",
                name: "selectedVehicle",
                message: "Select a vehicle:",
                choices: vehicles.map((v, i) => `${i + 1}: ${v.make} ${v.model}`)
            }
        ]);
        const index = parseInt(selectedVehicle.split(":")[0]) - 1;
        yield vehicleActions(vehicles[index]);
    });
}
function vehicleActions(vehicle) {
    return __awaiter(this, void 0, void 0, function* () {
        const { action } = yield inquirer_1.default.prompt([
            {
                type: "list",
                name: "action",
                message: `What do you want to do with ${vehicle.make} ${vehicle.model}?`,
                choices: ["Perform Action", "Go Back"]
            }
        ]);
        if (action === "Perform Action") {
            vehicle.performAction();
        }
    });
}
mainMenu();
