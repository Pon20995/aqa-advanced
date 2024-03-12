import { Book } from './Book.js';

class EBook extends Book {
  constructor(name, author, year, format) {
    super(name, author, year);
    this.format = format;
  }

  get format() {
    return this._format;
  }

  set format(newFormat) {
    if (typeof newFormat === 'string') {
      this._format = newFormat;
    } else {
      console.log('Format is not a string');
    }
  }

  printInfo() {
    super.printInfo();
    console.log(`in ${this.format} format`);
  }

  static createNewEBook(book, format) {
    if (typeof format === 'string') {
      return new EBook(book.name, book.author, book.year, format);
    }
    console.log('Format is not a string');
  }
}
const firstBook = new Book('Fight club', 'Chuck Palahniuk', 1996);
const secondBook = new Book('A Game of Thrones', 'George R. R. Martin', 1996);
const thirdBook = new Book('The Empire of the Angels', 'Bernard Werber', 2000);
const eBook = new EBook("Philosopher's Stone", 'J. K. Rowling', 1997, 'PDF');
eBook.printInfo();

EBook.isOldest([firstBook, secondBook, thirdBook, eBook]);

const book = new Book(
  'Shadows of Forgotten Ancestors',
  'Mykhailo Kotsyubynsky',
  1912,
);
const newBook = EBook.createNewEBook(book, 'EPUB');
newBook.printInfo();
