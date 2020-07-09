const myLibrary = [];
var database = firebase.database();

function Book(title, author, pages, read, genre, bookID) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.genre = genre;
  this.bookID = bookID;
}

Book.prototype.toggleRead = function(checkBox) {
  // if checkbox is checked change read -> yes
  if (checkBox.checked) {
    this.read = 'yes';
  } else if (!checkBox.checked) {
    // if checkbox is unchecked read -> no
    this.read = 'no';
  }
}

// function writeBookData(title, author, pages, read, genre, bookID) {
//   firebase.database().ref('library').set({
//     title: title,
//     author: author,
//     pages: pages,
//     read: read,
//     genre: genre,
//     bookID: bookID
//   });
// }

function addBookToLibrary(title, author, pages, read, genre, bookID) {
  // take form and push into myLibrary
  const bookLog = new Book(title, author, pages, read, genre, bookID);
  myLibrary.push(bookLog);
  bookIndex = myLibrary.indexOf(bookLog);
  render(bookLog, bookIndex);

  addBookToDB(title, author, pages, read, genre, bookIndex);
}

function render(obj, index) {
  const table = document.querySelector('#table');
  addRow(obj, index);
}

function createTable(arr) {
  const table = document.createElement('table');
  const tableContainer = document.querySelector('.table-container');
  table.id = 'table';
  let data = Object.keys(arr[0])
  generateTHead(table, data);
  generateTable(table, arr);
  tableContainer.append(table);
}

function generateTHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    if (key === 'bookID') {
      void(0);
    } else {
      let th = document.createElement('th');
      let text = document.createTextNode(key);
      th.append(text);
      row.append(th);
    }
  }
}

// If table row exists don't create
function generateTable(table, data) {
  const tBody = document.createElement('tbody');
  for (let elem of data) {
    let row = table.insertRow();
    row.dataset.book = data.indexOf(elem);
    elem.bookID = data.indexOf(elem);
    for (let key in elem) {
      if (key === 'bookID' || key === 'toggleRead') {
        void(0);
      } else if (key === 'read') {
        const cell = row.insertCell();
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.name = 'readBook';
        checkBox.value = 'yes';
        checkBox.setAttribute('checked', '');
        checkBox.onchange = function(checkBox) {
          elem.toggleRead(checkBox);
        }

        cell.append(checkBox);
        row.append(cell);
        tBody.append(row);

      } else {
        let cell = row.insertCell();
        let text = document.createTextNode(elem[key]);
        cell.append(text);
        row.append(cell);
        tBody.append(row);
      }
    }
    deleteBtn(row);
  }
  // Add stored books to table
  var ref = database.ref('books');
  ref.on('value', function(snapshot) {
    console.log(snapshot.val());
  }, function(errorObject) {
    console.log('The read failed: ' + errorObject.code);
  });

  table.append(tBody);
}

// function gotData(data) {
//   var books = data.val();
//   var keys = Object.keys(books);
//   console.log(books);
//
// }

// New book card
function addRow(data, index) {
  const tBody = document.querySelector('tBody');
  let row = table.insertRow();
  row.dataset.book = index;
  for (key in data) {
    if (key === 'bookID' || key === 'toggleRead') {
      void(0);
    } else if (key === 'read') {
      const cell = row.insertCell();
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.name = 'readBook';
      checkBox.value = 'yes';
      checkBox.onchange = function(checkBox) {
        data.toggleRead(checkBox);
      }

      if (data[key] === 'yes') {
        checkBox.setAttribute('checked', '');
      }

      cell.append(checkBox);
      row.append(cell);
      tBody.append(row);
    } else {
      let cell = row.insertCell();
      let text = document.createTextNode(data[key]);
      cell.append(text);
      row.append(cell);
      tBody.append(row);
    }
  }
  deleteBtn(row, index);
}

function deleteBtn(row, index) {
  const deleteR = document.createElement('button');
  deleteR.innerHTML = 'X';
  const cell = row.insertCell();
  cell.classList.add('deleteBtnCell');
  cell.append(deleteR);
  row.append(cell);
  deleteR.addEventListener('click', function() {
    // delete row
    const parent = row.parentNode;
    parent.removeChild(row);
    // delete elem in array
    const num = row.dataset.book;
    myLibrary.splice(num, 1);
    for (let book of myLibrary) {
      if (myLibrary.indexOf(book) !== book.bookID) {
        // Iterate over all cells & find book title
        // Use the book title to find parent node
        // Reset data-book to reflect current array element value
        let tds = [...document.querySelectorAll('td')].find(el => el.textContent = book.title);
        tds.parentNode.dataset.book = myLibrary.indexOf(book);
        book.bookID = myLibrary.indexOf(book);

      }
    }
  });
}

function formBtn() {
  const btn = document.createElement('button');
  btn.classList.add('add-book');
  btn.classList.add('btn');
  btn.textContent = 'Add New Book';

  let data = Object.keys(myLibrary[0]);

  // Show form & set focus to first input
  btn.addEventListener('click', function() {
    const formContainer = document.querySelector('.form-container');

    formContainer.style.display = 'flex';
    document.querySelector('#title').focus();
  });
  const tableContainer = document.querySelector('.table-container');

  tableContainer.append(btn);
}

function createForm(data) {
  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container');
  const bookForm = document.createElement('form');

  for (let key of data) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    if (key === 'read') {
      const yesInput = document.createElement('input');
      const readContainer = document.createElement('div');
      input.type = "checkbox";
      input.name = "readBook";
      input.id = 'readInput';
      input.value = 'yes';
      yesInput.type = "hidden";
      yesInput.name = "readBook";
      yesInput.value = 'no';
      label.for = 'readInput';
      label.innerHTML = 'Have You Read This Book?';
      readContainer.append(label);
      label.append(yesInput);
      label.append(input);
      bookForm.append(readContainer);
    } else if (key === 'pages') {
      input.type = 'number';
      input.name = key;
      input.id = key;
      label.for = key;
      label.innerHTML = `${capitalize(key)}: `;
      label.append(input);
      bookForm.append(label);
    } else if (key === 'bookID') {
      void(0);
    } else {
      input.type = 'text';
      input.name = key;
      input.id = key;
      label.for = key;
      label.innerHTML = `${capitalize(key)}: `;

      label.append(input);
      bookForm.append(label);
    }
    if (input.id == 'title') {
      input.setAttribute("autofocus", "autofocus");
    }
  }

  const submit = document.createElement('input');
  submit.classList.add('btn2');
  submit.type = 'button';
  submit.value = 'submit';
  submit.id = 'btnsubmit';
  submit.addEventListener('click', addBook)

  function addBook() {
    // if checkbox is checked input value into add function
    let checked;
    const readCheckBox = document.querySelector('#readInput');

    if (readCheckBox.checked) {
      checked = 'yes';
    } else {
      checked = 'no';
    }

    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const genre = document.querySelector('#genre');
    console.log(title.value, author.value, pages.value, checked, genre.value, myLibrary.length + 1);
    addBookToLibrary(title.value, author.value, pages.value, checked, genre.value, myLibrary.length + 1);
    title.value = '';
    author.value = '';
    pages.value = '';
    genre.value = '';
    readCheckBox.checked = false;
    formContainer.style.display = 'none';
  };

  formContainer.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      formContainer.style.display = 'none';
    }
  });

  bookForm.append(submit);
  formContainer.append(bookForm);
  document.body.append(formContainer);
  formContainer.style.display = 'none';
}


// Capitalize first letter
const capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/********* DATABASE *********/

// Write books to database
// (set() Saves data to prevent rewriting the same data)
database.ref('books').child(0).set({
  title: 'Harry Potter and the Sorcerers Stone',
  author: 'J.K. Rowling',
  pages: 223,
  read: 'yes',
  genre: 'Fantasy',
  bookID: 0
});

database.ref('books').child(1).set({
  title: 'The Lord of the Rings: Fellowship of the Ring',
  author: 'J.R.R. Tolkien',
  pages: 423,
  read: 'yes',
  genre: 'Fantasy',
  bookID: 1
});

database.ref('books').child(2).set({
  title: 'The Hobbit, or There and Back Again ',
  author: 'J.R.R. Tolkien',
  pages: 310,
  read: 'yes',
  genre: 'Fantasy',
  bookID: 2
});

function addBookToDB(title, author, pages, read, genre, bookID) {
  var bookData = {
    title: title,
    author: author,
    pages: pages,
    read: read,
    genre: genre,
    bookID: bookID
  };

  // Get a key for a new Book
  var newBookKey = database.ref().child('books').push().key;

  // Update database
  var updates = {};
  updates['/books/' + newBookKey] = bookData;

  return database.ref().update(updates);
}

const harryPotter = new Book(
  'Harry Potter and the Sorcerers Stone',
  'J.K. Rowling',
  223,
  'yes',
  'Fantasy',
  0
);

const fellowship = new Book(
  'The Lord of the Rings: Fellowship of the Ring',
  'J.R.R. Tolkien',
  423,
  'yes',
  'Fantasy',
  1
);

const hobbit = new Book(
  'The Hobbit, or There and Back Again ',
  'J.R.R. Tolkien',
  310,
  'yes',
  'Fantasy',
  2
);

myLibrary.push(harryPotter, fellowship, hobbit);
createTable(myLibrary);
formBtn();
createForm(Object.keys(myLibrary[0]));

const preObject = document.getElementById('object');
const dbRefObject = firebase.database().ref('books');
dbRefObject.on('value', snap => {
  preObject.innerText = JSON.stringify(snap.val(), null, 3);
});