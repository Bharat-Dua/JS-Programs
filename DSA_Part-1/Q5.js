//* Write a for loop that prints the even numbers between 1 and 10. *//

// method 1
for (var j = 2; j <= 10; j += 2) console.log(j + "");

//method 2
for (let a = 0; a <= 10; a++) {
  if (a % 2 === 0) {
    console.log(a);
  }
}
