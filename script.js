let readBool = "false";
let numberedID = 1;

function addbook() {
    document.getElementById("addnewbook").style.display="block";
}

function book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

function submitText() {
    event.preventDefault()
    createBook()
    
}

function createBook() {
    const newbook = document.createElement('div')
    newbook.setAttribute('class', 'createdBook')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    document.getElementById('body').appendChild(newbook)
    newbook.appendChild(title)
    newbook.appendChild(author)
    newbook.appendChild(pages)
    title.innerHTML = document.getElementById('title').value 
    author.innerHTML = document.getElementById('author').value
    pages.innerHTML = document.getElementById('pages').value
}

function readCheckbox() {
    var checkRead = document.getElementById('checkRead');
    if (checkRead.checked == true) {
        readBool = "true";
    } else {
        readBool = "false";
    }
}