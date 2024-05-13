console.log("hello");

// Q1 s, use the map function with an arrow function to square each element of the array.
let arr1 = [2, 5, 8, 7, 9, 6, 3, 4, 7, 12, 24];
const square = arr1.map((square) => {
  return square ** 2;
});
console.log(square);

//Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..
// function calculateGrade(score) {
//   return score >= 90
//     ? "A"
//     : score >= 75
//     ? "B"
//     : score >= 50
//     ? "C"
//     : score >= 35
//     ? "D"
//     : "F";
// }
// console.log(calculateGrade(91));
// console.log(calculateGrade(76));

//Q3 - Create an object representing a car with properties like Company name, model,and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.
// const car = {
//   companyName: "Hundai",
//   model: "creta",
//   year: 2022,
// };
// function changeCarYear(carObject, newYear) {
//     carObject.year = newYear;
// }
// function printCarInfo({ model, year }) {
//     console.log(`Car Model: ${model}`);
//     console.log(`Car Year: ${year}`);
// }
// // Before changing the year
// printCarInfo(car);

// // Changing the car's year to 2023
// changeCarYear(car, 2023);

// // After changing the year
// printCarInfo(car);

//Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.
// arr = [
//   298, 462, 373, 252, 26, 21, 42, 114, 146, 308, 167, 165, 33, 452, 173, 279,
//   192, 323, 197, 419,
// ];
// const prime = arr.filter((prime) => {
//   // Corner case
//   if (prime <= 1) return false;

//   // Check from 2 to n-1
//   for (let i = 2; i < prime; i++) {
//     if (prime % i == 0) return false;
//   }
//   return true;
// });
// console.log(prime)

//Q5 - State different use cases of map, filter and reduce functions
//map()
// 1. Transforming Data: map is often used to transform each element of an array into a new value based on a specified transformation function. example

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map((num) => num * num);

//2. Rendering Lists: In frontend development, map is frequently used to render lists of items in UI frameworks like React or Vue.js.example

// const items = ["apple", "banana", "orange"];
// const body = document.querySelector("body");
// let ul = document.createElement("ul");
// ul.innerHTML = "";
// body.appendChild(ul);
// const itemList = items.map((item, index) => {
//   ul.innerHTML = `
//   <li key={index}>${item}</li>`;
// });

//3.Extracting Properties: It can be used to extract specific properties from an array of objects.example

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];
// const userIds = users.map((user) => user.id);

//filter()

// 1.Filtering Data: filter is used to create a new array with elements that pass a certain condition.example

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(num => num % 2 === 0);

// 2.Removing Empty Values: It can be used to remove empty or falsy values from an array.example

// const data = [0, 1, '', 'hello', null, undefined];
// const nonEmptyValues = data.filter(Boolean);

// 3.Filtering Objects: It can filter objects based on certain criteria.

// const users = [
//     { id: 1, name: 'Alice', isAdmin: true },
//     { id: 2, name: 'Bob', isAdmin: false },
//     { id: 3, name: 'Charlie', isAdmin: true }
//   ];
//   const admins = users.filter(user => user.isAdmin);

// reduce()

// 1.Aggregating Data: reduce is used to perform a calculation on each element of the array and reduce it to a single value.example

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );

// 2.Flattening Arrays: It can be used to flatten an array of arrays.

// const arrays = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const flattenedArray = arrays.reduce((acc, curr) => acc.concat(curr), []);

// 3. Grouping Data: It can be used to group elements based on a certain key.example

// const orders = [
//     { id: 1, product: 'Apple', quantity: 2 },
//     { id: 2, product: 'Banana', quantity: 3 },
//     { id: 3, product: 'Apple', quantity: 4 }
//   ];
//   const groupedOrders = orders.reduce((acc, order) => {
//     acc[order.product] = (acc[order.product] || 0) + order.quantity;
//     return acc;
//   }, {});

// Q6 - Write an asynchronous function using async-await to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/2"
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// // Call the async function
// fetchData();

// Q7.Define a nested object representing a person with properties like name, address,and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

// const person = {
//   name: "Shreekant",
//   address: {
//     street: "Rao Vihar",
//     city: "New Delhi",
//     country: "India",
//   },
// };
// // Using optional chaining to safely access phone number
// const phoneNumber = person.contact?.phone;

// console.log(phoneNumber); // Output: undefined
