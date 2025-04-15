function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    if (read === true) {
      return `${title} by ${author}, ${pages}, already read.`
    } else {
      return `${title} by ${author}, ${pages} pages, not read yet.`
    }
  }
}

const book = new Book("The Hobbit", "J.R.R Tolkien", "295", false);

console.log(book.info());
