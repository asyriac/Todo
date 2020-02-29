const express = require("express");

const router = express.Router();

const index_controller = require("../controllers/index_controller");

// Route handling
router.get("/", index_controller.home_get);
router.post("/", index_controller.home_post);
router.get("/delete-todo", index_controller.delete_todo);
router.get("/complete-todo", index_controller.complete_todo);
router.get("/completed-list", index_controller.completed_list);

module.exports = router;
