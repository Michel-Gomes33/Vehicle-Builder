// Wheel class that defines the properties of a wheel
class Wheel {
  // Declare properties of the Wheel class using private access modifier
  #diameter: number;
  #tireBrand: string;

  // Constructor for the Wheel class
  constructor(diameter: number = 18, tireBrand: string = "GoodYear") {
    this.#diameter = diameter;
    this.#tireBrand = tireBrand;
  }

  // Getter methods for the properties of the Wheel class
  get diameter(): number {
    return this.#diameter;
  }

  // Setter method for the diameter property
  get tireBrand(): string {
    return this.#tireBrand;
  }
}

// Export the Wheel class
export default Wheel;
