//* Write an if statement that checks if a string is emply. *//

// method 1
var str = ""; // empty string
str === "" ? true : false;

// method 2
let a = "";
console.log(a === "");

// method 3
let str = "";
if (str == "") {
  console.log("empty");
} else {
  console.log("not empty");
}
