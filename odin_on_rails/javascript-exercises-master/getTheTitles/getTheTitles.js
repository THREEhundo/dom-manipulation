const getTheTitles = function(books) {
  let booksArr = [];
  for (let book of books) {
    booksArr.push(book.title);
  }
  return booksArr;
}

module.exports = getTheTitles;