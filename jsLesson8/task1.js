import readline from "readline";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question(" Введіть текст: ", (text) => {
  input.question("Введіть час у міллісекундах: ", (time) => {
    function showTextAfterTime(text, time) {
      function showText() {
        return console.log(text);
      }
      setTimeout(showText, time);
    }
    showTextAfterTime(text, time);
    input.close();
  });
});
