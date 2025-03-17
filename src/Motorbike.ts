import { Vehicle } from "./Vehicle";

export class Motorbike extends Vehicle {
  constructor(
    make: string,
    model: string,
    year: number,
    public type: string // e.g., "Cruiser", "Sportbike"
  ) {
    super(make, model, year);
  }

  performAction(): void {
    console.log(`${this.make} ${this.model} (${this.type}) is revving its engine!`);
  }
}
