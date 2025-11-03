const booksList = document.querySelector(".books-list");
const filterButtons = document.querySelectorAll(".filter-btn");
const bookFinder = document.querySelector("#bookFinder");
const noBooks = document.querySelector(".no-books");
const sortSelect = document.querySelector("#sortSelect");
let currentSort = "default";
let selectedGenre = "All";
let searchText = "";
const books = [
  // Fiction
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    year: 1925,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
    description:
      "A tragic story of wealth, love, and the American Dream set in the roaring twenties.",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    year: 1960,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    description:
      "A powerful tale about racial injustice and childhood innocence in the Deep South.",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    year: 1949,
    image:
      "https://readings-storage.s3.ap-south-1.amazonaws.com/images/9780141036144.webp",
    description:
      "A dystopian novel depicting a totalitarian regime that controls every aspect of life.",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    year: 1951,
    image:
      "https://english-e-reader.net/covers/The_Catcher_in_the_Rye-Jerome_David_Salinger.jpg",
    description:
      "A story about teenage rebellion and alienation told through the eyes of Holden Caulfield.",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    year: 1988,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMh0cOYB9rP6ODQZwjENo59sKEB5bpLS-5jw&s",
    description:
      "A philosophical tale about following your dreams and finding your personal legend.",
  },

  // Non-fiction
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Non-fiction",
    year: 2011,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlf5TNn6PDNstsy84wBP-lBKXC9f95yIPvZg&s",
    description:
      "Explores the history of humankind from the Stone Age to the modern era.",
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Non-fiction",
    year: 2018,
    image: "https://images.penguinrandomhouse.com/cover/9781949061499",
    description:
      "A memoir of a woman who grows up in a strict and abusive household in rural Idaho but eventually escapes to learn about the wider world through education.",
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    genre: "Non-fiction",
    year: 2012,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj9Stw-lAF1AThEce-D9hCIuLTFEroHVUAw&s",
    description:
      "Explains how habits work and how they can be transformed to improve our lives.",
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Non-fiction",
    year: 2018,
    image:
      "https://m.media-amazon.com/images/I/71yVTGnn+OL._AC_UF1000,1000_QL80_.jpg",
    description:
      "A deeply personal memoir by the former First Lady of the United States about her life and journey.",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Non-fiction",
    year: 2011,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxDcGXtHorJW5Lk9NJHzkjex-_LnevejXrA&s",
    description:
      "Explores how humans think, make decisions, and often fall prey to biases and cognitive errors.",
  },

  // Mystery
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    genre: "Mystery",
    year: 2012,
    image: "https://miro.medium.com/1*im40tPqX4THFY1rMXfFQPw.jpeg",
    description:
      "A psychological thriller about a husband suspected of causing his wife's disappearance.",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: "Mystery",
    year: 2005,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTc2Mjc0MDg3MV5BMl5BanBnXkFtZTcwMjUzMDkxMw@@._V1_.jpg",
    description:
      "A gripping mystery involving a journalist and a hacker uncovering dark family secrets.",
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    year: 2003,
    image: "https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg",
    description:
      "A fast-paced thriller combining art, history, and religion in a global conspiracy.",
  },
  {
    title: "Big Little Lies",
    author: "Liane Moriarty",
    genre: "Mystery",
    year: 2014,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmgwEQ8ohe8QFARN2SPJW_MBYwvwpXQpY9wg&s",
    description:
      "A darkly humorous mystery about three women whose secrets lead to murder.",
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Mystery",
    year: 2019,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5st0ZKNvS3-Muqt49uhsZKmvqpT33vnML-w&s",
    description:
      "A shocking psychological mystery about a woman who stops speaking after committing a violent crime.",
  },

  // Programming
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    year: 2008,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbM0Jtzs0Oac40qgwYSW_OpwPgCuDxhS0rLA&s",
    description:
      "A guide to writing readable, efficient, and maintainable code for professional developers.",
  },
  {
    title: "You Don’t Know JS Yet",
    author: "Kyle Simpson",
    genre: "Programming",
    year: 2020,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1t4AYynJKnDhCmmG5WFIR-EQZsR9F6wPdfw&s",
    description:
      "An in-depth exploration of JavaScript’s core mechanisms and behaviors.",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt and David Thomas",
    genre: "Programming",
    year: 1999,
    image:
      "https://imgv2-1-f.scribdassets.com/img/document/402479056/original/c9471f71a8/1?v=1",
    description:
      "A timeless guide to becoming a better software developer with practical principles and advice.",
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    genre: "Programming",
    year: 2008,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Q7TfQ9ceN-jK850GxSL1YXtc9L16YY6iQA&s",
    description:
      "Highlights the elegant and powerful features of JavaScript that make it a unique programming language.",
  },
  {
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    genre: "Programming",
    year: 1994,
    image:
      "https://m.media-amazon.com/images/I/51IyprMp2IL._AC_UF1000,1000_QL80_.jpg",
    description:
      "A foundational text introducing software design patterns that improve code reusability and structure.",
  },
];

function renderBooks(bookArray) {
  booksList.innerHTML = "";

  bookArray.forEach((book) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.style.display = "flex";
    span.style.gap = "15px";

    const heading = document.createElement("h2");
    heading.textContent = book.title;
    heading.style.color = "white";

    const authorName = document.createElement("p");
    authorName.textContent = book.author;
    authorName.style.fontStyle = "italic";

    const year = document.createElement("p");
    year.textContent = book.year;

    const genreName = document.createElement("p");
    genreName.textContent = book.genre;
    genreName.style.padding = "5px 10px";
    genreName.style.backgroundColor = "orange";
    genreName.style.color = "white";
    genreName.style.display = "inline-block";
    genreName.style.borderRadius = "8px";
    genreName.style.margin = "10px 0";

    const description = document.createElement("p");
    description.textContent = book.description;

    const img = document.createElement("img");
    img.src = book.image;
    img.alt = book.title;

    const textwrapper = document.createElement("div");
    span.append(authorName, year);
    textwrapper.append(heading, span, genreName, description);

    li.append(img, textwrapper);
    booksList.append(li);
    setTimeout(() => li.classList.add("show"), 50);
  });
}

renderBooks(books);

function filterFunction() {
  const filtered = books.filter((book) => {
    const matchesGenre =
      selectedGenre === "All" || selectedGenre === book.genre;
    const matchesText =
      book.title.toLowerCase().includes(searchText) ||
      book.author.toLowerCase().includes(searchText);
    return matchesGenre && matchesText;
  });

  // Sorting logic
  if (currentSort === "yearAsc") {
    filtered.sort((a, b) => a.year - b.year); // older years first
  } else if (currentSort === "yearDesc") {
    filtered.sort((a, b) => b.year - a.year); // newer years first
  } else if (currentSort === "titleAsc") {
    filtered.sort((a, b) => a.title.localeCompare(b.title)); // A→Z
  } else if (currentSort === "titleDesc") {
    filtered.sort((a, b) => b.title.localeCompare(a.title));
    // Z→A
  }

  renderBooks(filtered);

  const noBooks = document.querySelector(".no-books");
  if (filtered.length === 0) {
    noBooks.style.display = "block";
  } else {
    noBooks.style.display = "none";
  }
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    selectedGenre = btn.textContent;

    filterFunction();
  });
});

bookFinder.addEventListener("input", () => {
  searchText = bookFinder.value.trim().toLowerCase();
  filterFunction();
});

sortSelect.addEventListener("change", () => {
  currentSort = sortSelect.value;
  filterFunction();
});
