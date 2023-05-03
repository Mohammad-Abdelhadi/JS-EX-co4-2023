//  one
let object = { name: "Adam", age: 25, gender: "male" };
console.log(`${object.name} ${object.age} ${object.gender}`);
// two
let person = { name: "Adam", age: 25 };
person.gender = "male";
console.log(person); // Output: { name: "Adam", age: 25, gender: "male" }

// three
let newobj = {
  name: "Adam",
  age: 25,
};
newobj.anothername = "Mohammad";
newobj["gender"] = "male";

console.log(newobj); // Output: { name: "Adam", age: 25, gender: "male" }

// four
const person1 = { name: "Adam", age: 25 };
console.log(person1.name); // Output: "Adam"

// five
const person2 = { name: "Adam", age: 25 };
console.log(person2["name"]); // Output: "Adam"
// six
let person10 = { name: "Adam", age: 25, gender: "male" };

for (let prop in person10) {
  console.log(`${prop}: ${person10[prop]}`);
}
// Output: name: Adam, age: 25, gender: male

// seven
let person3 = { name: "Adam", age: 25, gender: "male" };

let keys = Object.keys(person3);
console.log(keys); // Output: ["name", "age", "gender"]
// eight
let person4 = { name: "Adam", age: 25, gender: "male" };

let values = Object.values(person4);
console.log(values); // Output: ["Adam", 25, "male"]

// nine
let person5 = { name: "Adam", age: 25, gender: "male" };

let entries = Object.entries(person5);
console.log(entries); // Output: [["name", "Adam"], ["age", 25], ["gender", "male"]]

// ten
let person6 = { name: "Adam", age: 25 };
let moreInfo = { gender: "male" };

let newPerson = Object.assign(person6, moreInfo);
console.log(newPerson); // Output: { name: "Adam", age: 25, gender: "male" }

// eleven
let person7 = { name: "Adam", age: 25 };
Object.freeze(person7);
// هاي الفنكشن بتجمد الاوبجكت يعني لو حاولت اضيف او احذف منه مش راح يزبط
person7.age = 30;
console.log(person7); // Output: { name: "Adam", age: 25 }
// last one
let person8 = { name: "Adam", age: 25 };
Object.seal(person8);
person8.age = 30;
person8.gender = "male";
console.log(person8); // Output: { name: "Adam", age: 30 }
// object.seal
// بقدر اغير بالـفاليو الموجودة
//  بس ما بقدر اضيف عليه فاليو جديدة
