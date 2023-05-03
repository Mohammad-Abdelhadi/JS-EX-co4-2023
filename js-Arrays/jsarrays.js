// 1.Create an array of numbers and use the forEach() method to print each element to the
// console.

// Input: [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4, 5, 6]
let numbers = [1, 2, 3, 4, 5];
let newNumbers = [];

numbers.forEach(function (number) {
  newNumbers.push(number);
});

newNumbers.push(6);

console.log(newNumbers);
// two
let array = [1, 2, 3, 4, 5, 6];
let mappedArray = array.map((n) => n * 2);

console.log(mappedArray);
// three
// 3.Use the filter() method to create a new array containing only even numbers from an original
// array.
let originalArray = [1, 2, 3, 4, 5, 6];
let evenNumbersArray = originalArray.filter((n) => n % 2 === 0);

console.log(evenNumbersArray);

// 4.Use the reduce() method to sum up all elements in an array of numbers.
let arraytwo = [10, 20, 30, 40];
let sum = 0;

let sumOfArray = arraytwo.reduce((acc, curr) => acc + curr, sum);
console.log(sumOfArray);

// 6.Use the reverse() method to reverse the order of elements in an array.
// Example:
// Input: ["apple", "banana", "cherry"];

let arraythree = ["apple", "banana", "cherry"];
arraythree = arraythree.reverse();
console.log(arraythree);

// 7.Use the concat() method to combine two arrays into a single array.
// Example:
// Input: [1, 2, 3], [4, 5, 6];
// Output: [1, 2, 3, 4, 5, 6]
let array_first = [1, 2, 3];
let array_second = [4, 5, 6];
let sumofarrays = array_first.concat(array_second);
console.log(sumofarrays);

// 8.Use the slice() method to extract a portion of an array.
// Example:
// Input: [1, 2, 3, 4, 5, 6], 2, 4;
// Output: [1, 2, 5, 6]
let slicarray = [1, 2, 3, 4, 5, 6];
let slicedArray = slicarray.slice(0, 2).concat(slicarray.slice(4));
console.log(slicedArray);

// 9.Use the splice() method to add and remove elements from an array.
// Example:
// Input: [1, 2, 3, 4, 5], 3;
// Output: 2
// let splicearray=[1,2,3,4,5]
// let output = splicearray.splice(3);
// console.log(output);
let splicearray = [1, 2, 3, 4, 5];
let output = splicearray.splice(2, 1);
console.log(output); // output is 3

// 10.Use the indexOf() method to find the index of a specific element in an array.
// Example:
// Input: [1, 2, 3, 4, 5];
// Output: "1,2,3,4,5"
let indexarray = [1, 2, 3, 4, 5];
for (let i = 0; i < indexarray.length; i++) {
  let output = indexarray.indexOf(indexarray[i]);
  console.log(output);
}
// 11.Use the join() method to convert an array to a string.
// Example:
// Input: "1,2,3,4,5";
// Output: [1, 2, 3, 4, 5]
let string = [1, 2, 3, 4, 5];
console.log(string.join(","));

// 12.Use the split() method to convert a string to an array.
// Example:
// Input: [1, 2, 3, 4, 5];
// Output: 5

let array_four = "1, 2, 3, 4, 5";
console.log(array_four.split(","));

// 13.Use the length property to find the number of elements in an array.
// Example:
// Input: [1, 2, 3, 4, 5];
// Output: 1, 2, 3, 4, 5

let array_five = [1, 2, 3, 4, 5];
console.log(array_five.length);

// 14.Use the for...of loop to iterate through an array.
// Example:
// Input: [1, 2, 3, 4, 5];
// Output: 1, 2, 3, 4, 5
let array_six = [1, 2, 3, 4, 5];
let arraylop = 0;
for (let i = 0; i < array_six.length; i++) {
  arraylop = array_six[i];
  console.log(arraylop);
}

// 15.Use the for...in loop to iterate through the indexes of an array.
// Example:
// Input: [1, 2, 3, 4, 5];
// Output: 1, 2, 3, 4, 5

let array_seven = [1, 2, 3, 4, 5];
for (let index in array_seven) {
  console.log(array_seven[index]);
}
// //
// 16.Use the Array.isArray() method to check if an object is an array.
// Example:
// Input: [1, 2, 3, 4, 5];
// Output: true
let array_nine = [1, 2, 3, 4, 5];
console.log(Array.isArray(array_nine)); // true
console.log(Array.isArray(2)); // false

// 17.Use the Array.from() method to convert an array-like object to an array.
// Example:
// Input: {0: "a", 1: "b", 2: "c", length: 3};
// Output: ["a", "b", "c"]
let arrayLikeObj = { 0: "a", 1: "b", 2: "c", length: 3 };
let newArray = Array.from(arrayLikeObj);
console.log(newArray); // Output: ["a", "b", "c"]

// 18.Use the Array.of() method to create an array with a set of elements.
// Example:
// Input: 1, 2, 3;
// Output: [1, 2, 3]
let arr = Array.of(1, 2, 3); // creates an array [1, 2, 3]
console.log(arr);

// 19
let array11 = [1, 2, 3, 4, 5];
array11.fill(0, 0, 3);
console.log(array11); // Output: [0, 0, 0, 4, 5]

// 20
let array12 = [1, 2, 3, 4, 5];
array12.copyWithin(1, 3); // copies elements from index 3 to the end of the array to index 1
console.log(array12); // Output: [1, 4, 5, 4, 5]

let array13 = [1, 2, 3, 4, 5];
array13.copyWithin(0, 1, 4);
console.log(array13); // Output: [4, 5, 3, 4, 5]
//
