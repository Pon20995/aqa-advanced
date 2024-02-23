function isObjectsEqual(obj1, obj2) {
  const keysFromObj1 = Object.keys(obj1);
  const keysFromObj2 = Object.keys(obj2);

  for (const key of keysFromObj1) {
    //Перевірка на однаковість значенб ключів
    if (typeof obj1[key] === "string" && typeof obj2[key] === "string") {
      if (obj1[key].toLowerCase() !== obj2[key].toLowerCase()) {
        return false;
      }
    }
  }
  return true;
}
const obj1 = { name: "john", age: 30, city: "new york" };
const obj2 = { name: "John", age: 30, city: "New York" };
const obj3 = { name: "Jane", age: 25, city: "Paris" };

console.log(isObjectsEqual(obj1, obj2));
console.log(isObjectsEqual(obj1, obj3));
