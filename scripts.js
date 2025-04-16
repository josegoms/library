const myLibrary = [];

const formsData = document.querySelector("form");

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

      const dataDelete = document.createElement("td");
      dataDelete.value = book.id;
      dataDelete.textContent = "🗑";

      //Append
      row.appendChild(dataTitle);
      row.appendChild(dataAuthor);
      row.appendChild(dataPages);
      row.appendChild(dataRead);
      tbody.appendChild(row);

    });
}