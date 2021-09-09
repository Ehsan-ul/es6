// speard operator - object - ES8 feature

let person = {
  firstName: 'Ehsanul',
  lastName: 'Islam',
  age: 25,
};

let newPerson = { ...person, dob: '31 Oct' };

console.log(newPerson);
console.log(newPerson.age);
