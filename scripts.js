function Book(title, author, pages, isRead = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.info = () => {
    return `The ${title} is a book by ${author} and it has ${pages} pages. It is ${isRead}.`;
  };
}
const badBook = new Book("Harry Potter", "Jameson", 650, "not read");
console.log(badBook);
console.log(badBook.info());
