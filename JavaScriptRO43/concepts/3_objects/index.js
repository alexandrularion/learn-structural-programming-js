// simple object created using object notation
const user = {
  // email - property
  // "john.doe@gmail.com" - value (string)
  email: "john.doe@gmail.com",
};

// accessing the "email" property using dot notation
console.log(user.email); // "john.doe@gmail.com"

// check the data type of the user variable
console.log(typeof user); // object

const user2 = new Object({
  email: "jane.doe@gmail.com",
}); // { email: "jane.doe@gmail.com" }

// check if the user2 object contains the "email" property
const hasEmail = user2.hasOwnProperty("email");
console.log(hasEmail); // true

// complex object using almost all the data types (including primitive and non-primitive)
const car = {
  brand: "",
  model: "",
  year: 2020,
  color: "",
  engine: "",
  powerInKw: 140,
  powerInHp: 187,
  hasAc: false,
  seats: 5,
  plateNumber: undefined,
  totalKm: null,
  transmission: {
    gears: 8,
    isAutomatic: true,
    type: "CVT",
  },
  infotainmentOptions: [
    "Start/Stop",
    "Distronic",
    "Lane Assist",
    "HeadUp Display",
    "Navigation",
  ],
  start: function () {
    console.log("Engine started.");
  },
  display: function () {
    this.currentPowerInKw = 60;
    this.currentPowerInHp = 90;
    return `Current Kw usage: ${this.currentPowerInKw} | Current Hp usage: ${this.currentPowerInHp}`;
  },
};

console.log(car); // {...}

// access the "year" property within car object
console.log(car.year); // 2020

const yearKey = "year";

// access the "year" property within car object
console.log(car[yearKey]);

// Convert car object to 2d array to see a pair of [key,value]
console.log(Object.entries(car)); // [["brand",""],["model", ""]...]

// Convert car object to array and extract all the values
console.log(Object.values(car)); // ["","",2020,"","",140,187, false, 5...]

// Convert car object to array and extract all the keys
console.log(Object.keys(car)); // ["brand","model","year"]

// access the "gears" property nested within car object
console.log(car.transmission.gears); // 8

// access the "gears" property nested within car object
console.log(car["transmission"]["gears"]); // 8

// access the latest item in the "infotainmentOptions" array.
console.log(car.infotainmentOptions[car.infotainmentOptions.length - 1]); // "Navigation"

car.start(); // "Engine started."

console.log(car.start); // [Function: start]

console.log(car.display()); // "Current Kw usage: 60 | Current Hp usage: 90"

// closure - nested function that accesses the local variables of the parent function
var count = (function () {
  var counter = 0; // private state

  // ....

  return {
    increment: function () {
      return (counter += 1);
    },
    decrement: function () {
      return (counter -= 1);
    },
  };
})();

console.log(count.increment());
console.log(count.increment());
console.log(count.increment());
console.log(count.decrement());
