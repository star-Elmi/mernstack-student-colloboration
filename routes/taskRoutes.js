const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasksByGroup,
  updateTaskStatus
} = require("../controllers/taskController");

router.post("/", createTask);
router.get("/:groupId", getTasksByGroup);
router.put("/:id/status", updateTaskStatus);

module.exports = router;
// This code defines the routes for managing tasks in an Express application.
// It includes routes for creating a task, retrieving tasks by group ID, and updating the status of a task.
// The `createTask` route handles POST requests to create a new task.
// The `getTasksByGroup` route handles GET requests to retrieve tasks associated with a specific group ID.
// The `updateTaskStatus` route handles PUT requests to update the status of a task by its ID.
// The routes are defined using Express Router and are exported for use in the main application file.
// This code defines the routes for managing tasks in an Express application.
// It includes routes for creating a task, retrieving tasks by group ID, and updating the status of a task.
// The `createTask` route handles POST requests to create a new task.
// The `getTasksByGroup` route handles GET requests to retrieve tasks associated with a specific group ID.
// The `updateTaskStatus` route handles PUT requests to update the status of a task by its ID.
// The routes are defined using Express Router and are exported for use in the main application file.
// This code defines the routes for managing tasks in an Express application.
// It includes routes for creating a task, retrieving tasks by group ID, and updating the status of a task.
// The `createTask` route handles POST requests to create a new task.
