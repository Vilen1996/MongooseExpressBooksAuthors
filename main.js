const express = require("express");
const connectDB = require("./db");
const Author = require("./author");
const Book = require("./books");

const app = express();

connectDB();

app.use(express.json());

app.post("/authors", async (req, res) => {
  const { name, dateofbirth, nationality } = req.body;
  try {
    const author = new Author({ name, dateofbirth, nationality });
    await author.save();
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/books", async (req, res) => {
  const { title, pages, author_id } = req.body;
  try {
    const book = new Book({ title, pages, author_id });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
