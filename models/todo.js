const mongoose = require("mongoose");
// Create a schema for the todo DB
const todoSchema = new mongoose.Schema({
  desc: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
