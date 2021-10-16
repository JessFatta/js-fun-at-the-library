
function shelfBook(bookName, shelf) {
  if (shelf.length < 3) {
  shelf.unshift(bookName)
  }
};

function unshelfBook(bookName, shelf) {
 for (var i = 0; i < shelf.length; i++) {
   if (bookName === shelf[i].title)  {
      shelf.splice(i, 1);
    }
    }
};

function listTitles(shelf) {
  var titles = []
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);


 }
 var create = titles.join(", ")
 return create;
};


function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true;
      }
    }
    return false;
  };

module.exports = {
   shelfBook,
 unshelfBook,
  listTitles,
searchShelf
};
