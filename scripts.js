let bookLibrary = [];

// Book constructor
function Book(title, author, pages, isRead = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}
// Book prototype info function
Book.prototype.info = function () {
  return (
    "The " +
    this.title +
    " is a book by " +
    this.author +
    " and it has " +
    this.pages +
    " pages. It is " +
    this.isRead +
    "."
  );
};
// Adding book to library
function addToLibrary() {
  let title = window.prompt("Enter a book title");
  let author = window.prompt("Enter the book's author");
  let pages = window.prompt("Enter the amount of pages");
  let isRead = window.prompt("Have you read the book or not");

  let newBook = new Book(title, author, pages, isRead);
  bookLibrary.push(newBook);
  return newBook.info();
}
//Testing
