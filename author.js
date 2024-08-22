const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: Date,
    required: true,
  },
  nationality: {
    type: String,
    enum: ["America", "Canada"],
  },
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
