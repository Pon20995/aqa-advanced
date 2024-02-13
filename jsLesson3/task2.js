function ageCheck(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log("The person of 15 is adult: ", ageCheck(15));
console.log("The person of 25 is adult: ", ageCheck(25));
