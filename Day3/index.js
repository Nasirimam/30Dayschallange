const number = [1, 2, 3, 4, 5, 6];

const squares = number.map((ele) => {
  return ele * ele;
});

const evens = number.filter((ele) => {
  return ele % 2 !== 0;
});

const total = number.reduce((bag, ele) => {
  return bag + ele;
}, 0);

console.log(squares);
console.log(evens);
console.log(total);
