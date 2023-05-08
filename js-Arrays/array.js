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

concatarray.splice(4, 2);
console.log(concatarray); // Output: ["banana", "apple", "orange", "watermelon", "pepper", "lettuce"]

concatarray = concatarray.reverse(); // reverse the array
console.log(concatarray);

let concatstring = concatarray.toString();

console.log(concatstring); // Output: "lettuce pepper watermelon orange apple banana"
// Write a function that converts the first seven digits of a mobile phone number to a hidden form.
// Sample Input: 0776807777
// Sample Output: *******777
function stringToArray(str) {
  let words = str.split(" ");

  return words;
}

let str = "Orange Jordan";
let arr = stringToArray(str);
console.log(arr); // Output: ["Orange", "Jordan"]

// 0776807777
// array = coding orange academy

function capitalizeFirstLetter(strr) {
  let words = strr.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(" ");
}

// Example usage:
let strr = "the quick brown fox jumps over the lazy dog";
let capitalizedStr = capitalizeFirstLetter(strr);
console.log(capitalizedStr); // Output: "The Quick Brown Fox Jumps Over The Lazy Dog"

// 2. Write a function that converts the first seven digits of a mobile phone number to a hidden form.
// Sample Input: 0776807777
// Sample Output: *******777
function hideNumbers(string) {
  let slicestartnumbers = string.slice(0, 7);
  let hidenumbers = slicestartnumbers.replace(/./g, "*");
  let result = string.replace(slicestartnumbers, hidenumbers);
  console.log(result);
}

hideNumbers("0776807777");
// 3. Write a function that converts an email address to a hidden form.
// Sample Input: orange_academy@orange.jo
// Sample Output: orange...@orange.com
function hideemail(email) {
  let split_Email = email.split("@");

  let split_username = split_Email[0].slice(0, 6);
  let hide = split_username + "..." + "@" + split_Email[1];
  console.log(hide);
}
hideemail("orange_coding@orange.com");

// 6. Write a function that flips a number.
// Sample Input: 92485
// Sample Output: 58429

function reverseString(str) {
  let reversedStr = str.split("").reverse().join("");
  console.log(reversedStr);
}

reverseString("07827193989");

// 7. Write a function that swaps the value of 2 variables in at least three ways.
// Sample Input: a=3, b=4
// Sample Output: a=4, b=3

function swap1(a, b) {
  let temp = a;
  a = b;
  b = temp;
  console.log(a, b);
}

let x = "hello";
let y = "world";
swap1(x, y); // Output: "world hello"
// 8. Write a function that removes an indexed character from a string.
// Sample Input: (“Orange”, 3)
// Sample Output: Orage
function remove_array(x) {
  x = [x];
  x = x[0].split("");
  x.splice(3, 1);

  console.log(x);
}
remove_array("orange");

// mrege two
let str1 = "lora";
let str2 = "inge";
function merge(str1, str2) {
  return str1.slice(1) + str2.slice(1);
}
console.log(merge(str1, str2));

// 10. Write a function that ensures a specific character appears in a string's first or last position.
function check(letter, string) {
  return string.includes(letter);
}

console.log(check("o", "orange")); // Output: true
console.log(check("z", "orange")); // Output: false
// 11. Write a function that takes a string and returns every word in the string as an array element.
// Sample Input: “Coding Academy by Orange”
// Sample Output: [“Coding”, “Academy”, “By”, “Orange”]

ourarray = "Coding Academy By orange";
function checkfunc() {
  let check = ourarray.split(" ");

  console.log(check);
}
checkfunc(ourarray);

// 12. Write a function that takes a string and reorders the characters alphabetically.
// Sample Input: “Orange”
// Sample Output: “aegnor”

function alpha(arr) {
  let sorted = arr[0].split("").sort().join("");
  console.log(sorted);
}

let test = ["orange"];
alpha(test);
