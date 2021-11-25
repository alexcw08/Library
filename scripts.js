const tableContainer = document.getElementById("tableContainer");
let bookLibrary = [
  { title: "Jones Mac", author: "Kenny Smith", pages: 500, isRead: "not read" },
  { title: "Mostern Mos", author: "Billy Weather", pages: 200, isRead: "read" },
  { title: "Los Mos", author: "Moser Kom", pages: 120, isRead: "read" },
];

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
// console.log(bookLibrary);

bookLibrary.forEach(function (item, index) {
  // For each book, create a table row, create 4 cells with title, author, pages, and isRead field
  let tableRow = document.createElement("tr");
  let rowTitle = document.createElement("td");
  rowTitle.innerHTML = item.title;
  tableRow.append(rowTitle);

  let rowAuthor = document.createElement("td");
  rowAuthor.innerHTML = item.author;
  tableRow.append(rowAuthor);

  let rowPages = document.createElement("td");
  rowPages.innerHTML = item.pages;
  tableRow.append(rowPages);

  let rowIsRead = document.createElement("td");
  rowIsRead.innerHTML = item.isRead;
  tableRow.append(rowIsRead);

  tableContainer.append(tableRow);
  console.log(item, index);
});
