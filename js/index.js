let bookList = [];

const saveDataLocally = (bookList) => {
  const stringifiedBookList = JSON.stringify(bookList);
  localStorage.setItem('bookList', stringifiedBookList);
};

const removeBook = (index) => {
  bookList = bookList.filter((book, ind) => ind !== index);
};

const listShowContainer = document.querySelector('.listShow');

const generateBooks = () => {
  listShowContainer.innerHTML = '';

  bookList.reverse().forEach((bookObject, index) => {
    const div = document.createElement('div');

    const titleSpan = document.createElement('span');
    titleSpan.textContent = bookObject.title;
    div.appendChild(titleSpan);

    const breakLine1 = document.createElement('br');
    div.appendChild(breakLine1);

    const authorSpan = document.createElement('span');
    authorSpan.textContent = bookObject.author;
    div.appendChild(authorSpan);

    const breakLine2 = document.createElement('br');
    div.appendChild(breakLine2);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeBook(index);
      saveDataLocally(bookList);
      generateBooks();
    });
    div.appendChild(removeButton);

    const hr = document.createElement('hr');
    div.appendChild(hr);

    listShowContainer.appendChild(div);
  });
};

if (localStorage.getItem('bookList') !== null) {
  const localBookList = localStorage.getItem('bookList');
  const convertedBookList = JSON.parse(localBookList);
  bookList = convertedBookList;
  generateBooks();
} else {
  generateBooks();
}

const addNewBook = (bookList) => {
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  const book = {
    title,
    author,
  };
  bookList.push(book);
  saveDataLocally(bookList);
  generateBooks();
};

const addButton = document.querySelector('.add');
addButton.addEventListener('click', () => addNewBook(bookList));
