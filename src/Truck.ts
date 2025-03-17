import { Vehicle } from "./Vehicle";

export class Truck extends Vehicle {
  constructor(
    make: string,
    model: string,
    year: number,
    public towingCapacity: number
  ) {
    super(make, model, year);
  }

  performAction(): void {
    console.log(`${this.make} ${this.model} is towing ${this.towingCapacity} lbs!`);
  }
}
