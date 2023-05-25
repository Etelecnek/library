function addbook() {
    document.getElementById("addnewbook").style.display="block";
}

const myLibrary = [
    {

    }
];

class Book { constructor(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    }
}

Book.prototype.updateLibrary = function() {
    const createBook = document.createElement('div')
    createBook.setAttribute('class', 'createdBook')
    const createtitle = document.createElement('p')
    const createauthor = document.createElement('p')
    const createpages = document.createElement('p')
    const createreadBtn = document.createElement('button')
    createreadBtn.setAttribute('id', 'readbutt')
    const createremoveBtn = document.createElement('button')
    createremoveBtn.setAttribute('id', 'remove')
    createremoveBtn.textContent = 'Remove'
    document.getElementById('body').appendChild(createBook)
    createBook.appendChild(createtitle)
    createBook.appendChild(createauthor)
    createBook.appendChild(createpages)
    createBook.appendChild(createreadBtn)
    createBook.appendChild(createremoveBtn)
    createtitle.textContent = this.title
    createauthor.textContent = this.author
    createpages.textContent = this.pages
}

const newBook = new Book(title, author, pages, status);
let formTitle = document.querySelector('#title');
let formAuthor = document.querySelector('#author');
let formPages = document.querySelector('#pages');
let formRead = document.querySelector('#checkRead');

function submitForm() {
    event.preventDefault()
    addBookToLibrary()
    newBook.updateLibrary()
    console.log(newBook)
}
const addBookToLibrary = () => {
    newBook.title = formTitle.value;
    newBook.author = formAuthor.value;
    newBook.pages = formPages.value;
    newBook.status = isRead();
    myLibrary.push(newBook);
}

function isRead() {
    if (formRead.checked == true) {
        return true;
    } else {
        return false;
    }
}