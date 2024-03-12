import readline from 'readline';

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkOrder(available, ordered) {
  if (available < ordered) {
    return 'Your order is too large, we don’t have enough goods.';
  } if (ordered === 0) {
    return 'Your order is empty';
  }
  return 'Your order is accepted';
}

input.question(
  'Введіть доступну кількість товарів на складі: ',
  (available) => {
    input.question(
      'Введіть кількість одиниць товару в замовленні: ',
      (ordered) => {
        const result = checkOrder(available, ordered);
        console.log(result);
        input.close();
      },
    );
  },
);
