function createTitle(bookIdea) {
  return `The ${bookIdea}`;
}
createTitle();


function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return mainCharacter;
};


function saveReview(newReview, reviews) {
    if (reviews.includes(newReview)){
      return reviews;
    } else {
      reviews.push(newReview);
    }
    return reviews;
}

function calculatePageCount(bookTitle){
  return bookTitle.length * 20
};

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: bookTitle.length * 20,
    genre: genre,
  }
  return book;
};

function editBook(book) {
  return book.pageCount *= .75
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
