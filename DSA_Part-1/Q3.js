//* Write an if-else statement that checks if a number is even or odd. *//

// method 1
let num = 40;
if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// method 2
let number1 = 7;

if (Math.floor(number1 / 2) * 2 === number1) {
  console.log(`${number1} is even.`);
} else {
  console.log(`${number1} is odd.`);
}

// method 3

let number = 7;
let result = number1 % 2 === 0 ? "even" : "odd";
console.log(`${number1} is ${result}.`);
