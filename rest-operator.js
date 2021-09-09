let fruits = [
  'Apple',
  'Mango',
  'Pine-Apple',
  'Guava',
  'Papaya',
  'Orange',
  'Coconut',
];

let [, f2, , ...f4] = fruits;
let newFruits = [f2, f4];
console.log(newFruits);

// rest operator on object
let person = {
  fName: 'Ehsanul',
  lName: 'Islam',
  age: 25,
};

var { fName } = person;
console.log(fName);

// ekhane lname theke porer sob kichu ekta object hoye gese
var { fName, ...lName } = person;
console.log(fName, lName);

// rest operator on function
let fun = (name, ...num) => {
  // ...num is a rest operator: cz eta parameter
  console.log(name);
  console.log(num);
  console.log(num[1]);
};

fun('Ehsan', 20, 30, 40, 50);
let n = [3, 5, 6, 8];

//...n is a spread operator: cz eta argument
fun('Sajjad', ...n);
