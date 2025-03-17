export abstract class Vehicle {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}
  
    abstract performAction(): void;
  }