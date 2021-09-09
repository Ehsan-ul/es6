// iterator

let i = 'Hello';
// i = [1, 2, 3, 4];
console.log(i[Symbol.iterator]);
console.log(i[Symbol.iterator]());

let iter = i[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// for getting value
// console.log(iter.next().value);
