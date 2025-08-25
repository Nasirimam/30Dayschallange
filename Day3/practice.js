const students = [
  { name: "Nasir", marks: 45 },
  { name: "sajid", marks: 50 },
  { name: "wajid", marks: 30 },
  { name: "hero", marks: 70 },
];

const name = students.map((ele) => {
  return ele.name;
});

const passed = students.filter((ele) => {
  return ele.marks >= 50;
});

const totalMarks = students.reduce((bag, ele) => {
  return bag + ele.marks;
}, 0);

const fruits = [
  "apple",
  "banana",
  "apple",
  "banana",
  "orange",
  "apple",
  "kiwi",
  "apple",
  "kiwi"
];

const count = fruits.reduce((bag, ele) => {
  bag[ele] = (bag[ele] || 0) + 1;
  return bag;
}, {});

console.log(name);
console.log(passed);
console.log(totalMarks);
console.log(count);
