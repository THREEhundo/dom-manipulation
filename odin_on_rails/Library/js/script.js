let myLibrary = [{
  title: 'Harry Potter and the Sorcerers Stone',
  author: 'J.K. Rowling',
  pages: 223,
  read: true,
  genre: 'Fantasy'
}, {
  title: 'The Lord of the Rings: Fellowship of the Ring',
  author: 'J.R.R. Tolkien',
  pages: 423,
  read: true,
  genre: 'Fantasy'
}, {
  title: 'The Hobbit, or There and Back Again ',
  author: 'J.R.R. Tolkien',
  pages: 310,
  read: true,
  genre: 'Fantasy'
}];


function Book(title, author, pages, read, genre) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.genre = genre;
}

function addBookToLibrary(title, author, pages, read, genre) {
  // take form and push into myLibrary
  const bookLog = new Book(title, author, pages, read, genre);
  myLibrary.push(bookLog); // form data
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
    for (key in elem) {
      let cell = row.insertCell();
      let text = document.createTextNode(elem[key]);
      cell.append(text);
      row.append(cell);
      tBody.append(row);
    }
    deleteBtn(row);
    table.append(tBody);
  }
}

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
  console.log(index);
  deleteBtn(row, index);
}

function deleteBtn(row, index) {
  const deleteR = document.createElement('button');
  deleteR.innerHTML = 'x';
  row.append(deleteR);
  let num = index;
  // console.log('num');
  // console.log(num);
  deleteR.addEventListener('click', function() {
    // delete row
    const parent = row.parentNode;
    parent.removeChild(row);
    // delete elem in array
    const num = row.dataset.book;
    console.log(myLibrary[num]);
    myLibrary.splice(num, 1);
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
    addBookToLibrary(title.value, author.value, pages.value, checked, genre.value);
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