// one
function smallest(array) {
  return Math.min(...array);
}

let myArray = [30, 45, 60, 7];
console.log(smallest(myArray)); // Output: 7
// two
function order(str) {
  return str.split("").sort().join("");
}

let y = "ahmadsjoiajlllllznnnnnznjjjjjjjz";
console.log(order(y)); // Output: "aaaaadhhhijjjjjjllllmnnnnnoozzzz"

// console.log(factorial(8));
// 40320
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(10)); // Output: 40320

function evenodd(n) {
  if (n % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(evenodd(6));

// 5. Remove all Odd number(s) in an array and return a new array that contains Even numbers
// only.
// Example:
// console.log(evenNum([1, 2, 3, 4, 5, 6,7,8,9]));
// [ 2, 4, 6 ,8 ]
function getEvenNumbers(arr) {
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    }
  }
  return evenArr;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: [2, 4, 6, 8]
// question Six
function stringcheck(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}

let array = ["Ayham", 3, 7, "Alaa", 13, "coding"];
console.log(stringcheck(array)); // Output: ["Ayham", "Alaa", "coding"]

// Question seven 7777

function rootsum(n) {
  if (n === 0) {
    return 0;
  } else {
    return n + rootsum(n - 1);
  }
}

console.log(rootsum(6));
// question 8
function masterarray(ourarray) {
  let newarray = [];
  let maxvalue = Math.max(...ourarray);
  let minvalue = Math.min(...ourarray);
  let lengthvalue = ourarray.length;
  let sum = 0;
  for (i = 0; i < ourarray.length; i++) {
    sum += ourarray[i];
  }
  let average = sum / ourarray.length;

  newarray.push(maxvalue, minvalue, lengthvalue, sum, average);

  return newarray;
}

let array_l = [10, 15, 100, 20, 30];
console.log(masterarray(array_l)); // Output: [100, 10]

// 10
function countWords(str) {
  const words = str.split(" ");

  return words.length;
}

console.log(countWords("hello from CodingAcademy!")); // Output: 3

// MultiplyByLength
function MultiplyByLength(arr) {
  let len = arr.length;
  let result = [];
  for (let i = 0; i < len; i++) {
    result.push(arr[i] * len);
  }
  return result;
}

console.log(MultiplyByLength([4, 2, 5])); // Output: [12, 6, 15]
//doubleChar

function doubleChar(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
}
//checkEnding
function checkEnding(str1, str2) {
  return str1.endsWith(str2);
}

console.log(checkEnding("CodingSchool", "Ac")); // Output: false

console.log(doubleChar("Coding")); // Output: CCooddiinngg

// getAbsSum
function getAbsSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.abs(arr[i]);
  }
  return sum;
}

console.log(getAbsSum([-1, -3, -5, -4, -10, 0])); // Output: 23

//
function findIndex(arr, elem) {
  return arr.indexOf(elem);
}

console.log(findIndex(["Ali", "Mazen", "Ayham", "Murad"], "Murad")); // Output: 3
