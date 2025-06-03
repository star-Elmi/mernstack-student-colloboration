// Task.js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  assigned_to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  group_id: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },
  status: { type: String, enum: ["pending", "in_progress", "completed"], default: "pending" },
  due_date: Date,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Task", taskSchema);
