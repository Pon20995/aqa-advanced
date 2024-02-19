let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];

// implementation without .filter
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log(evenNumbers);

// implementation with .filter
let evenNumbers2 = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers2);
