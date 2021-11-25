function Book(title, author, pages, isRead = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}
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
const badBook = new Book("Harry Potter", "Jameson", 650, "not read");
console.log(badBook);
console.log(badBook.info());
