// First Question
// First One
let array = ["Coding", "Academy", "by", "Orange"];
console.log(array.concat("Jordan"));

// second one
console.log(array.slice(0, 2));

// third one
array.unshift("Welcome", "To");
console.log(array);
// 4th one
let arrayy = ["Coding", "Academy", "by", "Orange"];

arrayy.shift();
arrayy.shift();

console.log(arrayy);

// Output: “Coding Academy By Orange”
let array_one = ["Coding", "Academy", "by", "Orange"];
array_one = array_one.join(" ");
console.log(array_one);

//Output: [“Coding”, “Academy”, “By”, “Orange”]
let another_array = ["Coding", "Academy", "by", "Orange"];
console.log(another_array);
//
let last_array = ["Coding ", "Academy", "By", "Orange"];
// Output: [“Coding”, “Orange”]
console.log(last_array[0] + last_array[last_array.length - 1]);
last_array.splice(1, 2);
console.log(last_array);
// قطع بعدين اطبع
// اطبعلي الاشي المقطوع console.log(last_array.splice(1,2));

// Second Question
let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];
// احذف اخر عنصر
vegetables.pop();
console.log(vegetables);
// احذف اول عنصر
fruit.shift();
console.log(fruit);

let frururuit = ["banana", "apple", "orange", "watermelon"];
let index = frururuit.lastIndexOf("orange");
console.log(index);

frururuit.push(index);
console.log(frururuit);
let lengthofarray = vegetables.length;
console.log(vegetables.length);

var vegetables_two = ["carrot", "tomato", "pepper", "lettuce"];
var length = vegetables_two.length;
vegetables_two.push(length);
console.log(vegetables_two); // Output: ["carrot", "tomato", "pepper", "lettuce", 4]

let array_ofveg = ["carrot", "tomato", "pepper", "lettuce"];
let array_offruit = ["banana", "apple", "orange", "watermelon"];

let concatarray = [...array_offruit, ...array_ofveg];

console.log(concatarray); // Output: ["banana", "apple", "orange", "watermelon", "carrot", "tomato", "pepper", "lettuce"]

// Remove 2 elements from the new array starting at index 4
concatarray.splice(4, 2);
console.log(concatarray); // Output: ["banana", "apple", "orange", "watermelon", "pepper", "lettuce"]

concatarray = concatarray.reverse(); // reverse the array
console.log(concatarray);

let concatstring = concatarray.toString();
console.log(concatstring); // Output: "lettuce pepper watermelon orange apple banana"
// Write a function that converts the first seven digits of a mobile phone number to a hidden form.
// Sample Input: 0776807777
// Sample Output: *******777
function array(x) {
  x.toString();
  console.log(x);
}
let x = "orange jordan";
array(x);
