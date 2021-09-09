// set er majhe duplicate kono data rakha jabe na
// set er majhe array and object rakhka jay
// set er value and key dui tai same thake

let mySet1 = new Set([1, 3, 'ehsan', 4]);
mySet1.add('hello');
mySet1.add(3); // 3 add hobe an. cz 3 already set er vetore ache
// mySet1.delete('ehsan');
// mySet1.clear();

console.log(mySet1);

console.log(mySet1.has(1));
console.log(mySet1.has(10));
console.log(mySet1.size);

console.log('=============================\n');

for (x of mySet1) {
  console.log(x);
}

// Entries
console.log('\n============ entries ===========\n');
// set er value and key dui tai same thake
let iter = mySet1.entries();
console.log(iter);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// for loop on entries
console.log('\n======= entries with for loop ======\n');
for (x of mySet1.entries()) {
  console.log(x);
}

// for loop keys
console.log('\n======= set keys =======\n');
for (x of mySet1.keys()) {
  console.log(x);
}

// for loop values
console.log('\n======= set values ======\n');
for (x of mySet1.values()) {
  console.log(x);
}

// spread operator use kore set er key gulo k array banano
console.log(
  '\n========= make an array with set keys using spread operator =======\n'
);

let setIter = [...mySet1.keys()];
console.log(setIter);
