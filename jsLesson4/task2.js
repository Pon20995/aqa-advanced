import readline from "readline";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Enter the number to start readout: ", (num) => {
  function func(num) {
    console.log(num);
    if (num !== 0) {
      setTimeout(function () {
        func(num - 1);
      }, 150);
    }
  }

  func(num);
  input.close();
});
