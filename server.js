// Including modules
const express = require("express");

const port = 8000;
const app = express();
const db = require("./config/mongoose");

//Static folder
app.use(express.static("public"));

//Handling form data parsing
app.use(express.urlencoded({ extended: true }));

// Setting the viewengine and view path
app.set("view engine", "ejs");
app.set("views", "./views");

// Handling routes
app.use("/", require("./routes/index"));

// Starting the server
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else console.log(`Server started on port ${port}`);
});
