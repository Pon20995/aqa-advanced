function filterGreaterThanValue(minValue, numbersList) {
  const filteredList = [];
  numbersList.forEach((element) => {
    if (element > minValue) {
      filteredList.push(element);
    }
  });
  return filteredList;
}

const minValue = 8;
const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const filtetedArray = filterGreaterThanValue(minValue, numbersList);
console.log(filtetedArray);
