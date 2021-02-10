let mongoose = require("mongoose");
Book = mongoose.model("Book");
Author = mongoose.model("Author");

let author_seed = [
  {
    firstname: "Niels",
    lastname: "Hoek",
    birthdate: new Date("1997-10-07"),
    ranking: 1,
    books: [
      '1',
      '2',
    ],
  },
  {
    firstname: "Mad",
    lastname: "Nelis",
    birthdate: new Date("1897-10-07"),
    country: "NO",
    ranking: 2,
    books: [
        '3',
    ],
  },
  {
    firstname: "Zina",
    lastname: "Hoek",
    birthdate: "2011-12-12",
    country: "MX",
    ranking: 3,
  },
];

let book_seed = [
  {
    _id: '1',
    title: "Book One",
    publishDate: new Date("2020-1-1"),
    category: "Epic",
    chapters: [
      { title: "Chapter One", numberOfPages: 6 },
      { title: "Chapter Two", numberOfPages: 7 },
      { title: "Chapter Three", numberOfPages: 8 },
      { title: "The Final Chapter", numberOfPages: 9 },
    ],
  },
  {
    _id: '2',
    title: "The Second Book",
    publishDate: new Date("2020-2-1"),
    category: "Epic",
    chapters: [
      { title: "The First Chapter", numberOfPages: 6 },
      { title: "The Second Chapter", numberOfPages: 5 },
      { title: "The Third Chapter", numberOfPages: 4 },
      { title: "The Last Chapter", numberOfPages: 3 },
    ],
  },
  {
    _id: '3',
    title: "The Last Book",
    publishDate: new Date("2020-2-1"),
    category: "Legendary",
  },
];

module.exports = function () {
  let Book = mongoose.model("Book");
  Book.find({}).then((books) => {
    if (!books.length) {
      console.log("\tNo books found, filling testdata");
      Book.insertMany(book_seed)
        .then(() => console.log("\tFilling book testdata succesfull"))
        .catch((err) => console.log("\tFilling book testdata failed", err));
    }
  });

  let Author = mongoose.model("Author");
  Author.find({}).then((authors) => {
    if (!authors.length) {
      console.log("\tNo authors found, filling testdata");
      Author.insertMany(author_seed)
        .then(() => console.log("\tFilling author testdata succesfull"))
        .catch((err) => console.log("\tFilling author testdata failed", err));
    }
  });
};
