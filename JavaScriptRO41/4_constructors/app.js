// const list = [];
// const list3 = new Array();

// console.log(list); // []

// list.push("apple");
// list.push("etrier pentru sistem de franare");
// list.push("vand golf 4");

// console.log(list); // ["apple","etrier pentru sistem de franare","vand golf 4"]

// console.log(list.pop());

// list.forEach((item) => {
//   console.log(item); // 1. "apple" / 2. "etrier pentru sistem de franare"
// });

// function List() {
//   const data = {
//     length: 0,
//     items: {},
//   };

//   function push(item) {
//     data.items[data.length] = item;
//     data.length += 1;
//   }
//   return { items: data.items, length: data.length, push };
// }

function List() {
  this.items = {};
  this.length = 0;

  this.push = function (item) {
    this.items[this.length] = item;
    this.length += 1;
  };

  this.pop = function () {
    const item = this.items[this.length - 1];
    delete this.items[this.length - 1];
    this.length -= 1;
    return item;
  };

  this.get = function () {
    return Object.values(this.items);
  };
}

const list = new List();

console.log(list); // List { items: {}, length: 0, push: [Function (anonymous)], pop: [Function (anonymous)], get: [Function (anonymous)] }
console.log(list.length); // 0

list.push("apple"); // ['apple']
list.push("etrier pentru sistem de franare"); // ["apple", "etrier pentru sistem de franare"]
list.push("vand golf 4"); // ["apple", "etrier pentru sistem de franare", "vand golf 4"]

console.log(list.get(), list.length); // [ 'apple', 'etrier pentru sistem de franare', 'vand golf 4' ] 3

console.log(list.pop()); // 'vand golf 4'

console.log(list.get(), list.length); // ['apple', 'etrier pentru sistem de franare'] 2
console.log(list.pop()); // 'etrier pentru sistem de franare"
console.log(list.get(), list.length); // ['apple'] 1

const user = {
  firstName: "Popovici",
  lastName: "Dorel",
  age: 40,
};

const firstName = "Dorel";
const lastName = "Popovici";
const age = 40;

function updateUser(user) {
  user.firstName = "Ion"; // modifify by reference
  user.lastName = "Popovici"; // modifify by reference
  user.status = "casatorit"; // add new property
  delete user.age;
  // user = {
  //   firstName: "Ion",
  //   lastName: "Popovici",
  //   age: 20,
  // };
}

function updateUser2(firstName, lastName, age) {
  firstName = "Ion";
  lastName = "Popovici";
  age = 20;
}

console.log("\n\n", user);
console.log(firstName, lastName, age);

updateUser(user);
updateUser2(firstName, lastName, age);

console.log(user);
console.log(firstName, lastName, age);
