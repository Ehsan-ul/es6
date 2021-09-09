let person = {
  firstName: 'Ehsanul',
  lastName: 'Islam',
  age: 25,
};

// old method
// let fName = person.firstName,
//   lName = person.lastName,
//   age = person.age;
// console.log(fName, lName, age);

// new method
// object key er sathe newly assigned variable er name same to same thaka lagbe
let { firstName, lastName, age } = person;
console.log(firstName, lastName, age);

// or
let { firstName: fName, lastName: lName, age: myAge } = person;
console.log(fName, lName, myAge);

// ==========>>>>> function
let personFun = (para) => {
  console.log(para);

  let { firstName: fn, lastName: ln, age: a } = para;
  console.log('hi', fn, ln, a);
};

personFun(person);

// or
// ==========>>>>> function
let personFun2 = ({ firstName: fn, lastName: ln, age: a }) => {
  console.log('hello', fn, ln, a);
};

personFun2(person);
