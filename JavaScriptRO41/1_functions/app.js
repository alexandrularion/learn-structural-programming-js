console.log("Javascript is running");

// declaration of the function
function main(message, a, b) {
  // function scope (a block of code)
  console.log(message);

  console.log(a + b);
}

// the call of the main function
main("The main function was called", 1000, 5);

function checkForRoles(roles) {
  // the user variable stores an object representing the current user logged in our app
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@yahoo.com",
    role: "guest",
  };

  // true / false
  const hasAccess = roles.includes(user.role); // includes is a method built-in javascript used on lists and strings

  // return the value of the hasAccess variable (true / false)
  return hasAccess;
}

// checkForRoles function returns a boolean value (true / false)
const isPriveleged = checkForRoles(["admin", "student"]);

// isPriveleged is a boolean (true / false) used for if condition
if (isPriveleged) {
  console.log("You are a priveleged user. You can access the info.");
} else {
  console.log(
    "You are not a priveleged user. You don't have access to this info."
  );
}

// function expression
const isArrayEmpty = function (list) {
  return list.length === 0;
}; // anonymous function

// the isArrayEmpty function returns "false" after checking the list length (which is 2)
console.log(isArrayEmpty(["apple", "pinapple"]));

// arrow function declaration
const sum = (a, b) => {
  // without having other code
  return a + b;
};

// arrow function declaration
const sum2 = (a, b) => a + b; // short syntax of return keyword

// call the arrow function
console.log(sum(10, 20));

// call the sum2 arrow function
console.log(sum2(1000, 20));

// arrow function with a callback as parameter
const greeting = (sum) => {
  const a = 20;
  const b = 30;

  // calling the callback function
  console.log(
    "the callback fn from greeting function was called: Result: ",
    sum(a, b)
  );
};

// call the greeeting arrow function
greeting((a, b) => {
  return a + b;
});

// a simple list of strings
const fruits = ["apple", "mango", "orange", "mango", "apple"];

// filter function on arrays that accespts a callback function to call on each element
const newFruits = fruits.filter((fruit, key) => {
  console.log(fruit, key);
  return fruit === "mango";
});

// the original list (fruits), and the filtered one (newFruits)
console.log(fruits, newFruits);
