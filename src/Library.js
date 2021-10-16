function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return library;
}
createLibrary();


function addBook(library, title) {
  library.shelves[title.genre].push(title)
}


function checkoutBook(library, title, shelf) {
  var checkout = `You have now checked out ${title} from the ${library.name}`;
  var unavailable = `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
  for (var i = 0; i < library.shelves[shelf].length; i++) {
    if (title === library.shelves[shelf][i].title)
    library.shelves[shelf].splice(i, 1);
  return checkout;
  }
  return unavailable;
}


module.exports = {
 createLibrary,
 addBook,
  checkoutBook
};
