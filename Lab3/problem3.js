"use strict";

let libraryBooks = [
  { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
  { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
  { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    ID: 3257,
  },
];

//AddBook
const addBook = (title, author, ID) => {
  const exists = libraryBooks.find(
    (b) => b.ID === ID && b.title === title && b.author === author
  );

  if (!exists) {
    const newBook = { title, author, ID };
    libraryBooks.push(newBook);
    return newBook;
  }

  return null;
};

//getTitles sorted alphabetically.
const getTitles = () => {
  return libraryBooks
    .map((book) => book.title)
    .sort((a, b) => a.localeCompare(b));
};

//findBooks sorted by ID
const findBooks = (keyword) => {
  return libraryBooks
    .filter((book) => book.title.toLowerCase().includes(keyword.toLowerCase()))
    .sort((b1, b2) => b1.ID - b2.ID);
};
