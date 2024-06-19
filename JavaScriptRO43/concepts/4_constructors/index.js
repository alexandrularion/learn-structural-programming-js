const randomList = ["Vand golf 4", { name: "John" }, 1000];

randomList.push("dau la schimb golf 4");

console.log(randomList); // ["Vand golf 4", { name: "John" }, 1000, "dau la schimb golf 4"];

console.log(randomList.pop()); // "dau la schimb golf 4"

console.log(randomList.length); // 3

function CustomArray() {
  let items = {}; // private state
  let length = 0; // private state

  // Add the "length" property in "this" object and make it only readable
  Object.defineProperty(this, "length", {
    get: function () {
      return length;
    },
    enumerable: true,
  });

  // Add the "values" property in "this" object and make it only readable
  Object.defineProperty(this, "values", {
    get: function () {
      return Object.values(items);
    },
    enumerable: true,
  });

  this.push = function (item) {
    items[length] = item; // { 0: value }
    length = length + 1;
  };

  this.pop = function () {
    const item = items[length - 1];
    delete items[length - 1];
    length = length - 1;
    return item;
  };
}

const fruits = new CustomArray();

console.log(fruits);
console.log(fruits.items); // undefined
console.log(fruits.values); // []

fruits.push("Vand golf 4");
fruits.push({ name: "John" });
// fruits.items[1] = "ceva";
fruits.push(1000);
fruits.push("dau la schimb golf 4");

console.log(fruits.values);
console.log(fruits.length); // 4

console.log(fruits.pop()); // "dau la schimb golf 4"
console.log(fruits.pop()); // 1000
console.log(fruits.values);
