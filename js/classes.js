// class Booklet {
//   constructor(listShowContainer) {
//     this.bookList = [];
//     this.listShowContainer = listShowContainer;
//   }

//   removeBook = (index) => {
//     this.bookList = this.bookList.filter((book, ind) => ind !== index);
//   }

//   addNewBook = (bookList) => {
//     const title = document.querySelector('.title').value;
//     const author = document.querySelector('.author').value;
//     const book = {
//       title,
//       author,
//     };
//     this.bookList.unshift(book);
//     this.saveDataLocally(bookList);
//     this.generateBooks();
//   }

//   generateBooks = () => {
//     const parentElement = this.listShowContainer;
//     parentElement.textContent = '';

//     this.bookList.forEach((bookObject, index) => {
//       const div = document.createElement('div');
//       div.className = 'book';

//       const titleSpan = document.createElement('span');
//       titleSpan.className = 'book-title';
//       titleSpan.textContent = `" ${bookObject.title} " by `;
//       div.appendChild(titleSpan);

//       const authorSpan = document.createElement('span');
//       authorSpan.className = 'book-author';
//       authorSpan.textContent = ` ${bookObject.author}`;
//       div.appendChild(authorSpan);

//       const removeButton = document.createElement('button');
//       removeButton.className = 'remove-button';
//       removeButton.textContent = 'Remove';
//       removeButton.addEventListener('click', () => {
//         this.removeBook(index);
//         this.saveDataLocally(this.bookList);
//         this.generateBooks();
//       });
//       div.appendChild(removeButton);
//       const br2 = document.createElement('br');
//       div.appendChild(br2);

//       parentElement.appendChild(div);
//     });
//   }

//   saveDataLocally = (bookList) => {
//     const stringifiedBookList = JSON.stringify(bookList);
//     localStorage.setItem('bookList', stringifiedBookList);
//   }

//   checkLocalStorage() {
//     if (localStorage.getItem('bookList') !== null) {
//       const localBookList = localStorage.getItem('bookList');
//       const convertedBookList = JSON.parse(localBookList);
//       this.bookList = convertedBookList;
//       this.generateBooks();
//     } else {
//       this.generateBooks();
//     }
//   }

//   addListener() {
//     const addButton = document.querySelector('.add');
//     addButton.addEventListener('click', () => this.addNewBook(this.bookList));
//   }
// }

// const allBooks = new Booklet(document.querySelector('.listShow'));
// allBooks.generateBooks();
// allBooks.checkLocalStorage();
// allBooks.addListener();

// const resetForm = document.querySelector('#addbtn');
// const myForm = document.querySelector('#myForm');
// resetForm.addEventListener('click', () => {
//   myForm.reset();
// });

// const list = document.querySelector('.list-action');
// const add = document.querySelector('.add-action');
// const contact = document.querySelector('.contact-action');

// list.addEventListener('click', () => {
//   document.getElementById('books').style.display = 'block';
//   document.getElementById('add').style.display = 'none';
//   document.getElementById('contact').style.display = 'none';
// });

// add.addEventListener('click', () => {
//   document.getElementById('books').style.display = 'none';
//   document.getElementById('add').style.display = 'block';
//   document.getElementById('contact').style.display = 'none';
// });

// contact.addEventListener('click', () => {
//   document.getElementById('books').style.display = 'none';
//   document.getElementById('add').style.display = 'none';
//   document.getElementById('contact').style.display = 'block';
// });

// window.onload = () => {
//   document.getElementById('add').style.display = 'none';
//   document.getElementById('contact').style.display = 'none';
//   this.generateBooks();
// };
