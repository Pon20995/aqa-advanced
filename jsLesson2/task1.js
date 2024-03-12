import readline from 'readline';

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question('Будь ласка, введіть оцінку: ', (averageGrade) => {
  if (averageGrade < 0) {
    console.log('Неправильно введена оцінка');
  } else if (averageGrade < 60) {
    console.log('Незадовільно');
  } else if (averageGrade <= 70) {
    console.log('Задовільно');
  } else if (averageGrade <= 80) {
    console.log('Добре');
  } else if (averageGrade <= 90) {
    console.log('Дуже добре');
  } else if (averageGrade <= 100) {
    console.log('Відмінно');
  } else console.log('Неправильно введена оцінка');

  input.close();
});
