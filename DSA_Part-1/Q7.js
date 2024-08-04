//* Write a function that takes in two numbers and returns their sum. *//

// method 1
function addNumbers(a, b) {
  return Number(a) + Number(b);
}
console.log("Result: ", addNumbers(8, 9));

// method 2

const addNumbers = (a, b) => a + b;

let result2 = addNumbers(5, 7);
console.log(result2); // Output: 12

// method 3

let addNumbers = function (a, b) {
  return a + b;
};

let result3 = addNumbers(5, 7);
console.log(result3); // Output: 12

// method 4

function addNumbers(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
}

addNumbers(5, 7); // Output: 5 + 7 = 12
