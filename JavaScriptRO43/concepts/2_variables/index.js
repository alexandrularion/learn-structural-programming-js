// 'var' -> the keyword used to create a variable
// "firstName" -> the name of the variable
// "=" -> assignment operator
// "John" -> string storing the John value
var firstName = "John";
console.log(firstName); // "John"

// Overwrite the value stored
firstName = "Will";
console.log(firstName); // "Will"

// declaration of a variable without value
var isLoading;
console.log(isLoading); // undefined

// Assign the true value to the variable
isLoading = false;
console.log(isLoading); // true

// we can not use reserved words
// check the list: https://www.w3schools.com/js/js_reserved.asp
// var class = "my_id";

occupations = ["Software Developer", "Junior Product Owner"];

const getFirstOccupation = () => {
  return occupations[0];
};

console.log(getFirstOccupation()); // "Software Developer"
console.log(occupations); // ["Software Developer", "Junior Product Owner"]
// var occupations; // not needed because it's already initialized due to hoisting
console.log(typeof occupations); // object

updateUser();

function updateUser() {
  var isLoading = true;
  console.log("updateUser", isLoading); // true
  // do a fetch request or an async operation
  isLoading = false;
  console.log("updateUser", isLoading); // false
  if (isLoading === false) {
    var isLoading = true; // this will overwrite the isLoading from the function scope
    console.log("block scope", isLoading); //true
  }
  console.log("function scope", isLoading); //true
}

// the variables created with "var" keyword  have only "function scope"
// so the variable created below within the "block scope"
// will overwrite the variable from the global scope
if (isLoading === false) {
  var isLoading = true; // this will overwrite the isLoading from the global scope
  console.log("block scope", isLoading);
}

console.log("global scope", isLoading);

// initialized the 'products' variable using 'let' keyword
let products;
console.log(products); // undefined

// assign a new array to the variable
products = [
  { name: "Tigara", quantity: 100 },
  { name: "Paine", quantity: 50 },
];
console.log(products); // [{ name: "Tigara", quantity: 100 },{ name: "Paine", quantity: 50 }]

if (products.length > 0) {
  let products = [{ name: "Cirese", quantity: 30 }];
  console.log("block scope", products); // [{ name: "Cirese", quantity: 30 }]
}
console.log("global scope", products); // [{ name: "Tigara", quantity: 100 },{ name: "Paine", quantity: 50 }]

// initialized and assigned a value to the 'pretCirese' variable using 'const' keyword
const pretCirese = 100.2394745; // 100
console.log(pretCirese);

const formatPrice = (price) => {
  const pretCirese = 30;
  console.log("block scope", pretCirese);

  return price.toLocaleString("ro-RO", {
    currency: "RON",
    style: "currency",
    minimumFractionDigits: 4,
  });
};

console.log("global scope", pretCirese);

const formatedPrice = formatPrice(pretCirese);
console.log(formatedPrice);
