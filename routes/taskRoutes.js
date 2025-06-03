
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


