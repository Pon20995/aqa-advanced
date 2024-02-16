function makeCounter(num) {
  let value = num;
  return function returnHigher() {
    console.log((value += 5));
    return value;
  };
}
const counter = makeCounter(0);
counter();
counter();
counter();
counter();
