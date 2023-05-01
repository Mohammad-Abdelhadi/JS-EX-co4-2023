//  first task
let x = 1;
for (; x <= 50; x++) {
  if (x % 2 == 0) {
    console.log(x + " is Even number");
  } else {
    console.log(x + " is Odd Number");
  }
}

// second task FIZZ,BUZZ
let i = 0;
for (; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else if ((i % 3 == 0) & (i % 5 == 0)) {
    console.log("FizzBuzz");
  } else {
    console.log(i + " This Number Not Meet The conditions");
  }
}
// 5 Task
// one
function fizzBuzz(x) {
  console.log(x);
}

fizzBuzz("fizbuzz");

// 8. Write a function that counts the existence of a specific character within a string, despite the case.
// Sample Input: (“Coding Academy by Orange”, “o”)
// Sample Output: 2
// let array=["Coding Academy By Orange"]
// let y=0;
// let sum = 0;
// function counts()
// {
// while ( array[y] == true )
// {
//     y++;
//     sum+=1;
//     console.log(sum);

// }
// }
// counts()

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      count++;
    }
  }
  return count;
}

// Example usage:
const str = "Coding Academy by Orange";
const char = "o";
const result = countChar(str, char);
console.log(result); // Output: 2

// 9 task
// 9. Write for loops that accomplish the following tasks:
// a.	Print the numbers 0 - 20, one number per line.
// b.	Print only the ODD values from 3 - 29, one number per line.
// c.	Print the EVEN numbers 12 down to -14 in descending order, one number per line.
// d.	Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
//  first solve
for (let f = 0; f < 50; f++) {
  if (f <= 20) {
    process.stdout.write(f + " ");
  }
}
for (let ff = 3; ff < 29; ff++) {
  if (ff % 3 == 0) {
    process.stdout.write(ff + " ");
  }
}
// c.	Print the EVEN numbers 12 down to -14 in descending order, one number per line.
for (let fff = 12; fff >= -14; fff -= 2) {
  if (fff % 2 == 0) {
    process.stdout.write(fff + " ");
  }
}

// d.	Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
for (let ffff = 50; ffff >= 20; ffff--) {
  if (ffff % 3 == 0) {
    process.stdout.write(ffff + " ");
  }
}

//  second solve
// let output = "";
// for (let f = 0; f <= 20; f++) {
//   output += f + " ";
// }
// console.log(output);
