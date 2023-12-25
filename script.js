const libraryDiv = document.querySelector('.library');
const addbtn = document.querySelector('.addBook');
const dialog = document.querySelector('dialog');

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
const mockBookOne = new Book("MY title","Some author",45,false);
const mockBookTwo = new Book("MY title","Some author",45,false);
const mockBookthree = new Book("MY dd","Some author",45,false);
const myLibrary = [mockBookOne,mockBookTwo,mockBookthree];


function addBooktoLibrary(book) {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#authors");
    const read = document.querySelector("#read");
    
    myLibrary.push(book);
}

addbtn.addEventListener("click",()=>{
    dialog.showModal();

})

function displayBook(book) {
    const card =  document.createElement("div");
    card.classList.toggle("card");
    const title = document.createElement("div");
    card.classList.toggle("cardText");
    const author = document.createElement("div");
    card.classList.toggle("cardText");
    const pages = document.createElement("div");
    card.classList.toggle("cardText");
    const read = document.createElement("button");
    read.classList.toggle("readBtn");
    const deleteBook = document.createElement("button");
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
    libraryDiv.appendChild(card);
}

myLibrary.forEach(book => displayBook(book));