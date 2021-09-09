let number = [2, 43, 54, 12, -3];

let maxNum = Math.max(...number);

console.log(maxNum);

// function
let person = ['Ehsan', 25];

let fun = (name, age) => {
  console.log(`I'm ${name} and ${age} years old.`);
};

fun(...person);
