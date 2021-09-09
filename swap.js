let a = 10,
  b = 20;
console.log(`========== old method
Before swapping:
a = ${a} and b = ${b}`);

// old method
let temp = a;
a = b;
b = temp;

console.log(`After swapping:
a = ${a} and b = ${b}`);

// new method
a = 30;
b = 40;

console.log(`\n\n========== new method
Before swapping:
a = ${a} and b = ${b}`);

[b, a] = [a, b];
console.log(`After swapping:
a = ${a} and b = ${b}`);
