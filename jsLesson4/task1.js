import readline from 'readline';

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question('Enter the number to check: ', (number) => {
  function handleNum(number, callbackEven, callbackOdd) {
    if (number % 2 === 0) {
      const isNumEven = callbackEven();
    } else {
      const isNumOdd = callbackOdd();
    }
  }
  function handleOdd() {
    console.log('Number is odd');
  }
  function handleEven() {
    console.log('Number is even');
  }
  handleNum(number, handleEven, handleOdd);
  input.close();
});
