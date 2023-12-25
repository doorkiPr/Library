const libraryDiv = Document.querySelector('.library');
const addbtn = Document.querySelector('.addBook');
const myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBooktoLibrary(book) {
    myLibrary.puh(book);
}