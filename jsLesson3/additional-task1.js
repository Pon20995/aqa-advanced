import readline from 'readline';

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isEven(number) {
  if (number % 2 === 0) {
    return `The ${number} is even`;
  }
  return `The ${number} is not even`;
}

input.question('Введіть число: ', (number) => {
  console.log(isEven(number));
  input.close();
});
