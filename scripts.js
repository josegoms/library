const myLibrary = [];

const formsData = document.querySelector("form");
const emptyShelf = document.querySelector(".table");

document.addEventListener("DOMContentLoaded", noBooksAdded());

formsData.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(event.target);
  const title = formData.get("title");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const read = formData.get("read");

  //Call function
  addBook(title, author, pages, read);

  //Reset forms
  form.reset();
});


// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();

}

function addBook (title, author, pages, read) {
    //Call book constructor and add to a variable
    const book = new Book(title, author, pages, read);

    //Append it to array
    myLibrary.push(book);

    //Display
    displayBooks();
}


// Capture each book and display it on screen
function displayBooks () {

    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    //Add headers
    const thead = document.querySelector("thead");
    thead.innerHTML = "";

    const messageArea = document.querySelector(".no-books-message");
    if (messageArea) {
      messageArea.remove();
    }

    if (myLibrary.length > 0) {

      //Create headers
      const row = document.createElement("tr");
      const headerTitle = document.createElement("th");
      const headerAuthor = document.createElement("th");
      const headerPages = document.createElement("th");
      const headerRead = document.createElement("th");
      const headerDelete = document.createElement("th");

      //Add scope
      headerTitle.scope = "col";
      headerAuthor.scope = "col";
      headerPages.scope = "col";
      headerRead.scope = "col";
      headerDelete.scope = "col";

      //Add content
      headerTitle.textContent = "Title";
      headerAuthor.textContent = "Author";
      headerPages.textContent = "Pages";
      headerRead.textContent = "Read";
      headerDelete.textContent = "Delete";

      //Append elements
      row.appendChild(headerTitle);
      row.appendChild(headerAuthor);
      row.appendChild(headerPages);
      row.appendChild(headerRead);
      row.appendChild(headerDelete);
      thead.appendChild(row);
    } else {
      noBooksAdded();
    }

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
      dataRead.style.cursor = "pointer"
      dataRead.addEventListener("click", () => {
        if (book.read === "Yes") {
          book.read = "No";
        } else {
          book.read = "Yes";
        }

        displayBooks();
      });

      const dataDelete = document.createElement("td");
      dataDelete.textContent = "🗑";
      dataDelete.style.cursor = "pointer";
      dataDelete.addEventListener("click", (event) => {
        deleteBook(book.id);
      });

      //Append
      row.appendChild(dataTitle);
      row.appendChild(dataAuthor);
      row.appendChild(dataPages);
      row.appendChild(dataRead);
      row.appendChild(dataDelete);
      tbody.appendChild(row);
    });
}

function deleteBook(removeBookId) {
  //Find index
  const index = myLibrary.findIndex(book => book.id === removeBookId);

  //Delete book
  if (index !== -1) {
    myLibrary.splice(index, 1);
  }

  //Check if library is empty
  if (myLibrary.length === 0) {
    const thead = document.querySelector("thead");
    thead.innerHTML = "";
    noBooksAdded();
  }

  displayBooks();
}

function noBooksAdded() {
  const messageArea = document.querySelector(".no-books-message");
  if (messageArea) {
    messageArea.remove();
  }

  const noBooks = document.createElement("p");
  noBooks.className = "no-books-message";
  noBooks.textContent = "No Books Added";
  noBooks.style.fontWeight = "700";
  noBooks.style.fontSize = "3rem";
  noBooks.style.textAlign = "center";
  noBooks.style.color = "black";
  noBooks.style.opacity = "0.1";
  emptyShelf.appendChild(noBooks);
}