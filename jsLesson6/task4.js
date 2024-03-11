const person = {
  firstName: 'Karina',
  lastName: 'Potter',
  age: 25,
};

person.email = 'email@test.com';
delete person.age;
console.log(person);
