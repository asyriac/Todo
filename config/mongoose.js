// Including modules
const mongoose = require("mongoose");

// Connecting to the DB
mongoose.connect("mongodb://localhost/codeal", { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to DB"));

db.once("open", function() {
  console.log("Established connection to DB");
});
