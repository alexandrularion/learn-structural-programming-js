// declaration of a function
function hello() {
  // function scope
  console.log("Hello world");
}

// call the hello function
hello();

// declaration of a function with parameters (input)
function getCombinedName(firstName, lastName) {
  // the output of the function
  return firstName + " " + lastName; // classic interpolation of two strings
}

// call the getCombinedName function with specific arguments
const name = getCombinedName("Vasile", "Ion"); // "Vasile" and "Ion" are the arguments of the function
console.log(name); // "Vasile Ion"

// declaration of an arrow fuction
const greeting = () => {
  console.log("Hello, John!");
};

// call the greeting arrow function
greeting(); // "Hello, John!"

// declaration of an arrow function with parameters
const sum = (a, b) => {
  return a + b; // 2 + 2
};

// call the sum arrow function with arguments
const result = sum(10, 1999);
console.log(result); // 2009

// declaration of an arrow function with parameters
const multiply = (a, b) => a * b; // return directly (a * b)

const result2 = multiply(10, 10);
console.log(result2); // 100

const users = [
  { name: "John Doe", age: 18 },
  { name: "Jane Doe", age: 20 },
  { name: "Vasile Popescu", age: 30 },
  { name: "Jane Smith", age: 40 },
  { name: "John Smith", age: 42 },
];

// const getUsersOverTwenty = (data) => data.filter(({ age }) => age > 20);
// const usersOverTwenty = getUsersOverTwenty(users);
// console.log(usersOverTwenty);

const getUsersOverTwenty = (data) => {
  const newUsers = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].age > 20) {
      newUsers.push(data[i]);
    }
  }
  return newUsers;
};
const usersOverTwenty = getUsersOverTwenty(users);
console.log(usersOverTwenty);

// function expression
const getUserInfo = function () {
  // anonymous function
  return {
    name: "John Doe",
    age: 18,
  };
};

const userInfo = getUserInfo();
console.log(userInfo);

// IIFE - Immediately Invoked Function Expression
(function (message) {
  console.log(message);
})("You are not logged in.");

// IIFE - with 'return' keyword
const result3 = (function (a, b) {
  return a * b;
})(3, 10);
console.log(result3);
