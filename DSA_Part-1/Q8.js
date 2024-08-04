//* Write a function that takes in a string and returns the length of the string. *//

// methd 1
function strLength(str) {
  if (typeof str !== "string") {
    return "type should be string";
  } else {
    return str.length;
  }
}
let a = strLength("32");
a;

// method 1
function getLengthOfString(str) {
  return str.length;
}
console.log(`The lenght is :${getLengthOfString("Hello World")}`);
// method 2
const getLengthOfString = (srt) => {
  return srt.length;
};
console.log(`the lenght is:${getLengthOfString("hello world")}`);

// method 3

let calculateStringLength = function (str) {
  return str.length;
};

let length3 = calculateStringLength("Hello, World!");
console.log(length3); // Output: 13

// method 4

function calculateStringLength(str) {
  return [...str].length;
}

let length4 = calculateStringLength("Hello, World!");
console.log(length4); // Output: 13
