import readline from "readline";
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//for loop
input.question("Будь ласка, введіть число від 1 до 10: ", (number) => {
  if (number > 0 && number <= 10) {
    if (Number.isInteger(parseFloat(number))) {
      for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(number + " " + "x " + i + " = " + result);
      }
    } else {
      console.log("Введене число не ціле.");
    }
  } else {
    console.log("Число має бути від 1 до 10, спробуйте знову.");
  }
  input.close();
});
