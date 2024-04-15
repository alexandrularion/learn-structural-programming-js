// declaration of a variable that stores an object
const person = {
  firstName: "Dorel",
  age: 30,
  profile: {
    followers: 3000,
    likes: 1000000,
  },
  getFirstName: function () {
    return this.firstName;
  },
};

// access nested properties
console.log(person.profile.followers);

// access and call the getFirstName fn
console.log(person.getFirstName());

// access properties of the person object with [] notation
console.log(person["profile"]["followers"]);

// declaration of a variable that store an explicit object
const person2 = new Object({
  firstName: "Dorel",
  age: 30,
});

// create a list of values from the object
console.log(Object.values(person)); // [ 'Dorel', 30, [Function: getFirstName] ]

// create a list of values from the object which contains the property and the value of it
console.log(Object.entries(person)); // [ [ 'firstName', 'Dorel' ], [ 'age', 30 ],[ 'getFirstName', [Function: getFirstName] ]]

// create a list of properties from the object
console.log(Object.keys(person)); // [ 'firstName', 'age', 'getFirstName' ]

// empty object
const car = {};

console.log(car); // {}

// convert the car object into list
const carList = Object.keys(car);

// check if the list generated has a length in order to determine if the object is empty or not
console.log(carList, carList.length === 0);

// counter object which includes the increment fn and value fn
const counterObj = (function () {
  let counter = 0;

  return {
    increment: function () {
      counter += 1;
    },
    decrement: function () {
      counter -= 1;
    },
    getValue: function () {
      return counter;
    },
  };
})();

console.log(counterObj.getValue()); // 0

counterObj.increment(); // increments the value with 1 from 0
counterObj.increment(); // increments the value with 1 from 1
console.log(counterObj.getValue()); // 2

counterObj.decrement();

console.log(counterObj.getValue()); // 1
