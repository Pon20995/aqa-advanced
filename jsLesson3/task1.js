import readline from 'readline';

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question('Введіть ширину прямокутника: ', (width) => {
  input.question('Введіть висоту прямокутника: ', (height) => {
    //Function Declaration:
    function getSquare(width, height) {
      return width * height;
    }
    const square = getSquare(width, height);
    console.log('Площа прямокутника 1: ', square);
    input.close();

    //Function Expression:
    const getSquareExpression = function (width, height) {
      let square = width * height;
      return square;
    };
    const square2 = getSquareExpression(5, 5);
    console.log('Площа прямокутника 2: ', square2);

    //Arrow Function:
    const getSquareArrow = (width, height) => {
      let square = width * height;
      return square;
    };
    const square3 = getSquareArrow(10, 5);
    console.log('Площа прямокутника 3: ', square3);
  });
});
