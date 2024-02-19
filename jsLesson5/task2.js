let numbers = [1, 2, 3, 4, 5];

// implementation without .map
let numbersNew = [];
for (let i = 0; i < numbers.length; i++) {
  numbersNew.push(i * numbers[i]);
}
console.log(numbersNew);

// implementation with .map
let numbersNew1 = numbers.map((x, i) => x * i);
console.log(numbersNew1);
