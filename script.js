const libraryDiv = document.querySelector('.library');
const addbtn = document.querySelector('.addBook');
const dialog = document.querySelector('dialog');
const submit = document.querySelector('#submit');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
const myLibrary = [];

function addBooktoLibrary(book) {
    myLibrary.push(book);
};

function displayLibrary(books) {
    books.forEach(book => displayBook(book));
};

function displayBook(book) {
    const card = document.createElement("div");
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

    if (book.read) {
        read.classList.toggle("greenBtn");
        read.textContent = "Already read";
    }
    else {
        read.textContent = "Not read yet";
    }
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
    deleteBook.addEventListener("click", () => {
        removeBook(book.title, myLibrary, libraryDiv);
    });
    read.addEventListener("click", () => {
        book.read ? book.read = false : book.read = true;
        while (libraryDiv.firstChild) {
            libraryDiv.removeChild(libraryDiv.firstChild);
        };
        displayLibrary(myLibrary);
    })
};

function removeBook(title, array, library) {
    array.forEach((book, i) => {
        if (book.title === title) {
            array.splice(array.indexOf(book), 1)
        }
    })
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
    array.forEach(book => displayBook(book));
};

addbtn.addEventListener("click", () => {
    dialog.showModal();
});

submit.addEventListener("click", () => {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");
    const myBook = new Book(title.value, author.value, +pages.value, read.checked);
    while (libraryDiv.firstChild) {
        libraryDiv.removeChild(libraryDiv.firstChild);
    }
    addBooktoLibrary(myBook);
    displayLibrary(myLibrary);
});