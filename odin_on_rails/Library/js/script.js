let myLibrary = [{
  title: 'Harry Potter and the Sorcerers Stone',
  author: 'J.K. Rowling',
  pages: 223,
  read: 'Yes',
  genre: 'Fantasy'
}, {
  title: 'The Lord of the Rings: Fellowship of the Ring',
  author: 'J.R.R. Tolkien',
  pages: 423,
  read: 'Yes',
  genre: 'Fantasy'
}, {
  title: 'The Hobbit, or There and Back Again ',
  author: 'J.R.R. Tolkien',
  pages: 310,
  read: 'Yes',
  genre: 'Fantasy'
}];


function Book(title, author, pages, read, genre, bookID) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.genre = genre;
  this.bookID = bookID;
}

function addBookToLibrary(title, author, pages, read, genre, bookID) {
  // take form and push into myLibrary
  const bookLog = new Book(title, author, pages, read, genre, bookID);
  myLibrary.push(bookLog);
  bookIndex = myLibrary.indexOf(bookLog);
  render(bookLog, bookIndex);
}

function render(obj, index) {
  const table = document.querySelector('#table');
  addRow(obj, index);
}

function createTable(arr) {
  const table = document.createElement('table');
  table.id = 'table';
  let data = Object.keys(arr[0])
  generateTHead(table, data);
  generateTable(table, arr);
  document.body.append(table);
}

function generateTHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement('th');
    let text = document.createTextNode(key);
    th.append(text);
    row.append(th);
  }
}

// If table row exists don't create
function generateTable(table, data) {
  const tBody = document.createElement('tbody');
  for (let elem of data) {
    let row = table.insertRow();
    row.dataset.book = data.indexOf(elem);
    elem.bookID = data.indexOf(elem);
    for (key in elem) {
      if (key === 'bookID') {
        void(0);
      } else {
        let cell = row.insertCell();
        let text = document.createTextNode(elem[key]);
        cell.append(text);
        row.append(cell);
        tBody.append(row);
      }
    }
    deleteBtn(row);
    table.append(tBody);
  }
}

// New book card
function addRow(data, index) {
  const tBody = document.querySelector('tBody');
  let row = table.insertRow();
  row.dataset.book = index;
  for (key in data) {
    let cell = row.insertCell();
    let text = document.createTextNode(data[key]);
    cell.append(text);
    row.append(cell);
    tBody.append(row);
  }
  deleteBtn(row, index);
}

function deleteBtn(row, index) {
  const deleteR = document.createElement('button');
  deleteR.innerHTML = 'x';
  row.append(deleteR);
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
  btn.textContent = 'Add New Book';
  let data = Object.keys(myLibrary[0]);
  btn.addEventListener('click', function() {
    createForm(data);
  });
  document.body.append(btn);
}

function createForm(data) {
  const bookForm = document.createElement('form');

  for (let key of data) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    if (key === 'read') {
      const input1 = document.createElement('input');
      const label1 = document.createElement('label');
      const readContainer = document.createElement('div');
      input.type = "radio";
      input1.type = "radio";
      input.name = "tf";
      input1.name = "tf";
      input.id = 'yes';
      input1.id = 'no';
      label.for = 'tf';
      label1.for = 'tf';
      label.innerHTML = 'Yes';
      label1.innerHTML = 'No';
      readContainer.innerHTML = 'Have You Read This Book? ';
      readContainer.append(label);
      readContainer.append(label1);
      label.append(input);
      label1.append(input1);
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
      bookForm.append(label);
      label.append(input);
    }
  }
  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.onclick = function() {
    // if radio button is checked input value into add function
    let checked;
    const radios = document.querySelectorAll('[name="tf"]');
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        checked = radios[i].id;
      }
    }
    addBookToLibrary(title.value, author.value, pages.value, checked, genre.value, myLibrary.length + 1);
  };
  bookForm.onsubmit = function() {
    bookForm.style.display = 'none';
    return false;
  };

  bookForm.append(submit);
  document.body.append(bookForm);
}

// Capitalize first letter
const capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

createTable(myLibrary);
formBtn();