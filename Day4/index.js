const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; // 50% chance
      if (success) {
        resolve("Data loaded successfully!");
      } else {
        reject("Failed to load data.");
      }
    }, 2000);
  });
};

// getData()
//   .then((data) => console.log(data)) // if resolved
//   .catch((err) => console.error(err));

// console.log(Math.random());

const print1 = async () => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("1");
      res();
    }, 1000);
  });
};

const print3 = async () => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("3");
      res();
    }, 2000);
  });
};

const print5 = async () => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("5");
      res();
    }, 3000);
  });
};

const printData = async () => {
  await print1();
  console.log("2");
  await print3();
  console.log("4");
  await print5();
  console.log("6");
};

// printData();

let newData = [];

const getFakeData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    newData = data; // store into array
  } catch (error) {
    console.log("Error:", error);
  }
};

getFakeData();

console.log(newData);
setTimeout(() => {
  if (newData.length === 0) {
    console.log("No Data");
  } else {
    console.log(newData);
  }
}, 5000);

// let users = [];

// async function getUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   users = data; // store in variable
//   console.log("Users stored:", users);
// }

// getUsers();
