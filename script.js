const book_name = document.querySelector("#book-name");
const book_author = document.querySelector("#author-name");
const book_status = document.querySelector("#status");

const form = document.querySelector("#form-body");
const btn = document.querySelector("#btn");

let btns_delete = [];

let myLibrary = [];

class Book {
  constructor({ bookName, bookAuthor, bookStatus }) {
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.bookStatus = bookStatus;
  }

  addBookToLibrary() {
    myLibrary.push([this.bookName, this.bookAuthor, this.bookStatus]);
  }
}

btn.addEventListener("click", function () {
  form.innerHTML = "";
  let bookName = book_name.value;
  let bookAuthor = book_author.value;
  let bookStatus = book_status.value;
  const newBook = new Book({ bookName, bookAuthor, bookStatus });
  newBook.addBookToLibrary();
  book_name.value = "";
  book_author.value = "";

  myLibrary.forEach(function (item) {
    const row = document.createElement("tr");
    for (let i = 0; i < 3; i++) {
      const table_data = document.createElement("td");
      table_data.textContent = item[i];
      row.appendChild(table_data);
    }
    const table_data = document.createElement("td");
    const delete_btn = document.createElement("button");
    delete_btn.setAttribute("class", "btns_delete");
    delete_btn.textContent = "Delete";
    table_data.appendChild(delete_btn);
    row.appendChild(table_data);

    form.appendChild(row);
  });

  btns_delete = document.querySelectorAll(".btns_delete");
  btns_delete.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      const bookTitle = item.parentNode.parentNode.firstChild.textContent;
      myLibrary = myLibrary.filter((book) => book[0] != bookTitle);
      form.removeChild(item.parentNode.parentNode);
    });
  });
});
