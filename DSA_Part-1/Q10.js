//* Write a function that takes in an object and returns the number of properties in the object. *//

// method 1

const obj = {
  name: "bharat",
  age: 24,
};

function count(obj) {
  let i = Object.keys(obj).length;
  return i;
}
let countLength = count(obj);
console.log(countLength);

// method 2

const countProperties = (obj) => Object.keys(obj).length;

let myObject = { a: 1, b: 2, c: 3 };
let count = countProperties(myObject);
console.log(count); // Output: 3
