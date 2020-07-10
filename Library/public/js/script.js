const myLibrary = [];
var database = firebase.database();

function Book(atitle, author, genre, pages, read, bookID, key) {
  this.atitle = atitle;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.read = read;
  this.bookID = bookID;
  this.key = key
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

function addBookToLibrary(atitle, author, genre, pages, read, bookID) {
  // take form and push into myLibrary
  addBookToDB(atitle, author, genre, pages, read, bookID);
  let key;
  // Listen for change and set key
  database.ref('books').on('child_added', function(data) {
    key = data.key;
  });
  const bookLog = new Book(atitle, author, genre, pages, read, bookID, key);
  myLibrary.push(bookLog);
  bookID = myLibrary.indexOf(bookLog);
  render(bookLog, bookID);
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
    if (key === 'bookID' || key === 'key') {
      void(0);
    } else if (key === 'atitle') {
      let th = document.createElement('th');
      let text = document.createTextNode('title');
      th.append(text);
      row.append(th);
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
      if (key === 'bookID' || key === 'toggleRead' || key === 'key') {
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
    deleteBtn(row, row.dataset.book);
  }
  table.append(tBody);
}

// New book card
function addRow(data, index) {
  const tBody = document.querySelector('tBody');
  let row = table.insertRow();
  row.dataset.book = index;
  for (key in data) {
    if (key === 'bookID' || key === 'toggleRead' || key === 'key') {
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

    /* START HERE */
    // database.ref('books').on('value', function(snap) {
    //   var books = snap.val();
    //   var keys = Object.keys(books);
    //   for (var i = 0; i < keys.length: i++) {
    //     var k = keys[i];
    //     var dbBookID = books[k].bookID;
    //
    //   }
    // })
    //
    const num = row.dataset.book;
    // delete elem in array
    myLibrary.splice(index, 1);
    for (let book of myLibrary) {
      if (myLibrary.indexOf(book) !== book.bookID) {
        // Iterate over all cells & find book title
        // Use the book title to find parent node
        // Reset data-book to reflect current array element value
        let tds = [...document.querySelectorAll('td')].find(el => el.textContent = book.author);
        tds.parentNode.dataset.book = myLibrary.indexOf(book);
        book.bookID = myLibrary.indexOf(book);
      } else {
        return;
      }
      //     // if book.title === DB book.title change DBID to book.bookID
      database.ref('books').on('value', function(snap) {
        var books = snap.val();
        var keys = Object.keys(books);
        for (var i = 0; i < keys.length; i++) {
          var k = keys[i];
          var dBBookTitle = books[k].atitle;
          if (book.atitle === dBBookTitle) {

            database.ref('books').child(books[k]).update({
              "bookID": book.bookID
            });
          }
        }
      });
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
    document.querySelector('#atitle').focus();
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
    console.log(key);
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
    } else if (key === 'bookID' || key === 'key') {
      void(0);
    } else if (key === 'atitle') {
      input.type = 'text';
      input.name = key;
      input.id = key;
      label.for = key;
      label.innerHTML = `${capitalize(key.slice(1))}: `;
      label.append(input);
      bookForm.append(label);
    } else {
      input.type = 'text';
      input.name = key;
      input.id = key;
      label.for = key;
      label.innerHTML = `${capitalize(key)}: `;
      label.append(input);
      bookForm.append(label);
    }
    if (input.id == 'atitle') {
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

    const atitle = document.querySelector('#atitle');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const genre = document.querySelector('#genre');
    addBookToLibrary(atitle.value, author.value, genre.value, pages.value, checked, myLibrary.length + 1);
    atitle.value = '';
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

// set bookID to db key
function key2id() {
  // grab db key
  database.ref('books')
}

function addBookToDB(atitle, author, pages, read, genre, bookID) {
  var bookData = {
    atitle: atitle,
    author: author,
    pages: pages,
    read: read,
    genre: genre,
    bookID: bookID,
  };

  // Get a key for a new Book
  var newBookKey = database.ref().child('books').push().key;

  // Update database
  var updates = {};
  updates['/books/' + newBookKey] = bookData;

  return database.ref().update(updates);
}

// Initialize table from database
var ref = database.ref('books');
ref.once('value', function(snapshot) {
    const objContainer = snapshot.val();
    const arrayContainer = Object.values(objContainer);
    myLibrary.push.apply(myLibrary, arrayContainer);

    createTable(myLibrary);
    formBtn();
    createForm(Object.keys(myLibrary[0]));
  },
  function(errorObject) {
    console.log('The read failed: ' + errorObject.code);
  });

// dbRefObject.on('value', snap => console.log(snap.val()))
// dbRefObject.orderByKey().on('value', snapshot => console.log(snapshot.val()));