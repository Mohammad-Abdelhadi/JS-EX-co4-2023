// first task

let basic = {
  cash: 1000,
  current_liabilities: 500,
  //   net income
  revenues: 1000,
  expenses: 500,
  // Total assets
  liabilities: 1000,
  equity: 500,
  //   net income profit
  profit: 1000,
  sales: 500,
  //   Average
  a: 9,
  b: 7,
  c: 2,
  // Discount
  price: 150,
  discount: 0.3,
  //   age
  first_age: 19,
  second_age: 20,
  //   Exponential
  num1: 2,
  num2: 3,
  // Remainder
  reminder_one: 10,
  reminder_two: 4,
};
console.log(basic.cash / basic.current_liabilities);
console.log(basic.revenues - basic.expenses);
console.log(basic.liabilities + basic.equity);
console.log(basic.profit * basic.sales);
console.log((basic.a + basic.b + basic.c) / 3);

console.log(basic.price / basic.discount);
console.log(basic.price - basic.price * basic.discount);
console.log(basic.first_age == basic.second_age);
console.log(basic.num1 ** basic.num2);
console.log(basic.reminder_one % basic.reminder_two);
// second task
console.log("Orange"); // "Orange"

console.log(typeof 100); // "number"
console.log(typeof 73.9); // "number"
console.log(typeof NaN); // "number"
console.log(typeof "Water"); // "string"
console.log(typeof false); // "boolean"
console.log(typeof (9 != 11)); // "boolean"
console.log("Orang" + "e"); // "Orange"
console.log("Orange" - "s"); // NaN
console.log("4" + "8"); // "48"
console.log("4" - "8"); // -4
console.log("name" + 3); // "name3"
console.log("name" - 3); // NaN
console.log(82 * "word"); // NaN
console.log(1 + "hello"); // "1hello"
console.log("hello" + 1); // "hello1"
console.log(1 + true); // 2
console.log("hello" + true); // "hellotrue"
console.log(typeof Infinity); // "number"
console.log(1 == "1"); // true
console.log(1 === "1"); // false

// Last task
let string = "Welcome To Orange";
console.log(string);
console.log(string.charAt(8) + string.charAt(9).toUpperCase());
console.log(string.toUpperCase());
console.log(string.replace("Welcome To", "Hello from"));

console.log(string.split(" ")[1].toUpperCase());
console.log(string.toLocaleLowerCase());
console.log(string.length);
console.log(string + " Jordan");

console.log(`Welcome to "${string.slice(11)}"`);


let input = "cactus";
let charToReplace = "c";
let count = 0;
let output = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] === charToReplace) {
    count++;
    if (count === 2) {
      output += "*";
    } else {
      output += input[i];
    }
  } else {
    output += input[i];
  }
}

console.log(output);
;
