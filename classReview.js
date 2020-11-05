

class Rectangle { // blueprint

  constructor(length, width) {
    // any logic
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }

}

const myRectangle = new Rectangle(10, 5); //instance
const myRectangleTwo = new Rectangle(3, 8); //instance

const areaCopy = myRectangle.area;

areaCopy();

// 
// const callback = myRectangle.area;
// const onClick = (callback) => {
//   console.log('something was clicked');
//   callback();
// }

// onClick(myRectangle.area);

// console.log('rectangle instance , ', myRectangle);
// console.log('rectangle instance , ', myRectangleTwo);

// console.log('the area is', myRectangle.area());
// console.log('the area is ', myRectangleTwo.area());


