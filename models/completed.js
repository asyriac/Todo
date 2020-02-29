const mongoose = require("mongoose");
// Create schema for the completed DB
const completedSchema = new mongoose.Schema({
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
  },
  completed: {
    type: String,
    required: true
  }
});

const Completed = mongoose.model("Completed", completedSchema);

module.exports = Completed;
