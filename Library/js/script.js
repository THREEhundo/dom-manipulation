const doc = document.body;
let myLibrary = ['Harry Potter', 'Lord of the Rings', 'Phantom of the Opera', 'The Hobbit'];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {

}

// Rendering table from Library
function render(arr) {
  // create table
  // create header
  // create body
  // create entries
  // append table to window
  const tableContainer = document.createElement('div');
  const table = document.createElement('table');
  table.createTHead().textContent = 'My Library';
  for (let book of arr) {
    table.insertRow().textContent = book;
  }
  tableContainer.append(table);
  document.body.append(tableContainer);
}

// Inputs for form
function addInput(book, inputType, labelTextContent, id, value) {
  const input = document.createElement('input');
  const label = document.createElement('label');

  label.textContent = labelTextContent;
  input.setAttribute('type', inputType);

  input.id = id;

  if (input.type === 'radio' || 'submit') {
    input.value = value;
    if (input.type === 'radio') {
      // Allows for only one choice.
      input.name = 'reading';
    }
  }


  book.append(label);
  book.append(input);
  // Label for radio buttons
  if (labelTextContent === 'Pages: ') {
    book.append(value);
  }
}

// Create Book with Form Entry
function createBookEntry() {
  title.textContent
}

// New Book Form
function newBookForm() {
  // author, title, pages, read
  const name = document.createElement('div');
  const bookForm = document.createElement('form');
  const p = document.createElement('p');
  bookForm.textContent = 'Add a Book - ';
  bookForm.name = 'bookForm';
  p.textContent = 'Have you read this book?';



  addInput(bookForm, 'text', 'Title: ', 'title', null);
  addInput(bookForm, 'text', 'Author: ', 'author', null);
  addInput(bookForm, 'number', 'Pages: ', 'pages', p);
  addInput(bookForm, 'radio', 'True', 'read', 'read');
  addInput(bookForm, 'radio', 'False', 'not read', 'not read');
  addInput(bookForm, 'submit', null, 'submit', 'submit')

  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');
  const read = document.querySelector('#read');
  const notRead = document.querySelector('#notRead');

  name.append(bookForm);
  document.body.append(name);
}

function getFormInfo(bookForm) {
  bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    new Book(bookForm)
  })
}

// Buttons
function newBtn(btnTxt, eventFunct, appendingTo) {
  const btn = document.createElement('button');
  btn.textContent = btnTxt;
  btn.addEventListener('click', eventFunct);
  appendingTo.append(btn);
}

// create button that brings up a form allowing users to input the details


render(myLibrary);
newBtn('New Book', newBookForm, document.body);