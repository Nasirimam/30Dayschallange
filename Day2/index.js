// var name = "Nasir";
// var age = 21;
// var city = "siwan";

// function displayUser(user) {
//   return "Name - " + user.name + " Age - " + user.age + "City - " + user.city;
// }

// console.log(displayUser({name:name,age:age,city:city}))

const user = { name: "Nasir", age: 21, city: "siwan" };

// const displayUser = ({ name, age, city }) => {
//   return `Name - ${name} Age - ${age} City -${city}`;
// };

// console.log(displayUser(user));

// const greet = (name = "Guest") => `Hello ${name}`;

// console.log(greet());
// console.log(greet("Nasir"));

const friend = ["nasir", "sajid"];
const newFriend = [...friend, "hero"];

console.log(newFriend);

const { name, city } = user;

console.log(`${name} live in ${city}`);
