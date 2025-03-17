import inquirer from "inquirer";
import { Car } from "./Car";
import { Truck } from "./Truck";
import { Motorbike } from "./Motorbike";
import { Vehicle } from "./Vehicle";

const vehicles: Vehicle[] = [];

async function mainMenu() {
  const { choice } = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: ["Create a new vehicle", "Select an existing vehicle", "Exit"]
    }
  ]);

  if (choice === "Create a new vehicle") {
    await createVehicle();
  } else if (choice === "Select an existing vehicle") {
    await selectVehicle();
  } else {
    console.log("Goodbye!");
    process.exit();
  }

  mainMenu();
}

async function createVehicle() {
  const { type } = await inquirer.prompt([
    {
      type: "list",
      name: "type",
      message: "Choose the type of vehicle:",
      choices: ["Car", "Truck", "Motorbike"]
    }
  ]);

  const { make, model, year } = await inquirer.prompt([
    { type: "input", name: "make", message: "Enter vehicle make:" },
    { type: "input", name: "model", message: "Enter vehicle model:" },
    { type: "number", name: "year", message: "Enter vehicle year:" }
  ]);

  if (type === "Truck") {
    const { towingCapacity } = await inquirer.prompt([
      { type: "number", name: "towingCapacity", message: "Enter towing capacity (lbs):" }
    ]);
    vehicles.push(new Truck(make, model, year, towingCapacity));
  } else if (type === "Motorbike") {
    const { bikeType } = await inquirer.prompt([
      { type: "input", name: "bikeType", message: "Enter motorbike type (e.g., Cruiser, Sportbike):" }
    ]);
    vehicles.push(new Motorbike(make, model, year, bikeType));
  } else {
    vehicles.push(new Car(make, model, year));
  }

  console.log(`${type} created successfully!`);
}

async function selectVehicle() {
  if (vehicles.length === 0) {
    console.log("No vehicles available. Please create one first.");
    return;
  }

  const { selectedVehicle } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedVehicle",
      message: "Select a vehicle:",
      choices: vehicles.map((v, i) => `${i + 1}: ${v.make} ${v.model}`)
    }
  ]);

  const index = parseInt(selectedVehicle.split(":")[0]) - 1;
  await vehicleActions(vehicles[index]);
}

async function vehicleActions(vehicle: Vehicle) {
  const { action } = await inquirer.prompt([
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
}

mainMenu();
