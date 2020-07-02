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
  console.log(bookLog);
  myLibrary.push(bookLog); // form data
}

function render(arr) {
  const table = document.querySelector('#table');
  generateTable(table, arr);
}

function createTable(arr) {
  const table = document.createElement('table');
  table.id = 'table';
  let data = Object.keys(arr[0])
  generateTHead(table, data);
  generateTable(table, arr);
  document.body.append(table);

  // document.createElement('tr')
  // document.createElement('td')
}

function generateTHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement('th');
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

// If table row exists don't create
function generateTable(table, data) {
  for (let elem of data) {
    // if () {
    //   return;
    // }
    let row = table.insertRow();
    for (key in elem) {
      // console.log(key)
      let cell = row.insertCell();
      let text = document.createTextNode(elem[key]);
      cell.appendChild(text)
    }
  }
}

function formBtn() {
  const btn = document.createElement('button');
  btn.textContent = 'Add New Book';
  let data = Object.keys(myLibrary[0]);
  btn.addEventListener('click', function() {
    createForm(data);
    // Prevent new form unless current one is submitted.
  });

  document.body.append(btn);
}

function createForm(data) {
  const bookForm = document.createElement('form');
  // let tValue, aValue, pValue, gValue;
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
      console.log(label.for)
    } else if (key === 'pages') {
      input.type = 'number';
      input.name = key;
      input.id = key;
      label.for = key;
      label.innerHTML = `${capitalize(key)}: `;
      label.append(input);
      bookForm.append(label);
      console.log(label.for)
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
    console.log(title.value, author.value, pages.value, genre.value);
    addBookToLibrary(title.value, author.value, pages.value, checked, genre.value);
    //render
    render(myLibrary);
    return false;
  };
  bookForm.onsubmit = function() {
    return true;
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