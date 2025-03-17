import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
  performAction(): void {
    console.log(`${this.make} ${this.model} is driving smoothly!`);
  }
}
