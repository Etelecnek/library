

function addbook() {
    document.getElementById("addnewbook").style.display="block";
}

const book = {

}

function submitText() {
    event.preventDefault()
    createBook()
    
}

function setVariables() {

}

function createBook() {
    const newbook = document.createElement('div')
    newbook.setAttribute('class', 'createdBook')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const readBtn = document.createElement('button')
    readBtn.setAttribute('id', 'readbutt')
    const removeBtn = document.createElement('button')
    removeBtn.setAttribute('id', 'remove')
    removeBtn.textContent = 'Remove'
    document.getElementById('body').appendChild(newbook)
    newbook.appendChild(title)
    newbook.appendChild(author)
    newbook.appendChild(pages)
    newbook.appendChild(readBtn)
    newbook.appendChild(removeBtn)
    title.innerHTML = document.getElementById('title').value 
    author.innerHTML = document.getElementById('author').value
    pages.innerHTML = document.getElementById('pages').value
    document.getElementById("addnewbook").style.display="none";
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('pages').value = "";
}