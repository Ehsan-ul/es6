// let a = Symbol();
// let b = Symbol();
// console.log(a == b); // false
// console.log(a === b); // false

// Symbol used in object

let a = Symbol;
let person = {
  name: 'Ehsan',
  age: 15,
  [a]: 'Hello World',
};

// Symbol kohono ekta object er property hote pare na
console.log(person);
console.log(Object.getOwnPropertyNames(person));

// object keys
console.log(Object.keys(person));

// object er vetor kono symbol thakle setar access nibo jevabe-
console.log(Object.getOwnPropertySymbols(person));

console.log(JSON.stringify(person));

// ========
for (x in person) {
  console.log(x);
}


// =========
let sym1, sym2;
sym1 = Symbol('Hello');
sym2 = Symbol('World');

console.log(sym1, sym2);
