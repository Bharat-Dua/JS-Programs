//*  Write a function that takes in an array and returns the length of the array. *//

// method 1

function arr(data) {
  if (Array.isArray(data)) {
    console.log("Input is an array");
    return data.length;
  } else {
    console.log("Input is not an array");
  }
}
let a = [1, 3, 4, 5, 6];
const c = arr(a);
console.log("length", arr(a));

// methos 2

const calculateArrayLength = (arr) => arr.length;

let length2 = calculateArrayLength([1, 2, 3, 4, 5]);
console.log(length2); // Output: 5

// method 3

let calculateArrayLength = function (arr) {
  return arr.length;
};

let length3 = calculateArrayLength([1, 2, 3, 4, 5]);
console.log(length3); // Output: 5

// method 4

function calculateArrayLength(arr) {
  return [...arr].length;
}

let length4 = calculateArrayLength([1, 2, 3, 4, 5]);
console.log(length4); // Output: 5

// method 5

function calculateArrayLength(arr) {
  let count = 0;
  arr.forEach(() => count++);
  return count;
}

let length5 = calculateArrayLength([1, 2, 3, 4, 5]);
console.log(length5); // Output: 5
