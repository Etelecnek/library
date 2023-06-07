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
    const createtitle = document.createElement('p')
    const createauthor = document.createElement('p')
    const createpages = document.createElement('p')
    const createreadBtn = document.createElement('button')
    const createremoveBtn = document.createElement('button')

    createBook.setAttribute('class', 'createdBook')
    createremoveBtn.setAttribute('id', 'remove')
    createremoveBtn.textContent = 'Remove'

    if (formRead.checked == true) {
        createreadBtn.setAttribute('id', 'readbutt')
        createreadBtn.textContent = 'Read'
    } else {
        createreadBtn.setAttribute('id', 'notreadbutt')
        createreadBtn.textContent = 'Not Read'
    }

    document.getElementById('body').appendChild(createBook)

    createBook.appendChild(createtitle)
    createBook.appendChild(createauthor)
    createBook.appendChild(createpages)
    createBook.appendChild(createreadBtn)
    createBook.appendChild(createremoveBtn)

    createtitle.textContent = this.title
    createauthor.textContent = this.author
    createpages.textContent = this.pages
    createreadBtn.onclick = function readBook() {
        if (createreadBtn.textContent === 'Not Read') {
            createreadBtn.setAttribute('id', 'readbutt')
            createreadBtn.textContent = 'Read'
        } else {
            createreadBtn.setAttribute('id', 'notreadbutt')
            createreadBtn.textContent = 'Not Read'
        }
    }
    createremoveBtn.onclick = function() {
        myLibrary.pop(this)
        this.parentNode.remove();
    }
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
    removeaddbook()
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

function removeaddbook() {
    document.getElementById("addnewbook").style.display="none";
    formTitle.value = "";
    formAuthor.value = "";
    formPages.value = "";
    formRead.checked = false;
}
