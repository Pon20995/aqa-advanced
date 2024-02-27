export class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    if (typeof newName === "string") {
      this._name = newName;
    } else {
      console.log("Name is not a string");
    }
  }

  get author() {
    return this._author;
  }
  set author(newAuthor) {
    if (typeof newAuthor === "string") {
      this._author = newAuthor;
    } else {
      console.log("Author is not a string");
    }
  }

  get year() {
    return this._year;
  }
  set year(newYear) {
    if (typeof newYear === "number" && Number.isInteger(newYear)) {
      this._year = newYear;
    } else {
      console.log("Year is not a number");
    }
  }

  printInfo() {
    console.log(
      `The ${this.name}, is written by ${this.author} in ${this.year}`
    );
  }

  static isOldest(arrayBooks) {
    let oldestBook = arrayBooks[0].year;
    for (let i = 0; i < arrayBooks.length; i++) {
      if (arrayBooks[i].year < oldestBook) {
        arrayBooks[i].year = oldestBook;
      }
    }
    return console.log("The oldest book of year:", oldestBook);
  }
}
const firstBook = new Book("Fight club", "Chuck Palahniuk", 1996);
const secondBook = new Book("A Game of Thrones", "George R. R. Martin", 1996);
const thirdBook = new Book("The Empire of the Angels", "Bernard Werber", 2000);

firstBook.printInfo();
secondBook.printInfo();
thirdBook.printInfo();
