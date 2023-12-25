const libraryDiv = document.querySelector('.library');
const addbtn = document.querySelector('.addBook');
const myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBooktoLibrary(book) {
    myLibrary.push(book);
}

function displayBook(book) {
    const card =  Document.createElement("div");
    card.classList.toggle("card");
    const title = Document.createElement("div");
    card.classList.toggle("cardText");
    const author = Document.createElement("div");
    card.classList.toggle("cardText");
    const pages = Document.createElement("div");
    card.classList.toggle("cardText");
    const read = Document.createElement("button");
    read.classList.toggle("readBtn");
    const deleteBook = Document.createElement("button");
    deleteBook.classList.toggle("deleteBtn");
  
    read.textContent = book.read ? "Already read" : "Not read yet";
    deleteBook.textContent = "delete"  
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages + " pages.";
  
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(deleteBook);  
  
  }