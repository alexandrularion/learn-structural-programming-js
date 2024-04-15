console.log(car);

// var variable (can be modified)
var car = "Mercedes";

console.log(car);

// let variable (can be modified)
let smartphone = "Samsung";

console.log("smartphone var outside (before) fn:", smartphone);

// constant variable (cannot be modified)
const laptop = "/shop";

// TypeError: Assignment to constant variable
// laptop = "/contact";

// arrow function to get the car name
function getCarName() {
  var brand = "Opel";
  let smartphone = "Xiaomi";
  console.log(brand);

  car = "Audi";

  // modify the smartphone variable within getCarName fn
  smartphone = "Apple";

  // the new value of smartphone variable
  console.log("smartphone var inside fn:", smartphone);

  // the new value of car variable is "audi"
  return car;
}

console.log("smartphone var outside (after) fn:", smartphone);

// console.log("outside the getCarName fn:", brand);

console.log(getCarName());

// Closure
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

console.log(myFunc);

// Recursivity
function fibo(n) {
  if (n <= 1) {
    // boundary condition which stops recursive function calls
    return n;
  } else {
    return fibo(n - 2) + fibo(n - 1);
  }
}

// call the fibo function
console.log(fibo(10));

//
function fibonacciListRecursive(n, fibList = []) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    fibList = fibonacciListRecursive(n - 1, fibList);
    fibList.push(fibList[n - 1] + fibList[n - 2]);
    return fibList;
  }
}

// Exemplu de folosire:
console.log(fibonacciListRecursive(12)); // va afișa lista [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
