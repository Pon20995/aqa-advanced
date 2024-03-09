function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Ділити на 0 не можна');
  } else if (isNaN(numerator) || isNaN(denominator)) {
    throw new Error('Обидва параметри мають бути числом');
  } else {
    console.log(numerator / denominator);
  }
}

console.log('1.------------------------------');
try {
  divide(1000000, 2);
} catch (error) {
  console.error(error);
} finally {
  console.log('Робота завершена');
}

console.log('2.------------------------------');
try {
  divide(5, 0);
} catch (error) {
  console.error(error);
} finally {
  console.log('Робота завершена');
}

console.log('3.------------------------------');
try {
  divide(5, 's');
} catch (error) {
  console.error(error);
} finally {
  console.log('Робота завершена');
}
