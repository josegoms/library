const myLibrary = [];

// Book constructor
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

function addBook (title, author, pages, read) {
    //Call book constructor and add to a variable
    const book = new Book(title, author, pages, read);

    //Add unique ID
    book.id = crypto.randomUUID();

    //Append it to array
    myLibrary.push(book);
}


// Capture each book and display it on screen
function displayBooks () {

    //Loop through array
    for (book of myLibrary) {
        
    }
}