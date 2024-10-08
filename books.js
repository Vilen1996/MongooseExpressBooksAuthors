const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  pages: {
    type: Number,
  },
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
