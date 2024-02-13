import readline from "readline";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverseString(string) {
  let stringReversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    stringReversed += string[i];
  }
  return stringReversed;
}

input.question("Введіть слово: ", (string) => {
  console.log(reverseString(string));
  input.close();
});
