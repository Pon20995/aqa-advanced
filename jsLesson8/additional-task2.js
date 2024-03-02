function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number < 10) {
      resolve("Success");
    } else {
      reject("Failure");
    }
  });
}
checkNumber(5)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

checkNumber(15)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
