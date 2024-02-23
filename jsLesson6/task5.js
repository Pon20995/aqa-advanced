let users = [
  { name: "John", lastName: "Harner", age: 24 },
  { name: "Kate", lastName: "Loomer", age: 35 },
  { name: "Jimm", lastName: "Perry", age: 64 },
];

for (const { name, lastName, age } of users) {
  console.log(`Name: ${name}, Last Name: ${lastName}, Age: ${age}`);
}
