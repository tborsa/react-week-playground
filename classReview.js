
class Rectangle {
  // called once when the class is used or (instantiated)
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }

}

const longRectangle = new Rectangle(100, 10);

console.log('longRectangle', longRectangle.area());


// characteristics/properties
// behaviour

class Car {
  constructor(model, brand, engineSize, fuel) {
    this.model = model;
    this.brand = brand;
    this.engine = engineSize;
    this.fuel = fuel;
  }

  start() {

  }

  honkHorn() {

  }
}

const myCar = new Car('matrix', 'toyota', '1200', 'gas');
