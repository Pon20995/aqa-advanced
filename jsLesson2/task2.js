import readline from 'readline';

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question('Будь ласка, введіть оцінку: ', (averageGrade) => {
  switch (true) {
    case averageGrade < 0:
      console.log('Неправильно введена оцінка');
      break;
    case averageGrade < 60:
      console.log('Незадовільно');
      break;
    case averageGrade <= 70:
      console.log('Задовільно');
      break;
    case averageGrade <= 80:
      console.log('Добре');
      break;
    case averageGrade <= 90:
      console.log('Дуже добре');
      break;
    case averageGrade <= 100:
      console.log('Відмінно');
      break;
    default:
      console.log('Неправильно введена оцінка');
      break;
  }

  input.close();
});
