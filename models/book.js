let books = [
  {
    id: 1,
    title: 'Book 1',
    isbn: '978-0062315007',
    publishedDate: '1988-01-01',
    author: 'Paulo Coelho',
  },
  {
    id: 2,
    title: 'Book 2',
    isbn: '978-1234445667',
    publishedDate: '1943-04-06',
    author: 'ABC',
  },
  {
    id: 3,
    title: 'Book 3',
    isbn: '978-0102938342',
    publishedDate: '2003-03-18',
    author: 'DEFFFF',
  }
];

let bookCount = 4;

class Book {
  constructor(id, title, isbn, publishedDate, author) {
    this.id = id;
    this.title = title;
    this.isbn = isbn;
    this.publishedDate = publishedDate;
    this.author = author;
  }

  static getAll() {
    return books;
  }

  static getBookById(id) {
    const prod = books.find(book => book.id === id);
    if (!prod) {
      throw new Error('Book not found');
    }
    return prod;
  }

  save() {
    this.id = bookCount++;
    books.push(this);
    return this;
  }

  update(id) {
    const index = books.findIndex(book => book.id === id);
    if (index > -1) {
      books[index] = this;
      return this;
    } else {
      throw new Error('Book not found');
    }
  }

  static deleteBookById(id) {
    const index = books.findIndex(book => book.id === id);
    if (index > -1) {
      bookCount--;
      books.splice(index, 1);
    } else {
      throw new Error('Book not found');
    }
  }

}

module.exports = Book;
