//* Write a for loop that prints the odd numbers between 1 and 10. *//

// method 1
for (var k = 1; k < 10; k += 2) console.log(k + "");

// method 2

for (let a = 0; a <= 10; a++) {
  if (a % 2 !== 0) {
    console.log(a);
  }
}
