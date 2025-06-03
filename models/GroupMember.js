const mongoose = require("mongoose");

const groupMemberSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  group_id: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },
  role: { type: String, enum: ["admin", "member"], required: true },
  joined_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("GroupMember", groupMemberSchema);

// This model defines the structure for group members in a MongoDB database using Mongoose.