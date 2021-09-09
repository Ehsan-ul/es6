// generator bujhaite function lekhar por * sign dite hobe.
function* genFun() {
  yield 'Hi';
  yield 'Ehsanul';
  yield 'Islam';
  console.log('I am a statement');
  yield 25;
  yield true;
  yield 1000;
}

let gen = genFun();
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
