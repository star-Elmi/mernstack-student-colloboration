

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
// This model defines the structure for tasks in a MongoDB database using Mongoose.
// It includes fields for title, description, assigned user, group association, status, due date, and creation date.
// The `assigned_to` field references the User model, and the `group_id` field references the Group model.
// The status field can be one of "pending", "in_progress", or "completed", with a default value of "pending".
// The `created_at` field automatically records the date and time when the task is created.
// The model is exported for use in other parts of the application, such as controllers or services.
// This code defines a Mongoose schema for tasks in a MongoDB database.
// It includes fields for title, description, assigned user, group association, status, due date, and creation date.


