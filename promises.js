let prom1 = new Promise((resolve, reject) => {
  let i = 10;
  if (i < 50) {
    resolve('resolved');
  } else {
    reject('rejected');
  }
});

prom1
  .then((para) => console.log(`I am ${para}`))
  .catch((para) => console.log(`I am ${para}`));

// promise is an asynchronus function
let prom2 = new Promise((resolve, reject) => {
  let val = 0;
  setTimeout(() => {
    if (val == true) {
      resolve();
    } else {
      reject();
    }
  }, 5000);
});

prom2
  .then(() => console.log('prom2 is resolved'))
  .catch(() => console.log('prom2 is rejected'));

console.log('I am after promise');
