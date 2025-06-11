const books = []
function Books(title, author, pages, read){
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


function addBookToLibrary(book){
    books.push(book)
}

function displayBooks(booksList){
    for (let i = 0; i<booksList.length; i++){
        let title = document.createElement('td')
        let author = document.createElement('td')
        let pages = document.createElement('td')
        let read = document.createElement('td')
        if (booksList[i].read){
            read.innerHTML = `Read`
        } else {
            read.innerHTML = 'Not read yet'
        }
        let tr = document.createElement('tr')
        title.innerHTML = booksList[i].title
        author.innerHTML = booksList[i].author
        pages.innerHTML = booksList[i].pages
        tr.appendChild(title)
        tr.appendChild(author)
        tr.appendChild(pages)
        tr.appendChild(read)
        document.querySelector('tbody').appendChild(tr)
    }
}

document.addEventListener('DOMContentLoaded', displayBooks(books))