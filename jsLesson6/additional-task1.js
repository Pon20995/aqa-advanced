function isObjectsEqual(obj1, obj2) {
  const keysFromObj1 = Object.keys(obj1);
  const keysFromObj2 = Object.keys(obj2);

  //Перевірка на довжину обʼєкта
  if (keysFromObj1.length !== keysFromObj2.length) {
    return false;
  }

  //Перевірка на однаковість назв ключів
  for (let index = 0; index < keysFromObj1.length; index++) {
    if (keysFromObj1[index] !== keysFromObj2[index]) {
      return false;
    }
  }

  for (const key of keysFromObj1) {
    //Перевірка на однаковість значень ключів
    if (typeof obj1[key] === "string" && typeof obj2[key] === "string") {
      if (obj1[key].toLowerCase() !== obj2[key].toLowerCase()) {
        return false;
      }
    }
  }
  return true;
}

const obj1 = { name: "john", age: 30, town: "new york" };
const obj2 = { name: "john", age: 30, city: "new york", zip: 12345 };
const obj3 = { name: "John", age: 30, city: "New York" };
const obj4 = { name: "Jane", age: 25, city: "Paris" };
const obj5 = { name: "john", age: 30, town: "New York" };

console.log("Result of compare obj1 and obj2: " + isObjectsEqual(obj1, obj2));
console.log("Result of compare obj1 and obj3: " + isObjectsEqual(obj1, obj3));
console.log("Result of compare obj1 and obj4: " + isObjectsEqual(obj1, obj4));
console.log("Result of compare obj1 and obj5: " + isObjectsEqual(obj1, obj5));
