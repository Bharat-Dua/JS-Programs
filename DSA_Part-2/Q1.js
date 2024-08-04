//*  Write a function that takes in a number and returns true if the number is even and return  false if it is an odd. *//

// method 1
function isNumber(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

let num = isNumber(2);
console.log(num);

// method 2

function isEven(number) {
  return number % 2 === 0;
}

let result1 = isEven(4);
console.log(result1); // Output: true

let result2 = isEven(7);
console.log(result2); // Output: false

// method 3

const isEven = (number) => number % 2 === 0;

let result3 = isEven(4);
console.log(result3); // Output: true

let result4 = isEven(7);
console.log(result4); // Output: false
