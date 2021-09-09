let number = [2, 3, 4];

// new array of number
// let square = (number) => number ** 2;
let squareNum = number.map((number) => number ** 2);
console.log(squareNum);

// not an array
let s = number.forEach((item) => {
  item **= 2;
  console.log(item);
});
