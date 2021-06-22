function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() {}

UI.prototype.addBookToList = function(book) {
    const bookList = document.querySelector('#book-list');

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        <hr>
    `;

    bookList.appendChild(row);
}

UI.prototype.showAlert = function(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');

    const form = document.querySelector('#book-form');

    container.insertBefore(div, form);

    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
}

UI.prototype.clearFields = function() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
}

// const bookList = document.querySelector('#book-list');

//     while(bookList.hasChildNodes) {
//         bookList.removeChild();
//     }


document.querySelector('#book-form').addEventListener('submit', function(e) {
    const title = document.querySelector('#title'),
        author = document.querySelector('#author'),
        isbn = document.querySelector('#isbn');

    const book = new Book(title.value, author.value, isbn.value);
    console.log(book);

    const ui = new UI();

    if(title.value === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addBookToList(book);
        
        ui.clearFields();

        ui.showAlert('Book Added!', 'success');
    }

    e.preventDefault();
});

document.getElementById('bo')