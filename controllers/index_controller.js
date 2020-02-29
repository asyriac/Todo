// Importing modules
const Todo = require("../models/todo");
const Completed = require("../models/completed");

// Controller to get todo list from database and print the list
module.exports.home_get = function(req, res) {
  // Fetch all the tasks from the DB
  Todo.find({}, function(err, todos) {
    if (err) {
      console.log("Error in fetching todo from DB");
      return;
    }
    res.render("index", {
      details: todos
    });
  });
};

// Controller to add a new todo into the task list
module.exports.home_post = function(req, res) {
  // If due date is not provided, "no deadline" is added
  if (req.body.date == "") {
    req.body.date = "No deadline";
  }
  //  Add due date as provided by user
  else {
    req.body.date = new Date(req.body.date);
    req.body.date = req.body.date.toDateString();
  }
  // Create a new DB entry with the todo task
  Todo.create(
    {
      desc: req.body.desc,
      category: req.body.category,
      date: req.body.date
    },
    function(err, newTodo) {
      if (err) {
        console.log("Error in creating todo");
        return;
      }
      console.log("Todo added ", newTodo);
      res.redirect("/");
    }
  );
};

// Controller to delete a todo
module.exports.delete_todo = function(req, res) {
  //   Fetch id of the task to be deleted
  let id = req.query.id;
  // Delete the task from the DB
  Todo.findByIdAndDelete(id, function(err) {
    if (err) {
      console.log("Error in deleting todo");
      return;
    }
    res.redirect("/");
  });
};

// Controller to mark a todo item as completed
module.exports.complete_todo = function(req, res) {
  // Fetch id of the task to be deleted
  let id = req.query.id;
  // Find the task in the todo DB
  Todo.findById(id, function(err, detail) {
    let completedData = new Date();
    // Date when the task was completed
    completedData = completedData.toDateString();
    // Create an entry in complete DB
    Completed.create(
      {
        desc: detail.desc,
        category: detail.category,
        date: detail.date,
        completed: completedData
      },
      function(err, completed) {
        if (err) {
          console.log("Error in creating todo");
          return;
        }
        console.log("Completed added ", completed);
      }
    );
  });
  //   Delete the task from todo DB
  Todo.findByIdAndDelete(id, function(err) {
    if (err) {
      console.log("Error in deleting todo");
      return;
    }
    res.redirect("/");
  });
};

// Controller to get the completed list from the database and print it
module.exports.completed_list = function(req, res) {
  Completed.find({}, function(err, todos) {
    if (err) {
      console.log("Error in fetching todo from DB");
      return;
    }
    res.render("completed", {
      details: todos
    });
  });
};
