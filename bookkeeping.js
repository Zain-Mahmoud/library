const books = []
function Books(title, author, pages, read){
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Books.prototype.toggleRead = function () {
        if (this.read === true){
            this.read = false;
        } else{
            this.read = true;
        }
    }



function addBookToLibrary(book){
    books.push(book)
}

function displayBooks(booksList){
    document.querySelector('tbody').innerHTML = ''
    for (let i = 0; i<booksList.length; i++){
        let title = document.createElement('td')
        let author = document.createElement('td')
        let pages = document.createElement('td')
        let read = document.createElement('td')
        let del = document.createElement('td')
        let readrow = document.createElement('td')
        let button = document.createElement('button')
        let toggleread = document.createElement('button')
        del.classList = 'delete'
        button.dataset.book = booksList[i].id
        button.classList = 'delbutton'
        button.innerHTML = 'Delete'
        readrow.classList = 'read'
        button.onclick = ()=> {
            const bookid = button.dataset.book
            for (let i = 0; i< books.length; i++){
                console.log(`${books[i].id}`)
                if (`${books[i].id}` === bookid){
                    books.splice(i, 1);
                    break
                }
            }
            displayBooks(books);
        }
        del.appendChild(button);

        if (booksList[i].read){
            toggleread.innerHTML = `Unread`;
        } else {
            toggleread.innerHTML = 'Read';
        }

        toggleread.dataset.book = booksList[i].id;
        toggleread.onclick = () => {
            const bookid = toggleread.dataset.book
            for (let i = 0; i<books.length; i++){
                if (`${books[i].id}` === bookid){
                    books[i].toggleRead();
                    break
                }
            }
            displayBooks(books);
        }
        readrow.appendChild(toggleread);
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
        tr.appendChild(del)
        tr.append(readrow)
        document.querySelector('tbody').appendChild(tr)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayBooks(books);
    document.querySelector('#newbook').onclick = () => {
        document.querySelector('#form').show()

    }
    document.querySelector('#cancel').onclick = ()=>{
        document.querySelector('#form').close()
    }
    document.querySelector('form').onsubmit = (event)=>{
        event.preventDefault()
        let title = document.querySelector('#title').value
        let author = document.querySelector('#author').value
        let pages = document.querySelector('#pages').value
        let read = document.querySelector('#read').checked
        let book = new Books(title, author, pages, read)
        addBookToLibrary(book)
        document.querySelector('#form').close()
        displayBooks(books)
    }

})