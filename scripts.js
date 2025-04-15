const myLibrary = [
    {
        title: "Harry Potter",
        author: "J. K. Rowling",
        pages: "500",
        read: "Yes"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: "300",
        read: "No"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: "180",
        read: "Yes"
    }
];

document.addEventListener("DOMcontentLoaded", displayBooks());

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

    //Display
    displayBooks();
}


// Capture each book and display it on screen
function displayBooks () {
    const tbody = document.querySelector("tbody");

    //Loop through array
    myLibrary.forEach((book) => {
      // Create row
      const row = document.createElement("tr");
      
      //Create table data
      const dataTitle = document.createElement("td");
      dataTitle.textContent = book.title;

      const dataAuthor = document.createElement("td");
      dataAuthor.textContent = book.author;

      const dataPages = document.createElement("td");
      dataPages.textContent = book.pages;

      const dataRead = document.createElement("td");
      dataRead.textContent = book.read;

      //Append
      row.appendChild(dataTitle);
      row.appendChild(dataAuthor);
      row.appendChild(dataPages);
      row.appendChild(dataRead);
      tbody.appendChild(row);

    });
}