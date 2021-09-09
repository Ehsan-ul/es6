let names = ['sajjad', 'nasir', 'maruf'];

function customIterator(arr) {
  let i = 0;

  return {
    next: function () {
      return i < arr.length ? { value: arr[i++], done: false } : { value: undefined, done: true };
    },
  };
}

let res = customIterator(names);
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());

