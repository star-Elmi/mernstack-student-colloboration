const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllTasks,
  getTaskById,
  getTasksByGroup,
  updateTask,
  deleteTaskById,
  deleteAllTasks
} = require("../controllers/taskController");

// Create a new task
router.post("/", createTask);

// Get all tasks
router.get("/", getAllTasks);

// Get task by ID
router.get("/:id", getTaskById);

// Get tasks by group ID
router.get("/group/:groupId", getTasksByGroup);

// Update a task by ID
router.put("/:id", updateTask);

// Delete a task by ID
router.delete("/:id", deleteTaskById);

// Delete all tasks
router.delete("/", deleteAllTasks);

module.exports = router;

// This code sets up the routes for managing tasks in a collaborative application.

// The routes are linked to their respective controller functions, which handle the business logic for each operation.
// The `createTask` function is used to create a new task.
// The `getAllTasks` function retrieves all tasks from the database.
// The `getTaskById` function retrieves a specific task by its ID.

// The `getTasksByGroup` function retrieves tasks associated with a specific group by its ID.
// The `updateTask` function updates a task's information by its ID.
    